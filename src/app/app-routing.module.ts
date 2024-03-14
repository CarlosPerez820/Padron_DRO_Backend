import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { SpashscreenComponent } from './components/spashscreen/spashscreen.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { InfoComponent } from './components/info/info.component';
import { TramitesComponent } from './components/tramites/tramites.component';
import { SharedPageComponent } from './components/shared-page/shared-page.component';

const routes: Routes = [
  {path: 'spash', component: SpashscreenComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: 'informacion', component: InfoComponent},
  {path: 'tramites', component: TramitesComponent},
  {path: 'shared', component: SharedPageComponent},
  {path: '', component: SpashscreenComponent },
  {path: '**', redirectTo: 'splash', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
