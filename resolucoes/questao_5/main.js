// 5. Crie uma variável idade e atribua um valor. Se a pessoa for maior de idade (18 ou mais), exiba "Você é maior de idade". Caso contrário, exiba "Você é menor de idade".

let idade = 16;
let mensagem = '';

if (idade >= 18) {
    mensagem = 'Você é maior de idade';
} else {
    mensagem = 'Você é menor de idade';
}

console.log(mensagem);