import {
  Component,
  OnInit,
  Input,
  ElementRef,
  HostListener,
} from '@angular/core'

import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  PointLight,
  FontLoader,
  Group,
  TextGeometry,
  BufferGeometry,
  Mesh,
  DoubleSide,
  MeshPhongMaterial,
  TextureLoader,
} from 'three'

import { TweenMax, Expo } from 'gsap'

@Component({
  selector: 'app-three-d-heading',
  templateUrl: './three-d-heading.component.html',
  styleUrls: ['./three-d-heading.component.less'],
})
export class ThreeDHeadingComponent implements OnInit {
  constructor(private el: ElementRef) {}

  @Input() text: string
  @Input() background: number = 0xffffff // 0xe6e6fa
  @Input() backgroundAlpha: number = 0.0
  @Input() fontSize: number = 10.0
  @Input() fontHeight: number = 0.8
  @Input() texture: string = 'assets/textures/gold.jpg'

  private width
  private height
  private camera: PerspectiveCamera
  private scene: Scene
  private renderer: WebGLRenderer
  private lights: PointLight[]
  private lightPositions
  private lightsRotations
  private geometry: TextGeometry
  private bufferGeometry: BufferGeometry
  private group: Group
  private ready = false

  animationData = {
    groupRotateX: 0.0,
    groupRotateY: 0.0,
    cameraPositionZ: 10,
  }

  ngOnInit() {
    setTimeout(_ => this.setup(), 150)
  }

  setup() {
    this.ready = true
    this.scene = new Scene()
    this.renderer = new WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setClearColor(this.background, this.backgroundAlpha)
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.camera = new PerspectiveCamera(75, 1, 0.01, 200)
    this.camera.position.z = this.animationData.cameraPositionZ
    this.resize()
    this.initLights()

    this.group = new Group()

    const texture = new TextureLoader().load(this.texture)
    const meshMaterial = new MeshPhongMaterial({
      transparent: false,
      map: texture,
      shininess: 50,
      reflectivity: 0.2,
      side: DoubleSide,
    })

    let fontLoader = new FontLoader()
    fontLoader.load('assets/fonts/helvetiker_regular.typeface.json', font => {
      this.geometry = new TextGeometry(this.text, {
        font: font,
        size: this.fontSize,
        height: this.fontHeight,
        curveSegments: 24,
      })
      this.geometry.center()
      // this.geometry.translate(0, 0, 10)
      this.bufferGeometry = new BufferGeometry().fromGeometry(this.geometry)
      this.group.add(new Mesh(this.bufferGeometry, meshMaterial))
      this.scene.add(this.group)
      this.el.nativeElement.appendChild(this.renderer.domElement)
      // window.addEventListener('resize', _ => this.resize())
      window.requestAnimationFrame(_ => this.animate())

      TweenMax.to(this.animationData, 5, {
        cameraPositionZ: 50,
        ease: Expo.easeOut,
        onUpdate: _ => {
          this.camera.position.z = this.animationData.cameraPositionZ
        },
      })
    })
  }

  initLights() {
    this.lights = [[0, 200, 0], [100, 200, 100], [-100, -200, -200]].map(x => {
      let pl = new PointLight(0xffffff, 1, 0)
      pl.position.set(x[0], x[1], x[2])
      this.scene.add(pl)
      return pl
    })
    this.lightPositions = this.lights.map(l => {
      return {
        x: l.position.x,
        y: l.position.y,
        z: l.position.z,
      }
    })
    this.lightsRotations = {
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
    }
  }

  @HostListener('window:resize')
  resize() {
    let el: HTMLDivElement = this.el.nativeElement
    this.width = el.getBoundingClientRect().width
    // this.height = el.getBoundingClientRect().height
    this.height = this.width / 4
    el.style.height = this.height + 'px'
    console.log('resize', this.width, this.height)
    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.width, this.height)
  }

  @HostListener('mouseover')
  flip() {
    if (!this.ready) return
    TweenMax.to(this.animationData, 1, {
      groupRotateX: 2 * Math.PI,
      ease: Expo.easeOut,
      onUpdate: _ => {
        this.group.rotation.x = this.animationData.groupRotateX
      },
    })
  }
  @HostListener('mouseout')
  unflip() {
    if (!this.ready) return
    TweenMax.to(this.animationData, 1, {
      groupRotateX: 0,
      ease: Expo.easeOut,
      onUpdate: _ => {
        this.group.rotation.x = this.animationData.groupRotateX
      },
    })
  }

  animate() {
    window.requestAnimationFrame(_ => this.animate())
    // console.log('render')
    // this.group.rotation.x += 0.04 //rotationX;
    // this.group.rotation.y += 0.0 //rotationY;
    this.lightsRotations.rotationZ += 0.005
    this.lightsRotations.rotationX += 0.01
    this.lightsRotations.rotationY -= 0.008
    let sinz = Math.sin(this.lightsRotations.rotationZ)
    let cosz = Math.cos(this.lightsRotations.rotationZ)
    let siny = Math.sin(this.lightsRotations.rotationY)
    let cosy = Math.cos(this.lightsRotations.rotationY)
    let sinx = Math.sin(this.lightsRotations.rotationX)
    let cosx = Math.cos(this.lightsRotations.rotationX)
    this.lights.slice(0, 3).forEach((l, i) => {
      let pos = this.lightPositions[i]
      l.position.x = pos.x * cosz - pos.y * sinz
      l.position.y = pos.x * sinz + pos.y * cosz
      l.position.z = pos.z
      pos = { x: l.position.x, y: l.position.y, z: l.position.z }
      l.position.x = pos.x * cosy + pos.z * siny
      l.position.y = pos.y
      l.position.z = -pos.x * siny + pos.z * cosy
      pos = { x: l.position.x, y: l.position.y, z: l.position.z }
      l.position.x = pos.x
      l.position.y = pos.y * cosx - pos.z * sinx
      l.position.z = pos.y * sinx + pos.z * cosx
    })

    this.renderer.render(this.scene, this.camera)
  }
}