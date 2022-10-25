import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MascotaComponent } from './mascota.component';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [MascotaComponent],
  exports: [MascotaComponent]
})
export class MascotaComponentModule {}
