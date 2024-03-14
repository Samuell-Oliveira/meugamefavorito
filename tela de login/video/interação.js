            window.alert(`Bem vindo!!!`)
var nome =  window.prompt(`Qual é o seu nome?`)
            window.alert(`Olá, ${nome}! Para ver meu projeto preciso que você confirme sua idade!!!`)
var idade = window.prompt(`Por favor, digite sua idade:`)
if (idade >= 18) {
    window.alert('Bem vindo, espero que goste!')
}
else {
    alert(`Você não tem idade suficiente para acessar meu projeto.`)
    window.close()
}
