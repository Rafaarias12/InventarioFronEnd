import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuards } from './security/auth.guard';
import { SesionComponent } from './sesion/sesion.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent, canActivate: [AuthGuards]},
  {path:'usuarios', component: UsuariosComponent, canActivate:[AuthGuards]},
  {path:'sesion', component: SesionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
