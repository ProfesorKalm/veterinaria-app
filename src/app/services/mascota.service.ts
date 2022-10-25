import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  url ="http://localhost:8080/api/mascota";
  constructor(private http:HttpClient) { }


  getAllMascotas(){
    return this.http.get("http://localhost:8080/api/mascota/getAllMascotas");
  }

  insertarMascota(data:any) {    
    return this.http.post("http://localhost:8080/api/mascota/guardarMascota", data );
  }


  eliminar(id: number) {
    return this.http.delete(this.url+"/eliminar/"+id);
  }
}
