// Modifique a calculadora do exercício anterior para que ela receba 2 números e uma função, 
// e realize o cálculo. Exemplo:
//  const soma = (num1, num2) => num1+num2
//  const calculadoraFn = (....) => ….
//  calculadoraFn(10, soma, 20)

const soma = (val1, val2) => val1 + val2;

const calculadoraFn = (val1, op, val2) => {
    return op(val1, val2);
};

console.log(calculadoraFn(10, soma, 25))