import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarAPageRoutingModule } from './registrar-a-routing.module';

import { RegistrarAPage } from './registrar-a.page';
import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarAPageRoutingModule,
    ComponentesModule
  ],
  declarations: [RegistrarAPage]
})
export class RegistrarAPageModule {}
