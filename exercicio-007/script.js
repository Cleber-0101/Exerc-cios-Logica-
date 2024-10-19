let soma = 0; 
let usuario = parseInt(prompt("Digite um número (0 para sair):")); 

while (usuario !== 0) { 
    soma += usuario; 
    usuario = parseInt(prompt("Digite um número (0 para sair):")); 
}

console.log("A soma total é: " + soma); 
