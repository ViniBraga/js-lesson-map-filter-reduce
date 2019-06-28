// c-like

const value = 10
if(value === 10) {

}

let value2 = 30

console.log(value, value2)

const object = {
    key: 'value1',
    key2: 'value2'
}

console.log(object)

const str = "Vini Braga - DevPleno Aula"

const soma = function (a, b) {
    return a + b
}

const calculadora = function(op, a, b) {
    return op(a,b)
}

console.log(calculadora(soma, 1, 2))

const vector = [1, 2, 3, 4, 5]

const dobrado = vector.map(function(item){
    return {original: item , dobrado: item * 2 }
})

console.log(vector, dobrado)

const dobrar = item => item * 2
const somentePares = item => item % 2 === 0


const paresDobrado = vector.filter(somentePares).map(dobrar)


console.log('Pares: ', paresDobrado)

const somar = (acumulado, atual) => acumulado + atual
const somatorio = paresDobrado.reduce(somar, 0)

console.log('Somar com reduce: ', somatorio)

//EXERCICIOS
/**
 * 
Os exercícios aqui propostos visam reforçar a prática da linguagem javascript de acordo com o que foi visto na primeira aula extra.

Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce.

Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter.

Dado um vetor de números, como poderia ser realizada a soma de todos os valores ímpares utilizando reduce e filter.

Dado um vetor de valores, retorne um objeto com quantas vezes cada valor está presente no vetor (dica: utilize reduce)

Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor (aqueles que ocorrem apenas 1 vez dentro do vetor) (Dica 1: utilize reduce, filter e keys, Dica 2: escreva console.log(objeto.keys()) e veja como ele poderá te ajudar neste exercício)

Dado um vetor com números, retorne somente os números pares;

Dado um vetor com números, retorne somente os números ímpares;

Uma função é chamada da seguinte forma:
calculadora(10, '+', 20)
crie o corpo da função de forma que ela realize as 4 operações aritméticas

Modifique a calculadora do exercício anterior para que ela receba 2 números e uma função, e realize o cálculo. Exemplo:
const soma = (num1, num2) => num1+num2
const calculadoraFn = (....) => ….
calculadoraFn(10, soma, 20)

 * 
 */


 