import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

import { AppComponent }  from './app.component';
import {InicioComponent} from "./inicio.component";
import {NosostrosComponent} from "./nosotros.component";
import {ContactanosComponent} from "./contactanos.component";
import {appRoutingProviders, routing} from "./app.routing";
import {EmpleadoService} from "./empleados.service";
import {EmpleadosComponent} from "./empleados.component";



@NgModule({
  imports:      [ BrowserModule,routing, HttpModule,FormsModule ],
  declarations: [ AppComponent,InicioComponent,NosostrosComponent,ContactanosComponent,EmpleadosComponent ],
  bootstrap:    [ AppComponent ],
  providers: [appRoutingProviders, EmpleadoService]
})

export class AppModule { }
