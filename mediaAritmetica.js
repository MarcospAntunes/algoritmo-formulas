function mediaAritmetica(numeros) {
    if(numeros.includes("+")) {
        const array = numeros.split('+').map((numero) => Number(numero));
    
        const divider = array.length
        const sum = array.reduce((prev, acc) => prev + acc)
    
        const media = sum / divider;

        if(!Number.isInteger(media)) {
            return media.toFixed(2);
        }
    
        return media
    }

    return "Certifique-se de passar '+' depois de cada número"
}


console.log(mediaAritmetica("1.5 + 2 + 3 + 4 + 5"))
console.log(mediaAritmetica("1+2+3+4+5"))
console.log(mediaAritmetica("1 2 3 4 5"))