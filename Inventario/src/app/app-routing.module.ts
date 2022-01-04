import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquiposComponent } from './equipos/equipos.component';
import { HomeComponent } from './home/home.component';
import { AuthGuards } from './security/auth.guard';
import { SesionComponent } from './sesion/sesion.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path: '', redirectTo:'/sesion', pathMatch: 'full'},
  {path:'home', component: HomeComponent, canActivate: [AuthGuards]},
  {path:'usuarios', component: UsuariosComponent, canActivate:[AuthGuards]},
  {path:'equipo', component: EquiposComponent, canActivate:[AuthGuards]},
  {path:'sesion', component: SesionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
