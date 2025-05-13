let page = 2
let FBI_URL = `https://api.fbi.gov/wanted/v1/list?page=${page}`;
const inputField = document.querySelector('#inputPage');

const getData = async(page) => {
    try {
        console.log(`page number = ${page}`);
        FBI_URL = `https://api.fbi.gov/wanted/v1/list?page=${page}`;
        const response = await fetch(FBI_URL);
        const data = await response.json();
        console.log(data);
    }catch(error) {
        console.error("Fetch error", error);
    }
}

inputField.addEventListener('input', (e) => {
    let inputVal = inputField.value.trim();
    if(inputVal !== ""){
        getData(inputVal);
    }
})