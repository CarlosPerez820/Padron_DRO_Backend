import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  
  constructor(private router: Router){}

  cards = [
    { image: 'assets/img/person1.jpg', status:'Vigente', name: 'Ing. Hugo Escobedo Hidalgo', 
    addess: 'Nicolas Bravo 203-B, Colonia Centro, Atlixco Puebla.' ,cp:'74200', register:'100/20', 
    email:'escobedo820@gmail.com', cel:'2441234212'},
    { image: 'assets/img/person1.jpg', status:'Vencida', name: 'Ing. Hugo Escobedo Hidalgo', 
    addess: 'Nicolas Bravo 203-B, Colonia Centro, Atlixco Puebla.' ,cp:'74200', register:'100/20', 
    email:'escobedo820@gmail.com', cel:'2441234212'},
    { image: 'assets/img/person1.jpg', status:'Vigente', name: 'Ing. Hugo Escobedo Hidalgo', 
    addess: 'Nicolas Bravo 203-B, Colonia Centro, Atlixco Puebla.' ,cp:'74200', register:'100/20', 
    email:'escobedo820@gmail.com', cel:'2441234212'},
    { image: 'assets/img/person1.jpg', status:'Vigente', name: 'Ing. Hugo Escobedo Hidalgo', 
    addess: 'Nicolas Bravo 203-B, Colonia Centro, Atlixco Puebla.' ,cp:'74200', register:'100/20', 
    email:'escobedo820@gmail.com', cel:'2441234212'},
    { image: 'assets/img/person1.jpg', status:'Vigente', name: 'Ing. Hugo Escobedo Hidalgo', 
    addess: 'Nicolas Bravo 203-B, Colonia Centro, Atlixco Puebla.' ,cp:'74200', register:'100/20', 
    email:'escobedo820@gmail.com', cel:'2441234212'},
  ];

  redireccion(){
    this.router.navigate(['/informacion']);
  }

}
