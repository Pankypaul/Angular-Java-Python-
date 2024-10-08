import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = "";      //correo que entrega registrar (context)
  contras: string = "";    //contraseña que entrega registrar (context)

  mensaje_1!: string;
  mensaje_2!: string;
  mensaje_3!: string;


  Tutor: any = {

    id: 1,
    nombre: 'Andres Vasquez Fernández',
    correo: 'andres@gmail.com',
    contra: 'QWEasd123-',
    numero: '923334122'

  }

  Aprendiz: any = {

    id: 2,
    nombre: 'Scarlett Rivera Diaz',
    correo: 'scarlett@gmail.com',
    contra: 'qweQWE123-',
    numero: '975758484'

  }

  correo: string = '';     //correo del input
  contrasena: string = ''; //contraseña del input

  tipo: string = "";         //tipo del registrar (context)

  validarContraseña = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!-_()]).{8,}$/;


  constructor(private router: Router, private toastController: ToastController, private activateroute: ActivatedRoute) {
    this.activateroute.queryParams.subscribe(param => {
      //valido si viene o no información en la ruta

      if (this.router.getCurrentNavigation()?.extras.state) {
        this.tipo = this.router.getCurrentNavigation()?.extras?.state?.['tip'];
        this.email = this.router.getCurrentNavigation()?.extras?.state?.['correo1'];
        this.contras = this.router.getCurrentNavigation()?.extras?.state?.['contra'];

      }
    })
  }

  ngOnInit() {
  }

  irPagina() {
    /*let navigationextras: NavigationExtras = {
      state: {
        tipo1: this.tipo,
        contrase: this.contrasena,
        correo2: this.correo
      }
    }*/

    this.mensaje_3 = '';

    this.correo = this.correo.replace(/\s+/g, '');
    this.correo = this.correo.trim(); // Para el correo
    this.contrasena = this.contrasena.trim(); // Para el correo
    
    if(this.correo == "" || this.contrasena === ""){
      this.mensaje_3 = 'Rellena ambos campos.';
    }

    if (this.correo.trim() !== "" && this.contrasena.trim() !== "") {
      //console.log('correo y contraseña llenos');

      //Valide que haya un punto y una arroba y que haya algo antes y después de ellos

      const tieneArroba = (this.correo.match(/@/g) || []).length === 1; // Verifica que solo haya un '@'
      const tieneCaracteresInvalidos = /[(),<>;:\[\]{}]/.test(this.correo); // Verifica caracteres no permitidos

      const posicionArroba = this.correo.indexOf('@');
      const posicionPunto = this.correo.lastIndexOf('.');

      const algoAntesArroba = posicionArroba > 0; // Asegura que haya algo antes del '@'
      const algoEntreArrobaYPunto = posicionPunto > posicionArroba + 1; // Asegura que haya algo entre el '@' y el '.'
      const algoDespuesPunto = posicionPunto < this.correo.length - 1; // Asegura que haya algo después del '.'



      if (!this.correo || this.correo.trim() === "" || this.correo.trim().toUpperCase() === "NONE") {
        this.mensaje_3 = 'Los campos no pueden quedar vacios.';
      }
      else {

        if (tieneArroba && !tieneCaracteresInvalidos && algoAntesArroba && algoEntreArrobaYPunto && algoDespuesPunto) {
          console.log("El correo es válido");
        } else {
          this.mensaje_3 = 'El Correo o contraseña inválido.';
        }
      }

      // Validar la contraseña
      if (this.contrasena.trim() !== "") {
        if (!this.validarContraseña.test(this.contrasena) || this.contrasena.length < 8) {
          this.mensaje_3 = 'El Correo o contraseña inválido.';
        }
      }

      if (this.correo.trim() !== "" && this.contrasena.trim() !== "" && tieneArroba && algoAntesArroba && algoEntreArrobaYPunto && algoDespuesPunto && this.correo.length >= 8 && this.validarContraseña.test(this.contrasena) && this.contrasena.length >= 8) {
        //this.router.navigate(['/menu1'], navigationextras);
        this.router.navigate(['/menu1']);
      }
    }
  }

  onSubmit() {

  }
  /*
  async CamposVacios(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Por favor, rellene los campos en blanco',
      duration: 1500,
      position: position,
    });

    await toast.present();
  } 

  async correoYContrasenaInvalido(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Correo o contraseña incorrecta.',
      duration: 1500,
      position: position,
    });

    await toast.present();
  } 

  async maxCaracter(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Supera el maximo de caracteres.',
      duration: 1500,
      position: position,
    });

    await toast.present();
  } */

}


/*

if (!this.correo || !this.contrasena) {
        this.CamposVacios('bottom');
      } else if (this.correo.length >= 50 || this.contrasena.length >= 25) {
        this.maxCaracter('bottom')
      } else{
        
      }


if (tieneArroba && algoAntesArroba && algoEntreArrobaYPunto && algoDespuesPunto && this.correo == this.email && this.contras == this.contrasena /*&& this.tipo == 'Tutor' ) {   //(this.correo == this.Tutor.correo && this.contrasena == this.Tutor.contrasena)
        
        
        //this.router.navigate(['/menu1'],navigationextras);

      }else if (tieneArroba && algoAntesArroba && algoEntreArrobaYPunto && algoDespuesPunto && this.correo == this.email && this.contras == this.contrasena /*&& this.tipo == 'Aprendiz') {  //(this.correo == this.Aprendiz.correo && this.contrasena == this.Aprendiz.contrasena)
        console.log("El correo es válido11");
        
        //this.router.navigate(['/menu'],navigationextras);


        // this.router.navigate(['/perfil'],navigationextras);
        /*console.log("tieneArroba",tieneArroba);
        console.log("posicionArroba",posicionArroba);
        console.log("posicionPunto",posicionPunto);

        console.log("algoAntesArroba",algoAntesArroba);
        console.log("algoEntreArrobaYPunto",algoEntreArrobaYPunto);
        console.log("algoDespuesPunto",algoDespuesPunto); 
      }else if(this.correo == this.Tutor.correo || this.contrasena == this.Tutor.contrasena){
        this.router.navigate(['/menu1'],navigationextras);
      
      }else if(this.correo == this.Aprendiz.correo || this.contrasena == this.Aprendiz.contrasena){
        this.router.navigate(['/menu'],navigationextras);

      }else {
        //this.correoYContrasenaInvalido('bottom');
        //this.mensaje_1 = "El correo no es válido";
      }*/