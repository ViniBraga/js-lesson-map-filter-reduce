//Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce.

const vec = [2, 5, 6, 3, 7, 2, 9, 0];
const sum = vec.reduce((val1, val2) => val1 + val2);
console.log(sum);