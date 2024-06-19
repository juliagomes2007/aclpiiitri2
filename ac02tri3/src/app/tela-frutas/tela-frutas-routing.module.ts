import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaFrutasPage } from './tela-frutas.page';

const routes: Routes = [
  {
    path: '',
    component: TelaFrutasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaFrutasPageRoutingModule {}
