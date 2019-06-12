import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InicioComponent} from "../inicio/inicio.component";
import {LoginComponent} from "./login.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
