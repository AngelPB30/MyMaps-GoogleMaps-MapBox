import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent implements OnInit {

  map: Mapboxgl.Map;
  lat: number = -6.7924086;
  lng: number = -79.8321989;
  key:string = 'pk.eyJ1Ijoiam9lMzAiLCJhIjoiY2tjYmdjcG5yMjU0aTM1b2J2MjVsdTc4bCJ9.XHwr8XWwQKpgJC250c4eqA'

  constructor() { }

  ngOnInit(): void {
    (Mapboxgl as any).accessToken = this.key;

    this.map = new Mapboxgl.Map({
      container: 'mapa-mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.lng, this.lat], // starting position --> LNG, LAT
      zoom: 15 // starting zoom
    });

    this.map.addControl(new Mapboxgl.NavigationControl());
    this.crearMarcador(this.lng, this.lat)
  }

  crearMarcador(lng: number, lat: number) {
    const popup = new Mapboxgl.Popup({ offset: 25 }).setText(
      'Construction on the Washington Monument began in 1848.'
    );

    // create DOM element for the marker
    const el = document.createElement('div');
    el.id = 'marker';

    const marker = new Mapboxgl.Marker(el, {draggable: true})
      .setLngLat([this.lng, this.lat])
      .setPopup(popup) // sets a popup on this marker
      .addTo(this.map);

    marker.on('drag', () => {
      let LngLat = marker.getLngLat()
      this.lat = LngLat.lat;
      this.lng = LngLat.lng;
    })
  }


}
