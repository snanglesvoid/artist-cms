import { Injectable, Output, EventEmitter } from '@angular/core'
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector'

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private deviceDetector: DeviceDetectorService) {
    this.setup()
  }

  private setup() {
    this._deviceInfo = this.deviceDetector.getDeviceInfo()
    this._fullScreenImageResolution = this.isMobile
      ? { width: 640, height: 1280 }
      : this.screenMax <= 640
      ? { width: 640, height: 1280 }
      : this.screenMax <= 1024
      ? { width: 1024, height: 1280 }
      : this.screenMax <= 1280
      ? { width: 1280, height: 1280 }
      : this.screenMax <= 1600
      ? { width: 1600, height: 1600 }
      : this.screenMax <= 2048
      ? { width: 2048, height: 2048 }
      : this.screenMax <= 2560
      ? { width: 2560, height: 2560 }
      : true
      ? { width: 3840, height: 3840 }
      : null

    this._largeImageResolution = this.isMobile
      ? { width: 640, height: 1024 }
      : this.screenMax <= 640
      ? { width: 640, height: 1024 }
      : this.screenMax <= 1024
      ? { width: 1024, height: 1024 }
      : this.screenMax <= 1280
      ? { width: 1024, height: 1024 }
      : this.screenMax <= 1600
      ? { width: 1280, height: 1280 }
      : this.screenMax <= 2048
      ? { width: 1600, height: 1600 }
      : this.screenMax <= 2560
      ? { width: 2048, height: 2048 }
      : true
      ? { width: 2560, height: 2560 }
      : null

    this._halfScreenImageResolution = this.isMobile
      ? { width: 640, height: 1024 }
      : this.screenMax <= 640
      ? { width: 640, height: 1024 }
      : this.screenMax <= 1024
      ? { width: 640, height: 1024 }
      : this.screenMax <= 1280
      ? { width: 640, height: 1024 }
      : this.screenMax <= 1600
      ? { width: 840, height: 1024 }
      : this.screenMax <= 2048
      ? { width: 1024, height: 1024 }
      : this.screenMax <= 2560
      ? { width: 1280, height: 1024 }
      : true
      ? { width: 2048, height: 1200 }
      : null

    this._smallImageResolution = this.isMobile
      ? { width: 320, height: 640 }
      : this.screenMax <= 640
      ? { width: 320, height: 640 }
      : this.screenMax <= 1024
      ? { width: 320, height: 640 }
      : this.screenMax <= 1280
      ? { width: 480, height: 960 }
      : this.screenMax <= 1600
      ? { width: 640, height: 1280 }
      : this.screenMax <= 2048
      ? { width: 640, height: 1280 }
      : this.screenMax <= 2560
      ? { width: 800, height: 1280 }
      : true
      ? { width: 1280, height: 1600 }
      : null

    const resize = () => {
      let ms = this.isMediaSm()
        ? 'sm'
        : this.isMediaMd()
        ? 'md'
        : this.isMediaLg()
        ? 'lg'
        : this.isMediaXl()
        ? 'xl'
        : 'lg'
      if (ms !== this._mediaSize) {
        this.mediaSizeChanged.emit(ms)
      }
      this._mediaSize = ms
    }
    window.addEventListener('resize', resize)
    resize()

    document.body.classList.add(this.isDesktop ? 'desktop' : 'touch')
  }

  private _fullScreenImageResolution = {
    width: 0,
    height: 0,
  }
  private _largeImageResolution = {
    width: 0,
    height: 0,
  }
  private _halfScreenImageResolution = {
    width: 0,
    height: 0,
  }
  private _smallImageResolution = {
    width: 0,
    height: 0,
  }

  public get fullScreenImageRes() {
    return this._fullScreenImageResolution
  }
  public get largeImageRes() {
    return this._largeImageResolution
  }
  public get halfScreenImageRes() {
    return this._halfScreenImageResolution
  }
  public get smallImageRes() {
    return this._smallImageResolution
  }

  private _deviceInfo: DeviceInfo
  public get deviceInfo() {
    return this._deviceInfo
  }
  public get isMobile() {
    return this.deviceDetector.isMobile()
  }
  public get isTablet() {
    return this.deviceDetector.isTablet()
  }
  public get isDesktop() {
    return this.deviceDetector.isDesktop()
  }
  public get screenWidth() {
    return screen.availWidth
  }
  public get screenHeight() {
    return screen.availHeight
  }
  public get screenMin() {
    return Math.min(this.screenWidth, this.screenHeight)
  }
  public get screenMax() {
    return Math.max(this.screenWidth, this.screenHeight)
  }

  public get sizeSm() {
    return 480
  }
  public get sizeMd() {
    return 768
  }
  public get sizeLg() {
    return 1200
  }
  public get sizeXl() {
    return 1600
  }

  public get marginLeft() {
    return 190
  }
  public get headerHeight() {
    return 120
  }
  public get tabbarOffsetY() {
    return 158
  }
  public get tabbarOffsetYSm() {
    return 0
  }
  public get headerHeightMd() {
    return 80
  }
  public get headerHeightSm() {
    return 80
  }

  public isMediaSm() {
    return window.innerWidth <= this.sizeSm
  }
  public isMediaMd() {
    return window.innerWidth > this.sizeSm && window.innerWidth <= this.sizeMd
  }
  public isMediaLg() {
    return window.innerWidth > this.sizeMd && window.innerWidth <= this.sizeXl
  }
  public isMediaXl() {
    return window.innerWidth > this.sizeXl
  }

  private _mediaSize
  public get mediaSize() {
    return this._mediaSize
  }

  @Output() mediaSizeChanged = new EventEmitter<string>()
}