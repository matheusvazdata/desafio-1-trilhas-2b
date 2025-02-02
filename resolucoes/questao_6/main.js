// 6. Crie uma variável chamada nota e atribua um valor entre 0 e 10. Se a nota for maior ou igual a 7, exiba "Aprovado". Se for entre 5 e 6, exiba "Recuperação". Caso contrário, exiba "Reprovado".

let nota = 6.5;
let mensagem = '';

if (nota >= 7) {
    mensagem = 'Aprovado';
} else if (nota >= 5 && nota < 7) {
    mensagem = 'Recuperação';
} else {
    mensagem = 'Reprovado';
};

console.log(mensagem);