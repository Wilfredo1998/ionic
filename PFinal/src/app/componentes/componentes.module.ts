import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegresarComponent } from './regresar/regresar.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [RegresarComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    RegresarComponent
  ]
})
export class ComponentesModule { }
