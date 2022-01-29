import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';
import { LoginComponent } from './views/login/login.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';

const routes: Routes = [
  {path: "",component: LoginComponent},
{path:"usuarios",component: UsuariosComponent},
{ path: 'cadastrar', component: CadastrarComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
