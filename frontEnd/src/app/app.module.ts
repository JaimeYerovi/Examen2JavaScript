import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatAutocompleteModule,
  MatButtonModule, MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule, MatFormField, MatFormFieldModule,
  MatIcon,
  MatIconModule,
  MatInputModule, MatOptionModule
} from "@angular/material";

import {CardModule, InputTextModule} from "primeng/primeng";
import {TableModule} from "primeng/table";
import { Examen2Component } from './examen2/examen2.component';
import {MatBadgeModule} from "@angular/material/badge";
import { LoginComponent } from './login/login.component';
import {Rutas_App} from "./app.routes";
import {Router, RouterModule} from "@angular/router";
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    Examen2Component,
    LoginComponent,
    CrearUsuarioComponent
  ], // Definir todos los componentes a usarse
     // Definin todos los pipes -> transforman datos
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    ButtonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatChipsModule,
    InputTextModule,
    CardModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatFormFieldModule,
    RouterModule.forRoot(
      Rutas_App,
      {useHash: true}
    ),
    TableModule


  ], //  Definimos todos los Modulos
  providers: [], // Los Servicios
  bootstrap: [AppComponent] // Componente Principal
})
// @ALGO() // Decorator

export class AppModule {

  constructor(){

  }



}

