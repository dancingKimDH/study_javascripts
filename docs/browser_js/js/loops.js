// String - String
// int - Number
// ArrayList - Array
// HashMap - Object

let animals = ["dog", "cat", "bird", "fish", "lizard"];
console.log(`Done`);

//for-loop statement
for (let i = 0; i < animals.length; i = i + 1) {
    console.log(`${i + 1} : ${animals[i]}`);
}

// for-each statement
// for (String animal : animals) {}
for (let animal of animals) {
    console.log(`${animal}`);
}

// object

const animals_obj = [
    { name: "dog", species: "canine" },
    { name: "cat", species: "feline" },
    { name: "bird", species: "avian" },
    { name: "fish", species: "aquatic" },
    { name: "lizard", species: "reptile" },
];

let outHtml = ``;

for (let animal_obj of animals_obj) {
    console.log(`Name: ${animal_obj.name}, Species: ${animal_obj['species']}`);
    outHtml = `${outHtml} <div> Name: ${animal_obj.name}, Species: ${animal_obj['species']} </div>`
    
}

console.log(outHtml);

// browser 자원 중에 docs
let loops_source = document.querySelector("#loops");

