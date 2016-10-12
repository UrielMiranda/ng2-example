/**
 * Created by uriel.miranda on 03/10/2016.
 */
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
var core_1 = require("@angular/core");
var empleados_service_1 = require("./empleados.service");
var router_1 = require("@angular/router");
var EmpleadosComponent = (function () {
    function EmpleadosComponent(route, empleadoservice, router) {
        this.route = route;
        this.empleadoservice = empleadoservice;
        this.router = router;
    }
    EmpleadosComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.params['id'];
        this.empleadoservice.informacionEmpleado(id)
            .then(function (empleado) { return _this.empleado = empleado; });
    };
    EmpleadosComponent.prototype.volver = function () {
        this.router.navigate(['/nosotros']);
    };
    EmpleadosComponent = __decorate([
        core_1.Component({
            templateUrl: './app/empleados.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, empleados_service_1.EmpleadoService, router_1.Router])
    ], EmpleadosComponent);
    return EmpleadosComponent;
}());
exports.EmpleadosComponent = EmpleadosComponent;
//# sourceMappingURL=empleados.component.js.map