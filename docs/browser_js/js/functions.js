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

let calculateSumSecond = (first, second) => {
    return first + second;
};

// calculateSumFirst(1,2)
// 3
// calculateSumSecond(3,4)
// 7
// let calculateSumThird = calculateSumSecond
// undefined
// calculateSumThird(5,6)
// 11


// callback function
