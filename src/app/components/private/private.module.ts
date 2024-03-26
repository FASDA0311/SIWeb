import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { UsuariosComponent } from './Mantenimientos/usuarios/usuarios.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
