import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IProfesorPageRoutingModule } from './iprofesor-routing.module';

import { IProfesorPage } from './iprofesor.page';
import { ComponentesModule } from '../componentes/componentes.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IProfesorPageRoutingModule,
    ComponentesModule
  ],
  declarations: [IProfesorPage]
})
export class IProfesorPageModule {}
