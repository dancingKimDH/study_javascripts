// 정부 데이터포털 예시

function fetchDatagokr() {

    let url = 'https://apis.data.go.kr/3450000/medicalDevSalesPlasService/getMedicalDevSalesPlas?serviceKey=ab5XSHW0eOiAmWhlVe1Qtqzmut13uzseiVqXmu35AT0zQwCwjBhHELGx3F1%2BZGkhBwcyAKzKYzLcLtjKt%2B6xLA%3D%3D&currentPage=1&perPage=10&SN=1';

    // fetch: asynch 동작시키는 function
    let request = fetch(url)

        // 여기서 response는 뭉치로 되어 있는 json 형식의 HashMap으로 변환
        // 다만 이 라인을 쓰지 않아도 자동으로 변환이 됨
        // response라는 것은 다분히 값을 받는 역할, 따라서 이름이 어떻게 되든 문제 없음
        // 네트워크로 날아온 String -> json으로 변환
        .then((response) => {
            response.json();
        })

        // json으로 나온 값을 data로 받음
        .then((data) => {
            console.log(data);
        })

        // error message를 catch 후 출력
        .catch((data) => {
            console.log(data);
        });

}

// 자동차 정보 상세

function fetchCarInforDetail() {

    let url = 'http://127.0.0.1:8080/selectDetail/CI002';

    // fetch: asynch 동작시키는 function
    let request = fetch(url)

        // 여기서 response는 뭉치로 되어 있는 json 형식의 HashMap으로 변환
        // 다만 이 라인을 쓰지 않아도 자동으로 변환이 됨
        // response라는 것은 다분히 값을 받는 역할, 따라서 이름이 어떻게 되든 문제 없음
        // 네트워크로 날아온 String -> json으로 변환
        .then((response) => {
            response.json();
        })

        // json으로 나온 값을 data로 받음
        .then((data) => {
            console.log(data);
        })

        // error message를 catch 후 출력
        .catch((data) => {
            console.log(data);
        });

}