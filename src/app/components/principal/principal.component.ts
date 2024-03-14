import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  constructor(private router: Router){}

  cards = [
    { image: 'assets/img/actualizacion.jpg', title: 'Cursos de Actualización', 
    description: 'En este apartado aparecera una breve descripcion hablando de a que se refiere cada uno de los apartados respectivamente' },
    { image: 'assets/img/padron.jpg', title: "Padron de DRO'S", 
    description: 'En este apartado aparecera una breve descripcion hablando de a que se refiere cada uno de los apartados respectivamente' },
    { image: 'assets/img/corresponsables.jpg', title: 'Padron de Corresponsales', 
    description: 'En este apartado aparecera una breve descripcion hablando de a que se refiere cada uno de los apartados respectivamente' },
    { image: 'assets/img/tramite.jpg', title: 'Trámites', 
    description: 'En este apartado aparecera una breve descripcion hablando de a que se refiere cada uno de los apartados respectivamente' },
  ];

  redireccion(){
    this.router.navigate(['/usuarios']);
  }

}
