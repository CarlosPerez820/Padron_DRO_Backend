import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.css']
})
export class TramitesComponent{

formulario!: FormGroup;
campos: string[] = ['Edad','Casa','Identifiacion oficial','contrato'];

constructor(private fb: FormBuilder) { }

ngOnInit(): void {
  this.formulario = this.fb.group({
    nombreCompleto: ['', Validators.required],
    numeroContacto: ['', Validators.required]
  });

  this.campos.forEach(campo => {
    const control = this.fb.control('');
    this.formulario.addControl(campo.toLowerCase(), control);
    control.setValidators(Validators.required); // Agregar validador requerido
    control.updateValueAndValidity(); // Actualizar estado de validez del control
  });
}

  enviarFormulario() {
    // Envía el formulario cuando se presiona el botón de enviar
    if (this.formulario.valid) {
      alert('Formulario válido, enviando datos...');
      
      const formData = new FormData();
      formData.append('nombreCompleto', this.formulario.get('nombreCompleto')?.value);
      formData.append('contacto', this.formulario.get('numeroContacto')?.value);

      Object.keys(this.formulario.controls).forEach(key => {
        const value = this.formulario.get(key)?.value;
        formData.append(key, value);
      });

      console.log(formData.get("nombreCompleto"));
      console.log(formData.get("casa"));
      console.log(formData.get("edad"));

      console.log(formData.get("contrato"));
      console.log(formData.get("identifiacion oficial"));

      console.log(formData.get("contacto"));



    } else {
      alert('Por favor, complete todos los campos antes de enviar.');
      console.log(this.formulario.controls);
    }
  }

  onFileSelected(event: any,input: HTMLInputElement) {
    const selectedFile = event.target.files[0];
    console.log('Archivo seleccionado:', selectedFile);
    if (selectedFile) {
      const rutaArchivo = selectedFile.name; // Obtiene el nombre del archivo
      console.log(`Ruta del archivo para el campo:`, rutaArchivo);
      input.value = rutaArchivo;
      // También puedes acceder a selectedFile.path si necesitas la ruta absoluta (no siempre está disponible).
    }
    // Aquí puedes realizar cualquier lógica adicional con el archivo seleccionado
  }
  
  cards = [
    { image: 'assets/img/person1.jpg', status:'Vigente', name: 'Ing. Hugo Escobedo Hidalgo', 
    addess: 'Nicolas Bravo 203-B, Colonia Centro, Atlixco Puebla.' ,cp:'74200', register:'100/20', 
    email:'escobedo820@gmail.com', cel:'2441234212'}
  ];




}
