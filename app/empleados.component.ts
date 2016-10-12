/**
 * Created by uriel.miranda on 03/10/2016.
 */

import {Component} from "@angular/core";
import {EmpleadoService} from "./empleados.service";
import {Router,ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: './app/empleados.component.html',
})

export class EmpleadosComponent{
    empleado:Object;
    constructor(private route: ActivatedRoute,
                private empleadoservice: EmpleadoService,
                private router: Router){

    }

    ngOnInit(){
        let id = +this.route.snapshot.params['id'];
        this.empleadoservice.informacionEmpleado(id)
            .then(empleado => this.empleado = empleado)
    }
    volver(){
        this.router.navigate(['/nosotros']);
    }
}