import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudAsignaturaPageRoutingModule } from './crud-asignatura-routing.module';

import { CrudAsignaturaPage } from './crud-asignatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudAsignaturaPageRoutingModule
  ],
  declarations: [CrudAsignaturaPage]
})
export class CrudAsignaturaPageModule {}
