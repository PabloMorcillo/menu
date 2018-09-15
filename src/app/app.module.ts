import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './routing.app';
import { HomeRoutingModule, routableComponents } from './pages/home-routing.module';
import { DirectivesDirective } from './directives.directive';
import { PipePipe } from './pages/pipe.pipe';
import { Http } from '@angular/http';
import { TextPipe } from './pages/grafica/text.pipe';
import { NamePipe } from './name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routableComponents,
    PipePipe,
    TextPipe,
    NamePipe
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HomeRoutingModule
  ],
  providers: [DirectivesDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
