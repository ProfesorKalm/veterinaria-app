import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-mascota-form',
  templateUrl: './mascota-form.page.html',
  styleUrls: ['./mascota-form.page.scss'],
})
export class MascotaFormPage implements OnInit {
  mascota: any = {};

  constructor(
    private mascotaServ: MascotaService,
    private router:Router

  ) { }

  ngOnInit() {
  }
  agregarMascota() {
    console.log(this.mascota);

    if(this.mascota != null) {
      // agtrgo

      this.mascotaServ.insertarMascota(this.mascota).subscribe( (mascota:any) => {
        if(mascota.id != null) {
          // se agrego correctamente
          // volver a la pagina de inicio tab
          this.router.navigate(["/"]);
        }
      });

    }

  }
}
