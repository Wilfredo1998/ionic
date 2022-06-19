import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarAPage } from './registrar-a.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarAPageRoutingModule {}
