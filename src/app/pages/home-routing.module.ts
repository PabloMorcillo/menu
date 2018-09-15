import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { GraficaComponent } from './grafica/grafica.component';
import { DirectivesDirective } from '../directives.directive';
/** Componente enrutable */
/** Rutas asociadas a componentes */
const routes: Routes = [
  {
  path: 'pages', 
  component: PagesComponent,
  children: [ // rutas hijas, se verán dentro del componente padre
    {
      path: 'grafica', // la ruta real es movimientos/nuevo
      component: GraficaComponent
    }
  ]},
  
];
/** array de componentes enrutables */
export const routableComponents = [
  PagesComponent,
  GraficaComponent

];
@NgModule({
  declarations:[
    DirectivesDirective
  ],
  imports: [
    RouterModule.forChild(routes) // Para módulo funcional
  ],
  exports: [
    RouterModule // listo para importarlo en HomeModule
  ],
  providers: [DirectivesDirective]

})

export class HomeRoutingModule { }
