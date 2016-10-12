/**
 * Created by uriel.miranda on 03/10/2016.
 */

import { Component } from '@angular/core'
import { NgForm} from '@angular/forms'
@Component({
    templateUrl: './app/contactenos.component.html'
})

export class ContactanosComponent{
    enviarForm(formulario: NgForm){
        console.log(formulario);
    }
}