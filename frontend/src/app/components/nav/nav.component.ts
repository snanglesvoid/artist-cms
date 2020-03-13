import { Component, OnInit } from '@angular/core'
import { animate, style, trigger, state, transition } from '@angular/animations'
import { Observable } from 'rxjs'
import { GraphqlApiService } from 'src/app/services/graphql-api.service'
import { map, tap } from 'rxjs/operators'
import { SettingsService } from 'src/app/settings.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less'],
  animations: [
    trigger('toggle', [
      state(
        'hidden',
        style({
          opacity: 1.0,
          transform: 'translateX(100%)',
        })
      ),
      state(
        'visible',
        style({
          opacity: 1.0,
          transform: 'translateX(0)',
        })
      ),
      transition('* <=> *', animate('.5s ease')),
    ]),
  ],
})
export class NavComponent implements OnInit {
  constructor(
    private api: GraphqlApiService,
    public settings: SettingsService
  ) {}

  ngOnInit() {
    const query = `
      query {
        allPageCategories {
          name
          menuLabel
          pages {
            name
            slug
            order
          }
        }
        allPages{
          name
          slug
          order
        }
      }
    `
    this.pages$ = this.api.graphql(query, {}).pipe(
      tap(console.log),
      map(x => x.data.allPages),
      map(xs => xs.sort((a,b) => a.order - b.order))
    )
    this.pageCategories$ = this.api.graphql(query, {}).pipe(
      tap(console.log),
      map(x => x.data.allPageCategories),
      tap(x => x.forEach(xs => xs.pages = xs.pages.sort((a,b) => a.order - b.order)))
    )

    // this.settings.settings$.pipe(tap(x => console.log('NAV ___ ', x)))
  }

  toggleNav() {
    this.visibility = this.visibility == 'hidden' ? 'visible' : 'hidden'
  }

  visibility = 'hidden'

  pageCategories$: Observable<any[]>
  pages$: Observable<any[]>
}