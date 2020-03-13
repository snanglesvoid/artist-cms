import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

declare var marked: (any) => any

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.less']
})
export class MarkdownComponent implements OnInit {

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {

  }

  private _markdown: string = ''
  
  @Input() 
  public get markdown(): string {
    return this._markdown
  }
  public set markdown(value: string) {
    this._markdown = value
    this._html = marked(value)
  }

  private _html: string
  public get html() {
    return this.sanitizer.bypassSecurityTrustHtml(this._html)
  }
}
