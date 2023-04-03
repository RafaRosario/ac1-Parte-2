import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TabelaIMCComponent } from './tabela-imc/tabela-imc.component';
const routes: Routes = [
{path:'home', component: HomeComponent},
{path:'imc', component: TabelaIMCComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
