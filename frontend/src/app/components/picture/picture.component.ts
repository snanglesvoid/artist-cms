import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export interface IPicture {
  id?: string
  title: string
  gridArea?: number
  safeUrl?: any
  picture?: {
    id?: string
    filename?: string
    originalFilename?: string
    publicUrl?: string
    publicUrlTransformed?: string
  }
}

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.less']
})
export class PictureComponent implements OnInit {

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {

  }

  @Input()
  picture: IPicture

  get url() {
    // console.log(this.picture)
    if (!this.picture || !this.picture.picture) return ""
    return this.sanitizer.bypassSecurityTrustUrl(this.picture.picture.publicUrl)
  }

}
