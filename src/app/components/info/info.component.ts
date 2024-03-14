import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { SharedPageComponent } from '../shared-page/shared-page.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{

  constructor(private router: Router, private _bottomSheet: MatBottomSheet){}

  ngOnInit() {
    L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.9.4/dist/images/';
    // Inicialización del mapa
    const map = L.map('map').setView([18.90669212242827, -98.44460240102276], 13);
    // Añade una capa de mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    // Añade marcadores con coordenadas específicas
    const coordinates = [
      { lat: 18.90669212242827, lng: -98.44460240102276 }, 
      // Agrega más coordenadas según tus datos
    ];
    coordinates.forEach(coord => {
      L.marker([coord.lat, coord.lng]).addTo(map);
    });
  }

  selectedValue: string = "";

  servicios = [
    {value: 'Servicio 1', viewValue: 'Servicio 1'},
    {value: 'Servicio 2', viewValue: 'Servicio 2'},
    {value: 'Servicio 3', viewValue: 'Servicio 3'},
    {value: 'Servicio 3', viewValue: 'Servicio 4'},
    {value: 'Servicio 3', viewValue: 'Servicio 5'},
  ];

  tramites = [
    {value: 'steak-0', viewValue: 'Tramite 1'},
    {value: 'pizza-1', viewValue: 'Tramite 2'},
    {value: 'tacos-2', viewValue: 'Tramite 3'},
    {value: 'tacos-2', viewValue: 'Tramite 4'},

  ];

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  cards = [
    { image: 'assets/img/person1.jpg', status:'Vigente', name: 'Ing. Hugo Escobedo Hidalgo', 
    addess: 'Nicolas Bravo 203-B, Colonia Centro, Atlixco Puebla.' ,cp:'74200', register:'100/20', 
    email:'escobedo820@gmail.com', cel:'2441234212'}
  ];

  action(){
    window.open('https://www.google.com/maps?q=18.90669212242827,-98.44460240102276');
  }

  openBottomSheet(): void {
    this._bottomSheet.open(SharedPageComponent);
  }

  redirigir(){
    this.router.navigate(['/tramites']);  
  }
  
}

