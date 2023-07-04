let first = 1;
let second = 4;

if(first < 10) {
    console.log("Mano");
} else if(first > second){
    console.log(`${first} > ${second}`)
} else {
    console.log(`second : ${second}`)
}

let third = `4`;
first = 4;

/// ===는 데이터타입도 확인
// third == first
// true
// third === first
// false

// 삼항연산자
// 변수 = (if문) ? 참인 경우 : 거짓인 경우 ;

let result = (third === first) ? `true!` : `false!`;
console.log();