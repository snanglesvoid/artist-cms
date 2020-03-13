import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { DeviceDetectorModule } from 'ngx-device-detector'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { MarkdownComponent } from './components/markdown/markdown.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { PictureComponent } from './components/picture/picture.component';
import { NavComponent } from './components/nav/nav.component';
import { TextFlipComponent } from './components/text-flip/text-flip.component';
import { MasonryComponent } from './components/masonry/masonry.component';
import { ScrollToDirective } from './scroll-to.directive';
import { ThreeDHeadingComponent } from './components/three-d-heading/three-d-heading.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ModalImagesComponent } from './components/modal-images/modal-images.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { SlideshowControllerComponent } from './components/slideshow-controller/slideshow-controller.component';
import { ModalImagesDirective } from './modal-images.directive';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    MarkdownComponent,
    ImageGalleryComponent,
    PictureComponent,
    NavComponent,
    TextFlipComponent,
    MasonryComponent,
    ScrollToDirective,
    ThreeDHeadingComponent,
    HomePageComponent,
    ModalImagesComponent,
    SlideshowComponent,
    SlideshowControllerComponent,
    ModalImagesDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
