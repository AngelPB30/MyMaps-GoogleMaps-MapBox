import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapsComponent } from './components/mapsgoogle/maps.component';
import { MapboxComponent } from './components/mapbox/mapbox.component';
import { MapLeafletComponent } from './components/map-leaflet/map-leaflet.component';


const routes: Routes = [
  {
    path: 'mapGoogle', 
    component: MapsComponent
  },
  {
    path: 'mapbox', 
    component: MapboxComponent
  },
  {
    path: 'mapleaflet', 
    component: MapLeafletComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
