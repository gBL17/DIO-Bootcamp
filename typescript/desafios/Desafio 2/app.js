"use strict";
var profissoes;
(function (profissoes) {
    profissoes[profissoes["Atriz"] = 0] = "Atriz";
    profissoes[profissoes["Padeiro"] = 1] = "Padeiro";
})(profissoes || (profissoes = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: profissoes.Atriz
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: profissoes.Padeiro,
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: profissoes.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: profissoes.Padeiro
};
