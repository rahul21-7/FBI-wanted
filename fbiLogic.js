let page = 2
const FBI_URL = `https://api.fbi.gov/wanted/v1/list?page=${page}`;
const inputField = document.querySelector('#inputPage');

const getData = async(page) => {
    console.log(`page number = ${page}`);
    const response = await fetch(FBI_URL);
    const data = await response.json();
    console.log(data);
};

inputField.addEventListener('input', (e) => {
    let inputVal = inputField.value.trim();
    if(inputVal !== ""){
        getData(inputVal);
    }
})