import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AgmCoreModule } from '@agm/core';

import { MapsComponent } from './components/mapsgoogle/maps.component';
import { MapboxComponent } from './components/mapbox/mapbox.component';
import { MapLeafletComponent } from './components/map-leaflet/map-leaflet.component';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    MapboxComponent,
    MapLeafletComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDkCz0Tg9YTj0mD5vllpyncMWJx9JaqerM'
      // apiKey: 'AIzaSyCj_m4wzzrJSUSPx6Uru1UeMdc2-ieOaig'  // old
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
