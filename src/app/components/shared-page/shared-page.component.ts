import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-page',
  templateUrl: './shared-page.component.html',
  styleUrls: ['./shared-page.component.css']
})
export class SharedPageComponent {

  telefono(){
    window.location.href = 'tel:' + '2441235677';
  }

  correo(){
    window.location.href = 'mailto:' + 'correoprueba@prueba.com'
  }

  whats(){
    window.location.href = 'https://wa.me/' + '2441291287';
  }

}
