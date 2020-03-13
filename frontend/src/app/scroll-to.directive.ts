import {
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  OnInit,
  OnDestroy,
} from '@angular/core'
import { fromEvent, interval } from 'rxjs'
import { throttle } from 'rxjs/operators'

export type ViewportPosition = -1 | 0 | 1

function cumulativeOffset(element) {
  let top = 0
  do {
    top += element.offsetTop || 0
    element = element.offsetParent
  } while (element)
  return top
}

@Directive({
  selector: '[appScrollTo]',
})
export class ScrollToDirective implements OnInit, OnDestroy {
  @Input() offset: number = 0 // pixel offset for trigger
  @Input() ratio: number = 0.5 //ratio of element that needs to be in Viewport
  @Output() inViewport = new EventEmitter<{
    el: ElementRef
    pos: ViewportPosition
  }>()

  private _inViewport: ViewportPosition = 0
  public get isInViewport() {
    return this._inViewport
  }
  public set isInViewport(value: ViewportPosition) {
    if (value !== this._inViewport) {
      this._inViewport = value
      this.inViewport.emit({ el: this.el, pos: value })
    }
  }

  // @HostListener('window:scroll', [])
  windowScrolled() {
    this.isInViewport = this.isScrolledIntoView()
  }

  private subscription
  ngOnInit() {
    this.windowScrolled()
    this.subscription = fromEvent(window, 'scroll')
      .pipe(throttle(_ => interval(50)))
      .subscribe(_ => {
        this.windowScrolled()
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  constructor(private el: ElementRef) {}

  private isScrolledIntoView() {
    let docViewTop = window.scrollY
    let docViewBottom = docViewTop + window.innerHeight
    let elem: HTMLElement = this.el.nativeElement
    let elemTop = cumulativeOffset(elem) + this.offset
    let elemHeight = elem.offsetHeight
    let elemBottom = elemTop + elemHeight

    let isStart = Math.max(docViewTop, elemTop)
    let isEnd = Math.min(docViewBottom, elemBottom)

    return isEnd - isStart > elemHeight * this.ratio
      ? 0
      : elemTop > docViewTop
      ? 1
      : -1
  }
}