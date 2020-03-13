import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { observeProperty } from 'src/app/lib/observeProperty';
import { IPicture } from '../picture/picture.component';
import { switchMap, map, tap } from 'rxjs/operators';
import { GraphqlApiService } from 'src/app/services/graphql-api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MasonryComponent } from 'src/app/components/masonry/masonry.component';

export interface IImageGallery {
  id
}

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.less']
})
export class ImageGalleryComponent implements OnInit {

  constructor(
    private api: GraphqlApiService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.pictures$ = this.gallery$.pipe(
      switchMap(gallery => {
        const query = `
          query($id: ID!) {
            ImageGallery(where: {id: $id}) {
              pictures {
                title
                gridArea
                picture {
                  publicUrl
                }
              }
            }
          }
        `
        const variables = { id: gallery.id }
        return this.api.graphql(query, variables)
      }),
      map(x => x.data.ImageGallery.pictures),
      // tap(console.log),
      map((xs: IPicture[]) => xs.filter(x => x.picture && x.picture.publicUrl)),
      tap(xs => xs.forEach(x => x.safeUrl = this.safeUrl(x))),
      map((xs: IPicture[]) => xs.sort((a,b) => a.gridArea - b.gridArea)),
    )

    ;(window as any).gallery = this
  }

  @Input()
  gallery: IImageGallery
  gallery$ = observeProperty(this as ImageGalleryComponent, 'gallery')

  pictures$: Observable<IPicture[]>

  @ViewChild(MasonryComponent) masonry: MasonryComponent

  safeUrl(picture: IPicture) {
    console.log('safeUrl')
    return this.sanitizer.bypassSecurityTrustResourceUrl(picture.picture.publicUrl)
  }

  imageLoaded(event) {
    let img: HTMLImageElement
    img = event.target
    console.log('image loaded', event.target)
    img.style.opacity = '1.0'
    img.parentElement.classList.add('in-view')
    this.masonry.pack()
  }
  inViewportChange(event) {
    // console.log('change')
    let gridItem: HTMLDivElement = event.el.nativeElement
    let pos = event.pos
    if (pos < 1) {
      gridItem.classList.add('in-view')
    } else {
      gridItem.classList.remove('in-view')
    }
  }
}
