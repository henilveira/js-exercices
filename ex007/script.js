var nome = prompt('Qual seu nome?')
var cargo = prompt('Qual cargo você está procurando?')
var empresa = prompt(`Em qual empresa você busca uma vaga de ${cargo.toLowerCase()} ${nome}?`)
var salario = 1658.64
var moeda = salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

alert(`Na ${empresa} o salário atual para ${cargo} é de ${moeda}`)
