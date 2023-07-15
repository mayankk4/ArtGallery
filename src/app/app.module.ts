import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './ui/landing-page/landing-page.component';
import { UnderConstructionComponent } from './ui/under-construction/under-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UnderConstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
