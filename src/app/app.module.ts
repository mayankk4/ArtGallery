import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './ui/landing-page/landing-page.component';
import { UnderConstructionComponent } from './ui/under-construction/under-construction.component';
import { PhotosComponent } from './photos/photos.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UnderConstructionComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
