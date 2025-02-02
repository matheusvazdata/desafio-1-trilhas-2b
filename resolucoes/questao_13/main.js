// 13. Escreva um código que calcule a área de um círculo. Utilize uma função para realizar o cálculo. A função deve receber o raio como parâmetro e retornar a área.

const pi = 3.14159; // Valor (constante) de pi.

function calcularAreaDoCirculo(r) {
  let area = pi * (r ** 2);
  return area.toFixed(4);
};

raio = 5;
area_do_circulo = calcularAreaDoCirculo(raio);

console.log(`A área do círculo de raio ${raio} é: ${area_do_circulo}.`);