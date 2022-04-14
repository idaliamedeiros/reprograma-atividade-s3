function resultadoAluna(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3)/3
    if (media >= 7){
        return `Aprovado com média ${media}.`
    } else if (media >= 5 && media < 7){
        return 'Recuperação'
    } else if (media < 5){
        return 'Reprovado'
    }
}

console.log(resultadoAluna(3, 10, 10))