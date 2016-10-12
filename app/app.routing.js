"use strict";
/**
 * Created by uriel.miranda on 03/10/2016.
 */
var router_1 = require("@angular/router");
var inicio_component_1 = require("./inicio.component");
var nosotros_component_1 = require("./nosotros.component");
var contactanos_component_1 = require("./contactanos.component");
var empleados_component_1 = require("./empleados.component");
var appRoutes = [
    { path: "", component: inicio_component_1.InicioComponent },
    { path: "nosotros", component: nosotros_component_1.NosostrosComponent },
    { path: "contactenos", component: contactanos_component_1.ContactanosComponent },
    { path: "empleado/:id", component: empleados_component_1.EmpleadosComponent },
    { path: "**", component: inicio_component_1.InicioComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map