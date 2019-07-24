import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Rutas
const routes: Routes = [
  {
    path: 'login', loadChildren: () => import('./pages/login/login.module')
      .then(m => m.LoginModule)
  },
  {
    path: 'registro', loadChildren: () => import('./pages/registro/registro.module')
      .then(m => m.RegistroModule)
  },

  {
    path: 'error', loadChildren: () => import('./pages/error/error.module')
      .then(m => m.ErrorModule)
  },
  {
    path: 'logout/:sure', loadChildren: () => import('./pages/login/login.module')
      .then(m => m.LoginModule)
  },
  {
    path: 'ajustes', loadChildren: () => import('./pages/user-edit/user-edit.module')
      .then(m => m.UserEditModule)
  },
  {
    path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module')
      .then(m => m.InicioModule)
  },
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes, {initialNavigation: 'enabled'})
  ]
})
export class AppRoutingModule {
}
