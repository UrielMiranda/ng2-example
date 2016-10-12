/**
 * Created by uriel.miranda on 03/10/2016.
 */
import { Routes, RouterModule} from "@angular/router";
import {InicioComponent} from "./inicio.component";
import {NosostrosComponent} from "./nosotros.component";
import {ContactanosComponent} from "./contactanos.component";
import {EmpleadosComponent} from "./empleados.component";

const appRoutes: Routes = [
    {path:"",component: InicioComponent},
    {path:"nosotros",component: NosostrosComponent},
    {path:"contactenos", component: ContactanosComponent},
    {path:"empleado/:id", component: EmpleadosComponent},
    {path:"**", component: InicioComponent}
];


export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);