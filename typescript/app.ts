let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldo = 0;

function somarAoSaldo(soma:number) {
    if(campoSaldo) {
        saldo += soma
        campoSaldo.innerHTML = saldo.toString()
        limpaSoma();
    }
}

function limpaSoma() {
    soma.value = "";
}

function limparSaldo() {
    if(campoSaldo) {
    saldo = 0
    campoSaldo.innerHTML = saldo.toString()
    }
}

if(botaoAtualizar){
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}


botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
