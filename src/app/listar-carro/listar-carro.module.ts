import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarCarroPageRoutingModule } from './listar-carro-routing.module';

import { ListarCarroPage } from './listar-carro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarCarroPageRoutingModule
  ],
  declarations: [ListarCarroPage]
})
export class ListarCarroPageModule {}
