interface funcionario {
    nome: string,
    codigo: Number,
    cargo: Cargos
}

enum Cargos {
    Gerente,
    Supervisor,
    Vendedor
}

const funcionario1: funcionario = {
    nome: "Jhon",
    codigo: 10,
    cargo: Cargos.Gerente
}

const funcionario2: funcionario = {
    nome: "Maria",
    codigo: 20,
    cargo: Cargos.Supervisor
}

const funcionario3: funcionario = {
    nome: "Ana",
    codigo: 30,
    cargo: Cargos.Vendedor
}

console.log(funcionario1);
console.log(funcionario2);
console.log(funcionario3);