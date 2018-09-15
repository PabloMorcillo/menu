
/** Módulos de enrutado de Angular2 */
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
// Array con las rutas de este módulo. Ninguna funcional.
const routes: Routes = [
  { path: 'login', component: LoginComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes) // configuración para el módulo raíz
  ],
  exports: [
    RouterModule // se importará desde el módulo padre
  ]
})
export class AppRoutingModule {}