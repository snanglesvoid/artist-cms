import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/settings.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  constructor(
    public settings: SettingsService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  backgroundUrl$: Observable<any> = this.settings.titleImage$.pipe(
    map(x => this.sanitizer.bypassSecurityTrustUrl(x))
  )

}
