function converterDiasEmHoras(quantidadeDias){
    let conversao = quantidadeDias*24
    return `São ${conversao} horas.`
}

console.log(converterDiasEmHoras(365))