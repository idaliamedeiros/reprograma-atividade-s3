function imparOuPar(numero){
    if (numero % 2 == 0){
        return `${numero} é par.`
    } else {
        return `${numero} é ímpar.`
    }
}
console.log(imparOuPar(6))