import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email : string = '';
  password : string = '';

  constructor(private router:Router) { }

  ngOnInit() {
  }

  irPagina(){
    //Crear el codigo de que quiera de la logica
    this.router.navigate(['/menu']);
  }

  onSubmit(){
    if (!this.email || !this.password) {
      alert('Porfavor, rellene los campos en blanco');
      return;
    }
    // Aquí iría la lógica para enviar los datos al servidor
    console.log('Correo:', this.email);
    console.log('Contraseña:', this.password);
    
    // Navegar a otra página si el formulario es válido
    this.router.navigate(['/menu']);

  }

  



}
