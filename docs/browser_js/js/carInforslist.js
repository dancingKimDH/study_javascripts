
let car_rows = [{"YEAR":"2020","CAR_NAME":"소나타","CAR_INFOR_ID":"CI001","COMPANY_ID":"C001"},
{"YEAR":"2021","CAR_NAME":"코나","CAR_INFOR_ID":"CI002","COMPANY_ID":"C002"},
{"YEAR":"2019","CAR_NAME":"SM6","CAR_INFOR_ID":"CI003","COMPANY_ID":"C003"},
{"YEAR":"2022","CAR_NAME":"3 시리즈","CAR_INFOR_ID":"CI004","COMPANY_ID":"C004"},
{"YEAR":"2020","CAR_NAME":"캠리","CAR_INFOR_ID":"CI005","COMPANY_ID":"C005"}]

let car = ``;
let outHtml = ``;


for (let car of car_rows) {
    outHtml = `${outHtml}<tr> <td> ${car.YEAR} </td>
    <td> ${car.CAR_NAME} </td>
    <td> ${car.CAR_INFOR_ID} </td>
    </tr>`
    console.log(outHtml);
}

let car_source = document.querySelector("#carlist")
car_source.innerHTML = outHtml;