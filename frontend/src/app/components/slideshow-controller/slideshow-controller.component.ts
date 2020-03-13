import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import {
  trigger,
  query,
  stagger,
  transition,
  style,
  keyframes,
  animate,
} from '@angular/animations'
import { SlideshowComponent } from '../slideshow/slideshow.component'

@Component({
  selector: 'app-slideshow-controller',
  templateUrl: './slideshow-controller.component.html',
  styleUrls: ['./slideshow-controller.component.less'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0.0 }),
            stagger(150, [
              animate(
                '1s ease-out',
                keyframes([
                  style({ transform: 'scale(0.0)', opacity: 0.0, offset: 0.0 }),
                  style({ transform: 'scale(1.5)', opacity: 1.0, offset: 0.8 }),
                  style({ transform: 'scale(1.0)', opacity: 1.0, offset: 1.0 }),
                ])
              ),
            ]),
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            stagger(150, [
              animate(
                '1s ease-out',
                keyframes([
                  style({ transform: 'scale(1.0)', opacity: 1.0, offset: 0.0 }),
                  style({ transform: 'scale(1.2)', opacity: 1.0, offset: 0.8 }),
                  style({ transform: 'scale(0.0)', opacity: 0.0, offset: 1.0 }),
                ])
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class SlideshowControllerComponent implements OnInit {
  private _slideshow: SlideshowComponent
  @Input()
  public get slideshow(): SlideshowComponent {
    return this._slideshow
  }
  public set slideshow(s: SlideshowComponent) {
    this._slideshow = s
  }

  constructor() {}

  ngOnInit() {}

  selectImage(event, image: string) {
    if (event.stopPropagation) {
      event.stopPropagation()
    }
    if (event.preventDefault) {
      event.preventDefault()
    }
    this.slideshow.currentSlide = image
  }

  isImageActive(image: string) {
    if (this.slideshow) {
      return this.slideshow.currentSlide === image
    } else {
      return false
    }
  }

  @Output()
  animationDone = new EventEmitter<any>()

  animationDidFinish(event) {
    // console.log('animation finished')
    this.animationDone.emit(event)
  }
}