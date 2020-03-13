import {
  Component,
  OnInit,
  Input,
  Output,
  AfterContentInit,
  ElementRef,
  ContentChildren,
  QueryList,
  OnDestroy,
  HostListener,
  ViewChild,
  HostBinding,
  EventEmitter,
} from '@angular/core'
import { ClientService } from 'src/app/services/client.service'
import { Observable, Subject } from 'rxjs'
import { throttleTime } from 'rxjs/operators'
import { EasingFunctionsService } from 'src/app/services/easing-functions.service'

declare const Packery

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  styleUrls: ['./masonry.component.less'],
})
export class MasonryComponent implements OnInit, OnDestroy, AfterContentInit {
  constructor(
    private client: ClientService,
    private el: ElementRef,
    private easingFunctions: EasingFunctionsService
  ) {}

  private packery

  ngOnInit() {
    this.resizeEventT$ = this.resizeEvent$.pipe(throttleTime(150))
    this.resizeEventT$.subscribe(_ => {
      this.resize()
      setTimeout(() => {
        this.pack()
      }, 100)
    })

    ;(window as any).masonry = this
  }

  ngOnDestroy() {}

  ngAfterContentInit() {
    this.resize()
    setTimeout(_ => this.pack(), 100)
  }

  pack() {
    if (this.gridItems.length == 0) return
    this.gridItems.forEach(
      x => (x.nativeElement.style.transition = 'transform 0')
    )
    let t = new Date()
    let width = this.el.nativeElement.getBoundingClientRect().width
    let cols =
      width <= this.client.sizeSm
        ? 1
        : width <= this.client.sizeMd
        ? 2
        : width <= this.client.sizeXl
        ? 3
        : 4

    let { itemWidth, gutter } =
      cols == 1
        ? { itemWidth: '100%', gutter: 12 }
        : cols == 2
        ? { itemWidth: 'calc(50% - 6px)', gutter: 12 }
        : cols == 3
        ? { itemWidth: 'calc(33% - 8px)', gutter: 12 }
        : { itemWidth: 'calc(25% - 9px)', gutter: 12 }

    this.gridItems.forEach(item => {
      let e: HTMLDivElement = item.nativeElement
      e.style.width = itemWidth
      e.style.height = 'auto'
    })

    this.gutter = gutter

    this.grid.nativeElement.style.width = '100%'

    if (!this.packery) {
      this.packery = new Packery(this.grid.nativeElement, {
        gutter: this.gutter,
        transitionDuration: this.transitionDuration,
        stagger: 30,
      })
    } else {
      // this.packery.options.originTop = true
      this.packery.layout()
    }
    // console.log('pack took ', new Date().getTime() - t.getTime(), 'ms')
  }

  imagesLoaded(event) {
    // console.log('masonry images loaded', event)
    setTimeout(() => this.pack(), 20)
  }

  @ViewChild('grid', { static: false }) grid: ElementRef
  @ContentChildren('gridItem') gridItems: QueryList<ElementRef>

  gutter: number = 12
  @Input() transitionDuration: string = '0.5s'

  resizeEvent$ = new Subject<any>()
  resizeEventT$: Observable<any>
  @HostListener('window:resize')
  hostResized() {
    this.resizeEvent$.next()
  }
  resize() {
    let w = this.el.nativeElement.getBoundingClientRect().width
    this.rowItemWidth =
      w <= this.client.sizeSm ? 100 : w <= this.client.sizeMd ? 150 : 200
    console.log('resize', w, this.rowItemWidth)
  }

  private _rowItemWidth: number = 100
  // @Input()
  public get rowItemWidth(): number {
    return this._rowItemWidth
  }
  public set rowItemWidth(value) {
    this._rowItemWidth = value
  }
  public get rowItemHeight() {
    return this.rowItemWidth
  }

  scrollBy(dx: number) {
    let duration = 50 + Math.abs(0.5 * dx)
    let el: HTMLDivElement = this.el.nativeElement
    const startingX = el.scrollLeft
    let start
    let step = timestamp => {
      start = !start ? timestamp : start
      const time = timestamp - start
      let ratio = this.easingFunctions.easeOutQuad(Math.min(time / duration, 1))
      el.scrollLeft = startingX + dx * ratio
      if (time < duration) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }

  nextPicture() {
    this.scrollBy(this.rowItemWidth + this.gutter)
  }
  previousPicture() {
    this.scrollBy(-this.rowItemWidth - this.gutter)
  }

  @HostBinding('class.row_100') get row_100() {
    return this.rowItemWidth == 100
  }
  @HostBinding('class.row_150') get row_150() {
    return this.rowItemWidth == 150
  }
  @HostBinding('class.row_200') get row_200() {
    return this.rowItemWidth == 200
  }
  @Output() centerItemIndex = new EventEmitter<number>()
}