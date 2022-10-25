import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MascotaService } from 'src/app/services/mascota.service';


@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss'],
})

export class MascotaComponent implements OnInit {
  
  
  nombre ="Marcos";
  mascotas:any = [];

  constructor(
    private mascotaServ: MascotaService,
    private route: ActivatedRoute
    
  ) {
    this.listarMascotas();
  }

  ngOnInit() {
    this.route.url.subscribe( () => {
      console.log("params ruta:");
      this.listarMascotas();
    });   
  }

  listarMascotas(){
    this.mascotaServ.getAllMascotas().subscribe((data:any) => {      
      this.mascotas = data;
    });
  }

  guardaMascota() {
    this.mascotaServ.insertarMascota("").subscribe((data:any) => {
      console.log(data);
      
    });
    this.listarMascotas();
  }

  eliminarMascota(id:number) {
    this.mascotaServ.eliminar(id).subscribe( (mascota: any) => {
      console.log(mascota);
      if(mascota.id != null) {
        alert("Eliminado correctamente");  
        this.listarMascotas();
      } else {
        alert("Ocurrio un error");
      }
    });

  }

}
