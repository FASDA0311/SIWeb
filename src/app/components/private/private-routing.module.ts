import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './Mantenimientos/usuarios/usuarios.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [

  {
    path : "1",
    component : UsuariosComponent
  },
  {
    path : "MenuPrincipal",
    component : LayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
