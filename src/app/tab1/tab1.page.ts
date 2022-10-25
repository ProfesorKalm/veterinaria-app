import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  recargar = false;
  constructor(
    private router:Router
  ) {
    console.log("hola constructor ",this.recargar);
  }

  irFormularioMascota(){
    this.router.navigate(["/mascota-form"]);
  }

  ngOnInit(){
    console.log("hola oninit ",this.recargar);
  }
}
