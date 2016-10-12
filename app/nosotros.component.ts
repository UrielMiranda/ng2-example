/**
 * Created by uriel.miranda on 03/10/2016.
 */
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { EmpleadoService } from './empleados.service'

@Component({
    templateUrl: '/app/nosotros.component.html'
})

export class NosostrosComponent implements OnInit{
    empleados:Array<Object>;
    constructor(private empleadoService : EmpleadoService,
                private router:Router){}

    listaDeEmpleados(){
        this.empleadoService.listaDeEmpleados()
            .then(empleados => this.empleados = empleados);
    }

    ngOnInit(){
        this.listaDeEmpleados();
    }

    clickEnEmpleado(empleado){
        this.router.navigate(['/empleado', empleado.id]);
    }
}