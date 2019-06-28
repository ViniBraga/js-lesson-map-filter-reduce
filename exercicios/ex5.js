// Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor 
// (aqueles que ocorrem apenas 1 vez dentro do vetor) 
// (Dica 1: utilize reduce, filter e keys, 
//  Dica 2: escreva console.log(objeto.keys()) e veja como ele poderá te ajudar neste exercício)

const vec = [2, 5, 6, 3, 7, 2, 9, 0];

const ocorr = vec.reduce((oco, val) => oco.set(val, 1 + (oco.get(val) || 0)), new Map());

const ocorrFiltered = new Map(
    [...ocorr].filter(([k,v]) => v == 1 )
);

console.log([...ocorrFiltered.keys()]);