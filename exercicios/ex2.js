//Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter.

const vec = [2, 5, 6, 3, 7, 2, 9, 0];

const sumPares = vec
    .filter(i => i%2 === 0)
    .reduce((val1, val2) => val1 + val2)

console.log(sumPares);