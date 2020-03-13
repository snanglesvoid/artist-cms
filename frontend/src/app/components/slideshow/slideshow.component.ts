import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  AfterContentInit,
} from '@angular/core'

import { trigger, style, animate, state, transition } from '@angular/animations'

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.less'],
  animations: [
    trigger('fade', [
      state('out', style({ opacity: 0.0, 'pointer-events': 'none' })),
      state('in', style({ opacity: 1.0, 'pointer-events': 'all' })),
      transition('in => out', [animate('500ms 0ms ease-out')]),
      transition('out => in', [animate('500ms 0ms ease-in')]),
      transition('void => in', [
        style({ opacity: 0.0 }),
        animate('500ms 0ms ease-in'),
      ]),
    ]),
  ],
})
export class SlideshowComponent implements OnInit, AfterContentInit {
  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {}

  private _images: string[]
  @Input()
  public get images() {
    return this._images
  }
  public set images(value: string[]) {
    if (!value || value.length == 0) return
    this._images = value.filter(x => x)
    this._currentIndex = -1
  }

  private _currentSlide: string
  @Input()
  public get currentSlide() {
    return this._currentSlide
  }
  public set currentSlide(slide) {
    if (!slide) {
      this._currentSlide = undefined
      this._currentIndex = -1
      return
    }
    this._currentSlide = slide
    this._currentIndex = this.images.indexOf(slide)
    this.slideChanged.emit({
      image: this.currentSlide,
      index: this.currentIndex,
    })
    this.currentSlideChange.emit(this.currentSlide)
  }

  private _currentIndex: number = 0
  @Input()
  public get currentIndex() {
    return this._currentIndex
  }
  public set currentIndex(value) {
    this._currentIndex = value
    if (value < 0) {
      this.currentSlide = undefined
    } else if (this.images && this.images.length > 0) {
      this.currentSlide = this.images[value]
    }
  }

  @Input() imageFit: string = 'cover'
  @Input() imageClass: string = ''

  @Output() slideChanged = new EventEmitter<{
    image: string
    index: number
  }>()
  @Output() currentSlideChange = new EventEmitter<string>()
  @Output() contentRendered = new EventEmitter<any>()
  @Output() imageLoadProgress = new EventEmitter<any>()

  private _imagesLoaded = 0
  imageLoaded(event) {
    console.log('slideshow load progress', event)
    this._imagesLoaded++
    this.imageLoadProgress.emit({
      loaded: this._imagesLoaded,
      total: this.images.length,
      ratio: this._imagesLoaded / this.images.length,
    })
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length
  }

  previousSlide() {
    this.currentIndex =
      (this.images.length + this.currentIndex - 1) % this.images.length
  }
}