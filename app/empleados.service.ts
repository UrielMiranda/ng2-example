/**
 * Created by uriel.miranda on 29/09/2016.
 */
import {Http} from "@angular/http";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmpleadoService{

    constructor(private http: Http){}

    listaDeEmpleados(){
        return this.http.get('https://jsonplaceholder.typicode.com/users')
            .toPromise()
            .then(respuesta => respuesta.json())
            .catch(this.unError);
    }
    informacionEmpleado(id:number){
        let url = `https://jsonplaceholder.typicode.com/users/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(respuesta => respuesta.json())
            .catch(this.unError);

    }

    private unError(error){
        console.log('Ocurió un error con el llamado HTTP');
        return Promise.reject(error.message || error);
    }

    enviarInformacion(usuario : any){
        const info = JSON.stringify(usuario);
        let respuesta;
        return this.http.post('https://ng2-mexico.firebaseio.com/data.json', info)
            .toPromise()
            .then(respueta => console.log(respuesta));
    }
}
