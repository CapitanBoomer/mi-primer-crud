import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarPageRoutingModule } from './agregar-routing.module';

import { AgregarPage } from './agregar.page';

@NgModule({
  imports: [ //en import va todo lo que es modulo
    CommonModule,
    IonicModule,
    AgregarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AgregarPage],
  providers: []
})
export class AgregarPageModule {}
