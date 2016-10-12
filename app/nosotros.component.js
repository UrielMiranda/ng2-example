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
 * Created by uriel.miranda on 03/10/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var empleados_service_1 = require('./empleados.service');
var NosostrosComponent = (function () {
    function NosostrosComponent(empleadoService, router) {
        this.empleadoService = empleadoService;
        this.router = router;
    }
    NosostrosComponent.prototype.listaDeEmpleados = function () {
        var _this = this;
        this.empleadoService.listaDeEmpleados()
            .then(function (empleados) { return _this.empleados = empleados; });
    };
    NosostrosComponent.prototype.ngOnInit = function () {
        this.listaDeEmpleados();
    };
    NosostrosComponent.prototype.clickEnEmpleado = function (empleado) {
        this.router.navigate(['/empleado', empleado.id]);
    };
    NosostrosComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/nosotros.component.html'
        }), 
        __metadata('design:paramtypes', [empleados_service_1.EmpleadoService, router_1.Router])
    ], NosostrosComponent);
    return NosostrosComponent;
}());
exports.NosostrosComponent = NosostrosComponent;
//# sourceMappingURL=nosotros.component.js.map