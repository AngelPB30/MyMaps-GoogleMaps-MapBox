import { Component, OnInit } from '@angular/core';
import * as L from "leaflet";
@Component({
  selector: 'app-map-leaflet',
  templateUrl: './map-leaflet.component.html',
  styleUrls: ['./map-leaflet.component.css']
})
export class MapLeafletComponent implements OnInit {

  lat: number = -6.7924086;
  lng: number = -79.8321989;
  tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  marker: L.Marker;
  map: L.Map;
  iconMarker: L.Icon;
  listCoor:any = [];
  nroMarker: number = 0;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.loaderMap();
    this.loaderMarker();
    this.ondblClickMap();
    this.onloaderUbicacion();
  }

  loaderMap() {
    this.map = L.map('mapa-mapbox',{
      center: [this.lat, this.lng],
      zoomControl: true,
      doubleClickZoom: false,
      dragging: true,
      zoom: 16,
      zoomAnimation: true,
      scrollWheelZoom: true,
    })

    L.tileLayer(this.tilesProvider, {
      attribution: '&copy; <a href="https://navasoft.com.pe/" target="_blank">Navasoft</a>',
      maxZoom: 18,
      minZoom: 15
    }).addTo(this.map);

    this.map.locate({enableHighAccuracy:true})
    this.map.on('locationfound', e =>{
      console.log(e)      
    })
  }

  loaderMarker(){
    this.iconMarker = L.icon({
      iconUrl: 'assets/img/marker01.png',
      iconSize: [50, 26]
    })
    this.marker =  L.marker([this.lat, this.lng], {
      icon: this.iconMarker,
      draggable: true
    }).addTo(this.map)
    .bindPopup('<center>Tu Pedido<br> <b>Nro: </b>001-963</center>')
    .openPopup();

    this.marker.on('drag', () =>{
      let LngLat = this.marker.getLatLng();
      this.lat = LngLat.lat;
      this.lng = LngLat.lng;
    })
  }

  ondblClickMap(){
    this.map.on('dblclick', (e:any) =>{
      let lat = e.latlng.lat;
      let lng = e.latlng.lng;
      L.marker([lat, lng], {
        icon: this.iconMarker,
        draggable: false
      }).addTo(this.map)
      .bindPopup(`Lat: ${lat} - Lng: ${lng}`)
      .openPopup();
      this.nroMarker = this.listCoor.length + 1;
      this.listCoor.push({lat:lat, lng:lng})
    })
  }

  onListCoor(){
    if(this.listCoor.length > 0){
      console.log(this.listCoor)
    }else{
      alert("No se han agregado coordenadas nuevas!!")
    }
  }

  onloaderUbicacion(){
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const {coords} = pos;
        console.log(coords);
        let marketNew = L.icon({
          iconUrl: 'assets/img/marker02.png',
          iconSize: [50, 26]
        })

        L.marker([coords.latitude, coords.longitude], {
          icon: marketNew,
          draggable: false
        }).addTo(this.map)
        .bindPopup('<center>Mi Posicion<br><b>Lat: </b>'+coords.latitude+'- <b>Lng: </b>'+coords.longitude+'</center>')
        .openPopup();
      },
      (err) => {
        console.log(err)
      },
      {
        enableHighAccuracy:true,
        timeout: 5000,
        maximumAge: 0
      }
    )
  }

}
