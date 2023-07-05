
let car_rows = [{"YEAR":"2020","CAR_NAME":"소나타","CAR_INFOR_ID":"CI001","COMPANY_ID":"C001"},
{"YEAR":"2021","CAR_NAME":"코나","CAR_INFOR_ID":"CI002","COMPANY_ID":"C002"},
{"YEAR":"2019","CAR_NAME":"SM6","CAR_INFOR_ID":"CI003","COMPANY_ID":"C003"},
{"YEAR":"2022","CAR_NAME":"3 시리즈","CAR_INFOR_ID":"CI004","COMPANY_ID":"C004"},
{"YEAR":"2020","CAR_NAME":"캠리","CAR_INFOR_ID":"CI005","COMPANY_ID":"C005"}]

let car = ``;
let outHtml = ``;

// car은 비어있어 car_rows의 데이터를 담을 수 있음
// outHtml 역시 비어있어 이후 HTML로 들어갈 데이터를 담을 수 있음
for (let car of car_rows) {
    outHtml = `${outHtml}<tr> <td> ${car.YEAR} </td>
    <td> ${car.CAR_NAME} </td>
    <td> ${car.CAR_INFOR_ID} </td>
    </tr>`
    console.log(outHtml);

    // 여기에서 car.은 Property Accessor의 역할로, 
    // 위에서 데이터를 받은 car의 데이터를 가져옴

}

//  document.querySelector()을 통해 rows를 표현할 장소(ID) 지정
// 위의 Method는 주어진 문서에서 특정된 CSS selector를 찾음
let car_source = document.querySelector("#carlist")

// 여기서 method로 불러온 car_source의 innerHTML을 위에서 정리한 tr-td인
// outHtml로 replace
car_source.innerHTML = outHtml;