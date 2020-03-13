import {
  Component,
  OnInit,
  HostBinding,
  ViewChild,
  ElementRef,
} from '@angular/core'
import { ModalImagesService } from 'src/app/services/modal-images.service'
import { trigger, style, animate, transition } from '@angular/animations'
import { SlideshowComponent } from '../slideshow/slideshow.component'


@Component({
  selector: 'app-modal-images',
  templateUrl: './modal-images.component.html',
  styleUrls: ['./modal-images.component.less'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms 0ms ease', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('600ms 0ms ease', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ModalImagesComponent implements OnInit {
  constructor(public modal: ModalImagesService) {}

  ngOnInit() {}

  @HostBinding('style.pointer-events')
  get pointerEvents() {
    return this.modal.isOpen ? 'all' : 'none'
  }

  @ViewChild('container', { static: false }) container: ElementRef

  @ViewChild(SlideshowComponent, { static: false })
  slideshow?: SlideshowComponent

  animationDone = false

  animationFinished() {
    this.animationDone = true
  }

  previous(event) {
    if (event.stopPropagation) {
      event.stopPropagation()
    }
    if (event.preventDefault) {
      event.preventDefault()
    }
    this.slideshow.previousSlide()
  }
  next(event) {
    if (event.stopPropagation) {
      event.stopPropagation()
    }
    if (event.preventDefault) {
      event.preventDefault()
    }
    this.slideshow.nextSlide()
  }
}