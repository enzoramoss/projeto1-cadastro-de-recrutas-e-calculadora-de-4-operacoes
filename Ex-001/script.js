let nome = window.prompt("Digite seu primeiro nome: ")
let sobrenome = window.prompt("Digite seu sobrenome: ")
let curso = window.prompt("Que curso você está fazendo? ")
let nascimento = Number(window.prompt("Em qual ano você nasceu? "))

window.alert(`Olá ${nome} ${sobrenome}
Então você estuda ${curso} e tem ${2024 - nascimento} anos. Legal!`)