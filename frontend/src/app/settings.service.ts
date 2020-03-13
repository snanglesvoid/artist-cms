import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GraphqlApiService } from './services/graphql-api.service';
import { share, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(
    private api: GraphqlApiService
  ) { }

  private query = `
    query {
      allSettings(where: { active: true }) {
        name
        titleImage {
          publicUrl
        }
        bannerTexture {
          publicUrl
        }
        active
        primaryColor
        bannerText
      }
    }
  `
  settings$: Observable<any> = this.api.graphql(this.query, {}).pipe(
    map(x => x.data.allSettings[0]),
    share()
  )
  primaryColor$: Observable<any> = this.settings$.pipe(
    map(x => x.primaryColor),
    share()
  )
  bannerText$: Observable<string> = this.settings$.pipe(
    map(x => x.bannerText),
    share()
  )
  titleImage$: Observable<string> = this.settings$.pipe(
    map(x => x.titleImage.publicUrl),
    share()
  )
  bannerTexture$: Observable<string> = this.settings$.pipe(
    map(x => x.bannerTexture.publicUrl),
    share()
  )
}
