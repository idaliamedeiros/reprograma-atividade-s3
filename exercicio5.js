function maioridade(anoDeNascimento){
    let idade = 2022 - anoDeNascimento
    if (idade < 18){
        return `Você é menor de idade, aproveite.`
    } else if (idade >= 18){
        return `Você possui maioridade, lamento.`
    }
}

console.log(maioridade(1998))