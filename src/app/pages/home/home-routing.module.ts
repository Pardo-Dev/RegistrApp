import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children : [
      {
        path: 'crud-usuario',
        loadChildren: () => import('../crud-usuario/crud-usuario.module').then( m => m.CrudUsuarioPageModule)
      },
      {
        path: 'crud-asignatura',
        loadChildren: () => import('../crud-asignatura/crud-asignatura.module').then( m => m.CrudAsignaturaPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
