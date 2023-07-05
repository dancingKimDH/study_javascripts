// Standard function

// declare a function, function name() {return}
// refer to, let/const variable

function calculateSumFirst(first, second){
    return first + second;
}
let third = calculateSumFirst(4, 6);


// arrow function
// let functionanme = (variable) => {return}
// declare a variable(function), end with semicolon

let calculateMinusSecond = (first, second) => {
    return first - second;
};

// calculateSumFirst(1,2)
// 3
// let calculateSumThird = calculateSumSecond
// undefined
// calculateSumThird(6,5)
// 1


// callback function
// client - calls - function1 - calls - function2

function calculateFourth(funcName, param1, param2){
    let result = funcName(param1, param2);
    result = result + 10;
    return result;
}

// calculateFourth(calculateSumFirst, 5, 2)
// 17