let car_rows = [{"YEAR":"2020","CAR_NAME":"소나타","CAR_INFOR_ID":"CI001","COMPANY_ID":"C001"},
{"YEAR":"2021","CAR_NAME":"코나","CAR_INFOR_ID":"CI002","COMPANY_ID":"C002"},
{"YEAR":"2019","CAR_NAME":"SM6","CAR_INFOR_ID":"CI003","COMPANY_ID":"C003"},
{"YEAR":"2022","CAR_NAME":"3 시리즈","CAR_INFOR_ID":"CI004","COMPANY_ID":"C004"},
{"YEAR":"2020","CAR_NAME":"캠리","CAR_INFOR_ID":"CI005","COMPANY_ID":"C005"}]

let car = ``;
let outHtml = ``;
let result = ``;

// second try - chatGPT

// Generate HTML code
function forlooping(car_rows) {
    for(car of car_rows) {
        outHtml = `${outHtml}<tr> <td> ${car.YEAR} </td>
        <td> ${car.CAR_NAME} </td>
        <td> ${car.CAR_INFOR_ID} </td>
        </tr>`
    }
    return outHtml;
}

// Update carlist element with the generated HTML
function populatelist(htmlRows) {
    let car_source = document.querySelector("#carlist");
    car_source.innerHTML = htmlRows;
}

//Main function
function processlist(car_rows) {
    let htmlRows = forlooping(car_rows);
    populatelist(htmlRows);
}

// Invoke a function? 
processlist(car_rows);

let keydownObject = document.querySelector("#keydownEnter");
keydownObject.addEventListener('keydown', () => {

    if (event.code == 'Enter') {

        console.log(`key down : ${event.code}`);
        processlist();
    }
});





// ---------------------------------

// //first try - Me


// function trywithfunc(car_rows) {
//     for(car of car_rows) {
//         outHtml = `${outHtml}<tr> <td> ${car.YEAR} </td>
//         <td> ${car.CAR_NAME} </td>
//         <td> ${car.CAR_INFOR_ID} </td>
//         </tr>`
//         console.log(outHtml);
//     }
//     let result = outHtml;
//     return result;
// }

// let finalresult = trywithfunc(car_rows);
// let car_source = document.querySelector("#carlist");
// car_source.innerHTML = finalresult;