import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.page.html',
  styleUrls: ['./menu1.page.scss'],
})
export class MenuPage implements OnInit {

  correo: string = '';     //correo del input
  contrasena: string = ''; //contraseña del input
  tipo: string= "";         //tipo del registrar (context)

  id: string= "";
  constructor(private router:Router, private activateroute:ActivatedRoute) { 

    this.activateroute.queryParams.subscribe(param =>{
      //valido si viene o no información en la ruta
      
      if(this.router.getCurrentNavigation()?.extras.state){
        this.tipo =this.router.getCurrentNavigation()?.extras?.state?.['tipo1'];
        this.correo =this.router.getCurrentNavigation()?.extras?.state?.['correo2'];
        this.contrasena =this.router.getCurrentNavigation()?.extras?.state?.['contrase'];
      }
    })

  }

  ngOnInit() {
  }

  mostrarCard(id: string) {
    this.id = id;
  }

}
