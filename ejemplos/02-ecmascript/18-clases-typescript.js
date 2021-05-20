"use strict";
/**
 * ejemplo de clases en typescript
 * con typescript podemos usar patrones orientados a objetos, como herencia, interfaces
 * y otras implementaciones.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// definimos una clase abstracta, esta clase NO puede ser instanciada
var Persona = /** @class */ (function () {
    function Persona(nombre) {
        this.nombre = nombre;
    }
    return Persona;
}());
// definimos la clase Empleado, que extiende de Persona
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, departamento) {
        var _this = _super.call(this, nombre) || this;
        _this.departamento = departamento;
        return _this;
    }
    Empleado.prototype.presentacion = function () {
        return "Hola soy " + this.nombre + " y trabajo en " + this.departamento;
    };
    return Empleado;
}(Persona));
var emanuel = new Empleado("emanuel", "informatica");
console.log(emanuel.presentacion());
