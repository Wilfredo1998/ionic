import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IProfesorPage } from './iprofesor.page';

const routes: Routes = [
  {
    path: '',
    component: IProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IProfesorPageRoutingModule {}
