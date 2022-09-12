// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a tabuada do número, de 1 a 10.

// Exemplo com entrada 7:

// 7
// 14
// 21
// 28
// 35
// 42
// 49
// 56
// 63
// 70

let num = Number(prompt("Digite um número de 1 a 10"))

if(num < 11){
for (let contador= 1; contador <= 10; contador++) {
    console.log(num * contador)
}
}else{
    alert("Somente números de 1 a 10")
}
