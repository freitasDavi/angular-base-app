import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate:[authGuard] },
  { path: "login", component: LoginComponent },
  { path: "cadastro", component: HomeComponent },
  { path: "orcamento", component: HomeComponent, canActivate:[authGuard] },
  { path: "clientes", component: ClientesComponent, canActivate:[authGuard] },
  { path: "fornecedores", component: HomeComponent, canActivate:[authGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
