// 4. Maior Número
// Faça um programa que receba três números inteiros e exiba o maior deles.


const numero1 = parseInt(prompt('Digite o primeiro número inteiro: '));
const numero2 = parseInt(prompt('Digite o segundo número inteiro: '));
const numero3 = parseInt(prompt('Digite o terceiro número inteiro: '));

// Calcula o maior número
let maiorNumero = numero1; 

if (numero2 > maiorNumero) {
    maiorNumero = numero2; 
}

if (numero3 > maiorNumero) {
    maiorNumero = numero3; 
}

console.log(`O maior número é: ${maiorNumero}`);
