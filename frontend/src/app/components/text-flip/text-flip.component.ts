import { Component, OnInit, Input, HostListener } from '@angular/core'
import { trigger, state, transition, style, animate } from '@angular/animations'

@Component({
  selector: 'app-text-flip',
  templateUrl: './text-flip.component.html',
  styleUrls: ['./text-flip.component.less'],
  animations: [
    trigger('move', [
      state('centered', style({ transform: 'translateX(0%)' })),
      state('right', style({ transform: 'translateX(100%)' })),
      state('left', style({ transform: 'translateX(-100%)' })),
      transition('* <=> *', animate('50ms ease')),
    ]),
  ],
})
export class TextFlipComponent implements OnInit {
  private _text: string
  private _hover: boolean = false
  private _letters: string[]

  @Input()
  public get text() {
    return this._text
  }
  public set text(value: string) {
    this._text = value
    this._letters = value.split('').map(x => (x == ' ' ? '&nbsp;' : x))
  }
  @Input() flipOnHover: boolean = true

  public get letters() {
    return this._letters
  }
  public get hover() {
    return this._hover
  }

  @HostListener('mouseenter') onMouseEnter() {
    this._hover = true
  }
  @HostListener('mouseleave') onMouseLeave() {
    this._hover = false
  }

  constructor() {}

  ngOnInit() {}

  lowercaseMove() {
    return this.hover ? 'right' : 'centered'
  }
  uppercaseMove() {
    return this.hover ? 'centered' : 'left'
  }
}