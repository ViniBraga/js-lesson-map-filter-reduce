// Uma função é chamada da seguinte forma:
//  calculadora(10, '+', 20)
//  crie o corpo da função de forma que ela realize as 4 operações aritméticas


const calculadora = (val1, op, val2) => {
    switch (op) {
        case '+': return val1 + val2;
        case '-': return val1 - val2;
        case '*': return val1 * val2;
        case '/': return val1 / val2;
        default: throw 'Invalid Operator';
    };
}

try {
    console.log(calculadora(10, '+', 25))
} catch (err) {
    console.log(err)
}