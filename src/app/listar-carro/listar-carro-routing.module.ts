import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarCarroPage } from './listar-carro.page';

const routes: Routes = [
  {
    path: '',
    component: ListarCarroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarCarroPageRoutingModule {}
