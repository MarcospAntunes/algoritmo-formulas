function jurosCompostos(capitalInicial, taxaDeJurosEmpregada, tempoDeAplicacao) {
    const montante = (capitalInicial * (1 + taxaDeJurosEmpregada) ** tempoDeAplicacao);

    const jurosProcessados = (montante - capitalInicial);

    return [montante.toFixed(3), jurosProcessados.toFixed(3)];
}

console.log(jurosCompostos(1000, 0.05, 3));
console.log(jurosCompostos(1000, 0.01, 18));
console.log(jurosCompostos(1400, 0.07, 2));
console.log(jurosCompostos(1000, 0.0041667, 36));