import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceXLaunchComponent } from './space-x-launch/space-x-launch.component';
import { spacexService } from './space-x-launch/spaceX.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SpaceXLaunchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [spacexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
