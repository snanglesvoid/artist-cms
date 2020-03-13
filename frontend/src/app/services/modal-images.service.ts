import { Injectable } from '@angular/core'
import { Router, NavigationStart } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class ModalImagesService {
  private _isOpen: boolean = false
  public get isOpen(): boolean {
    return this._isOpen
  }

  private _images: string[]
  private _active: string

  public get images() {
    return this._images
  }
  public get active() {
    return this._active
  }
  public set active(image: string) {
    this._active = image
  }

  private _loading: boolean = true
  public get loading() {
    return this._loading
  }

  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.close()
      }
    })
  }

  open(images: string[], active: string) {
    console.log('modal images open')
    this._images = images
    this._active = active
    this._isOpen = true
    this._loading = true

    setTimeout(() => (this._loading = false), 500)

    document.getElementsByTagName('body')[0].style.overflow = 'hidden'
  }

  close() {
    console.log('modal images close')
    this._images = null
    this._active = null
    this._isOpen = false

    document.getElementsByTagName('body')[0].style.overflow = 'unset'
  }
}