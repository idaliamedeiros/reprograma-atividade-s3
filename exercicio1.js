function diaDaSemana(numero){
        if (numero === 1){
            return 'Domingo'
        } else if (numero === 2){
            return 'Segunda-feira'
        } else if (numero === 3){
            return 'Terça-feira'
        } else if (numero === 4){
            return 'Quarta-feira'
        } else if (numero === 5){
            return 'Quinta-feira'
        } else if (numero === 6){
            return 'Sexta-feira'
        } else if (numero === 7){
            return 'Sábado'
        } else {
            return 'Dia nenhum'
        }
}

console.log(diaDaSemana(5))