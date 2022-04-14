// Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles.
// Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function mediaNumbers(num1, num2){
    const media = (num1 + num2)/2 
    if (media % 2 == 0){
        return `A média dos números é ${media} e esse resultado é par.`
    } else {
        return media
    }
}

console.log(mediaNumbers(3, 4))