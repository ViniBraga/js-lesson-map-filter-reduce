//Dado um vetor de valores, retorne um objeto com quantas vezes cada valor está presente no vetor (dica: utilize reduce)

const vec = [2, 5, 6, 3, 7, 2, 9, 0];

const ocorr = vec.reduce((oco, val) => oco.set(val, 1 + (oco.get(val) || 0)), new Map());

console.log(ocorr);