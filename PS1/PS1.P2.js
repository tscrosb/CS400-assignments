const evaluate = inputString => {
    let splitString = inputString.split('');
    let operation = splitString[1];
    switch (operation) {
        case '+':
            return (left, right) => left + right;
            break;
        case '-':
            return (left, right) => left - right;
            break;
        case '*':
            return (left, right) => left * right;
            break;
        case '/':
            return (left, right) => left / right;
            break;
    }
}

const expression = '1+1';

let left = parseInt(expression.split('')[0], 10);
let right = parseInt(expression.split('')[2], 10);
let operator = evaluate(expression);
console.log(`${expression} = ${operator(left,right)}`)
