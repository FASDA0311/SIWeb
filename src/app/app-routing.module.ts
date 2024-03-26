import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { UsuariosComponent } from './components/Mantenimientos/usuarios/usuarios.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path : "login",
        component : LoginComponent,
    },
    {
        path : "MenuPrincipal",
        component : LayoutComponent,
        children : [
            
        ]
        
    },
    {
        path : "1",
        component : UsuariosComponent,
    },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
