// 3. Crie uma variável chamada “preco” com o valor 50 e uma variável desconto com o valor 0.2 (20%). Calcule o preço com desconto e exiba o valor final.

let preco = 50;
let desconto = 0.2;

console.log(`O preço do produto com desconto de ${desconto * 100}% é de R$ ${(preco - (preco * desconto)).toFixed(2)}`);