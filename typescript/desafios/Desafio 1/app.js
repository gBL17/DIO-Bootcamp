"use strict";
var Cargos;
(function (Cargos) {
    Cargos[Cargos["Gerente"] = 0] = "Gerente";
    Cargos[Cargos["Supervisor"] = 1] = "Supervisor";
    Cargos[Cargos["Vendedor"] = 2] = "Vendedor";
})(Cargos || (Cargos = {}));
const funcionario1 = {
    nome: "Jhon",
    codigo: 10,
    cargo: Cargos.Gerente
};
const funcionario2 = {
    nome: "Maria",
    codigo: 20,
    cargo: Cargos.Supervisor
};
const funcionario3 = {
    nome: "Ana",
    codigo: 30,
    cargo: Cargos.Vendedor
};
console.log(funcionario1);
console.log(funcionario2);
console.log(funcionario3);
