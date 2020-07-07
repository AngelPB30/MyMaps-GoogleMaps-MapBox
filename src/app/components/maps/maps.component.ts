import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat: number = -6.7924086;
  lng: number = -79.8321989;

  constructor() { }

  ngOnInit(): void {
  }

}
