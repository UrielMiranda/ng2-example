"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by uriel.miranda on 29/09/2016.
 */
var http_1 = require("@angular/http");
var core_1 = require('@angular/core');
require('rxjs/add/operator/toPromise');
var EmpleadoService = (function () {
    function EmpleadoService(http) {
        this.http = http;
    }
    EmpleadoService.prototype.listaDeEmpleados = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/users')
            .toPromise()
            .then(function (respuesta) { return respuesta.json(); })
            .catch(this.unError);
    };
    EmpleadoService.prototype.informacionEmpleado = function (id) {
        var url = "https://jsonplaceholder.typicode.com/users/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (respuesta) { return respuesta.json(); })
            .catch(this.unError);
    };
    EmpleadoService.prototype.unError = function (error) {
        console.log('Ocurió un error con el llamado HTTP');
        return Promise.reject(error.message || error);
    };
    EmpleadoService.prototype.enviarInformacion = function (usuario) {
        var info = JSON.stringify(usuario);
        var respuesta;
        return this.http.post('https://ng2-mexico.firebaseio.com/data.json', info)
            .toPromise()
            .then(function (respueta) { return console.log(respuesta); });
    };
    EmpleadoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EmpleadoService);
    return EmpleadoService;
}());
exports.EmpleadoService = EmpleadoService;
//# sourceMappingURL=empleados.service.js.map