function afim(variavelIndependente, coeficienteAngular, coeficienteLinear) {

    const fx = coeficienteAngular * variavelIndependente + coeficienteLinear;
    
    return fx;
}

console.log(afim(-2, 2, 3));
console.log(afim(-1, 2, 3));
console.log(afim(0, 2, 3));
console.log(afim(1, 2, 3));
console.log(afim(2, 2, 3));