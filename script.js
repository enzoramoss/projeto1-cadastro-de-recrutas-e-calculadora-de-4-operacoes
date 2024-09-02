// Projeto 1: Cadastro de Recutras
let nome = prompt("Digite seu primeiro nome: ")
let sobrenome = prompt("Digite seu sobrenome: ")
let curso = prompt("Que curso você está fazendo? ")
let nascimento = parseInt(prompt("Em qual ano você nasceu? "))

alert(`Olá ${nome} ${sobrenome}
Então você estuda ${curso} e tem ${2024 - nascimento} anos. Legal!`)

// Projeto 1.2: Calculadora de 4 Operações
let num1 = parseInt(prompt("Digite um número: "))
let num2 = parseInt(prompt("Digite um outro número: "))
let soma = num1 + num2
let subtracao = num1 - num2
let multiplicacao = num1 * num2
let divisao = num1 / num2

alert(`Exemplos de números: ${num1} e ${num2}
Resultado:
${num1} + ${num2} = ${soma}
${num1} - ${num2} = ${subtracao}
${num1} * ${num2} = ${multiplicacao}
${num1} / ${num2} = ${divisao}
`)
