import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: HomeComponent },
  { path: "cadastro", component: HomeComponent },
  { path: "orcamento", component: HomeComponent },
  { path: "clientes", component: HomeComponent },
  { path: "fornecedores", component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
