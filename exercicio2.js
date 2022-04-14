function compararNumeros(num1, num2){
    if (num1 > num2){
        return `${num1} é maior que ${num2}.`
    } else if (num1 < num2){
        return `${num2} é maior que ${num1}.`
    } else if (num1 === num2){
        return 'Os números são iguais'
    }
}

console.log(compararNumeros(18, 24))