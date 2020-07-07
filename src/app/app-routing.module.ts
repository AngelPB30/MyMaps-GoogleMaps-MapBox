import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapsComponent } from './components/maps/maps.component';
import { MapboxComponent } from './components/mapbox/mapbox.component';


const routes: Routes = [
  {
    path: 'mapGoogle', 
    component: MapsComponent
  },
  {
    path: 'mapbox', 
    component: MapboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
