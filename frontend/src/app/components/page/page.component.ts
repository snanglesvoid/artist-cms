import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map, tap, share } from 'rxjs/operators'
import { GraphqlApiService } from 'src/app/services/graphql-api.service';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { IPicture } from '../picture/picture.component';
import { IImageGallery } from '../image-gallery/image-gallery.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private api: GraphqlApiService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.pageData$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.api.getPage(params.get('slug'))),
      share()
    )
    this.pageTitle$ = this.pageData$.pipe(
      map(page => page.name as string)
    )
    this.textblocks$ = this.pageData$.pipe(
      map(page => page.textblocks),
      // switchMap(ids => {
      //   const query = `
      //     query matchingIds{
      //       allTextBlocks(wh)
      //     }
      //   `
      //   const variables = {}
      //   return this.api.graphql(query, variables)
      // })
    )
    this.pictures$ = this.pageData$.pipe(
      map(page => page.pictures),
      switchMap(pictures => {
        const query = `
          query picturesWithIds($ids: [ID], $transformation: CloudinaryImageFormat) {
            allPictures(where: { id_in:$ids }) {
              id
              title
              slug
              gridArea
              picture {
                id
                filename
                originalFilename
                publicUrl
                publicUrlTransformed(transformation: $transformation)
              }
            }
          }
        `
        const variables = {
          ids: pictures.map(x => x.id),
          transformation: {opacity: ".5"}
        }
        return this.api.graphql(query, variables)
      }),
      map(x => x.data.allPictures),
      tap(console.log),
    )
    this.galleries$ = this.pageData$.pipe(
      map(page => page.galleries),
      
    )
  }

  pageData$: Observable<any>
  pageTitle$: Observable<string>
  pictures$: Observable<IPicture[]>
  galleries$: Observable<IImageGallery[]>
  textblocks$: Observable<any[]>

  safeGridArea(item) {
    // console.log(item)
    if (!item.gridArea) return '1'
    return this.sanitizer.bypassSecurityTrustStyle(item.gridArea)
  }
}
