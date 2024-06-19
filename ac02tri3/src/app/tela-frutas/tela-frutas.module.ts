import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaFrutasPageRoutingModule } from './tela-frutas-routing.module';

import { TelaFrutasPage } from './tela-frutas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaFrutasPageRoutingModule
  ],
  declarations: [TelaFrutasPage]
})
export class TelaFrutasPageModule {}
