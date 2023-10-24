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
      {
        path: 'alumno',
        loadChildren: () => import('../alumno/alumno.module').then( m => m.AlumnoPageModule)
      },
      {
        path: 'qr-code/:id',
        loadChildren: () => import('../qr-code/qr-code.module').then( m => m.QrCodePageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'clases',
        loadChildren: () => import('../clases/clases.module').then( m => m.ClasesPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
