
let carlist_show = document.querySelector('#enable_table')

carlist_show.addEventListener('keydown', (e) => {

    if (e.code == 'Enter') {
        processlist();
        getSelectAllfromREST();
    }


});
function getSelectAllfromREST() {
    let url = 'http://192.168.0.94:8080/selectAll/CI002';
    let request = fetch(url)
        .then((response) => {
            return response.json();
        })

        // json으로 나온 값을 data로 받음
        .then((cardata) => {
            // 자료는 table
            let outHtml = `<table>`;

            for (let car_map of cardata) {
                outHtml = `${outHtml} <tr><td> ${car_map.YEAR} </td>
                        <td> ${car_map.CAR_NAME} </td> 
                        <td> ${car_map.CAR_INFOR_ID} </td>
                        <td> ${car_map.COMPNAY_ID} </td> </tr>`
            }

            let cartablelist = document.querySelector('#carlist')
            cartablelist.innerHTML = outHtml;
        })

        // error message를 catch 후 출력
        .catch((cardata) => {
            console.log(cardata);
        });

}
