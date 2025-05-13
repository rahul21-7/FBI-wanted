let page = 2
let FBI_URL = `https://api.fbi.gov/wanted/v1/list?page=${page}`;
const inputField = document.querySelector('#inputPage');
const enterButton = document.querySelector('#enter');
const resultsDiv = document.querySelector('#results');

const getData = async(page) => {
    try {
        console.log(`page number = ${page}`);
        FBI_URL = `https://api.fbi.gov/wanted/v1/list?page=${page}`;
        const response = await fetch(FBI_URL);
        const FBIdata = await response.json();

        console.log(FBIdata);

        resultsDiv.innerHTML="";
        let searchVal = inputField.value.trim();
        let i = 0;
        if(inputField.value !== ""){
            FBIdata.items.forEach(item => {
                const div = document.createElement('div');
                div.innerText = ++i + " " + item.title;
                resultsDiv.appendChild(div);
            });
        }
            
        // getData(page);
    }catch(error) {
        console.error("Fetch error", error);
    }
}

enterButton.addEventListener('click', (e) => {
    // resultsDiv.innerHTML="";
    // let searchVal = inputField.value.trim();
    // if(inputField.value !== ""){
    //     getData(page);
    //     resultsDiv.appendChild(FBIdata);
    // }

    getData(inputField.value.trim());
})

inputField.addEventListener('input', (e) => {
    let inputVal = inputField.value.trim();
    if(inputVal !== ""){
        // getData(inputVal);
    }
})