// Utilizando o laço while, escreva um código que recebe um prompt perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma let conta para guardar o valor total.

// Toda vez que a resposta for sim, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for sim, devemos imprimir o valor total da conta.
// OBS: utilizei boolean na confirmação se quer comer ou não mais coxinha

let conta = 0
let coxinha= confirm("Você deseja comer uma coxinha?")


while(coxinha !== false){
    conta += 2.50;
    coxinha = confirm("Você deseja comer mais coxinha?")
    if(coxinha === false){
        alert(`Sua conta deu R$ ${conta}`)
    }
    console.log(`Sua conta deu R$ ${conta}`)
}