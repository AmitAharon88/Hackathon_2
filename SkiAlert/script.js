
const buttonElement = document.getElementById("btn");

function button () {
    buttonElement.addEventListener("click", resortValue);
}

function resortValue(event) {
    event.preventDefault();
    // window.location.href = "result.html";
    const userInput = document.querySelector('input');
    const inputValue = userInput.value;
    console.log(inputValue)
    const urlResportValue = inputValue.replace(/ /g, '%20');
    getSkiData(urlResportValue);
}


async function getSkiData(resort) {
    const url = `https://ski-resort-forecast.p.rapidapi.com/${resort}/forecast?units=i&el=top`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd99226e11emshc6beb07ec3b35f3p1d14d9jsna675fbeffb1a',
            'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options)
        if(response.ok) {
            const skiObj = await response.json()
            console.log(skiObj)
            addForcast(skiObj)
        } else {
            throw new Error ("issues with fetch")
        }
    } catch (error) {
        console.error(error)
    }
}

function addForcast(Obj) {
    const pEl = document.querySelector('p');
    const pText = document.createTextNode(Obj);
    pEl.appendChild(pText);
    document.body.appendChild(pEl);

}

button();