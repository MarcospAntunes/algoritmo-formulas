function bhaskara(a, b, c) {
    const delta = (b * b) - (4 * a * c);
    
    if(delta === 0) {
        const x1 = -b / (2 * a);

        return x1;
    }

    if(delta > 1) {
        const raizDeDelta = Math.sqrt(delta)
        const x1 = (-b + raizDeDelta) / (2 * a);
        const x2 = (-b - raizDeDelta) / (2 * a);

        return [x1, x2];
    }

    return `O discriminante é igual a ${delta} e, portanto, não pode ser calculado pois é menor que zero.`;

}

console.log(bhaskara(1, 12, -13));
console.log(bhaskara(2, -3, -5));
console.log(bhaskara(1, 6, 9));
console.log(bhaskara(3, 4, 2));