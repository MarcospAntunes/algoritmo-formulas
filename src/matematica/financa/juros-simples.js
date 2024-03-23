function jurosSimples(capitalInicial, taxaDeJurosEmpregada, tempoDeAplicacao) {
    const juros = capitalInicial * taxaDeJurosEmpregada * tempoDeAplicacao;
    const montante = capitalInicial + juros;

    return [montante, juros]
}

console.log(jurosSimples(100, 0.1365, 3));
console.log(jurosSimples(1000, 0.05, 3));
console.log(jurosSimples(600, 0.12, 5));