
const buttonElement = document.getElementById("btn");

function button () {
    buttonElement.addEventListener("click", resortValue);
}

function resortValue(event) {
    event.preventDefault();
    displayLoading();
    const userInput = document.querySelector('input');
    const inputValue = userInput.value;
    const urlResportValue = inputValue.replace(/ /g, '%20');
    getSkiData(urlResportValue);
}

const loader = document.getElementById('loading');

function displayLoading() {
    loader.classList.add('display');
    // const forecast = document.getElementById('fullForecast');
    // document.body.removeChild(forecast);
}

function hideLoading() {
    loader.classList.remove('display');
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
            hideLoading()
            addForecast(skiObj)
        } else {
            throw new Error ("issues with fetch")
        }
    } catch (error) {
        console.error(error)
    }
}

function addForecast(Obj) {
    //location
    const locationEl = document.getElementById('location');
    locationEl.textContent = '';
    const loactionText = document.createTextNode(`Location: ${Obj['basicInfo']['name']}`);
    locationEl.appendChild(loactionText);

    //3 day forcast
    const forecastEl = document.getElementById('forecast');
    forecastEl.textContent = '';
    const forecastText = document.createTextNode(`3 day forecast: ${Obj['summary3Day']}`);
    forecastEl.appendChild(forecastText);

    //tomorrows forcast
    const cardBodyEl = document.getElementsByClassName('cardContainer');
    for (let element of cardBodyEl) {
        element.classList.remove('card');
        element.classList.add('card');
    };

    const cardHeaderEl = document.getElementById('header');
    cardHeaderEl.classList.remove('card');
    cardHeaderEl.classList.add('card-header');
    cardHeaderEl.textContent = '';
    const cardHeaderText = document.createTextNode(`Tomorrows Forecast`);
    cardHeaderEl.appendChild(cardHeaderText);

    const divFooterEl = document.getElementById('footer');
    divFooterEl.classList.remove('card-footer');
    divFooterEl.classList.add('card-footer');
    const cardFooterEl = document.getElementById('cardFooter');
    const currentDate = new Date();
    cardFooterEl.textContent = '';
    const cardFooterText = document.createTextNode(`Last updated: ${currentDate}`);
    cardFooterEl.appendChild(cardFooterText);

    // AM card
    const tomorrowsForecast = Obj['forecast5Day']['0']
    const dayEl = document.getElementById('dayAm');
    dayEl.textContent = '';
    const dayText = document.createTextNode(`Day`);
    dayEl.appendChild(dayText);

    const am = tomorrowsForecast['am'];
    const summaryEl = document.getElementById('summaryAm');
    summaryEl.textContent = '';
    const summaryText = document.createTextNode(`Skies: ${am['summary']}`);
    summaryEl.appendChild(summaryText);

    const tempEl = document.getElementById('tempAm');
    tempEl.textContent = '';
    if (tomorrowsForecast['am']['minTemp'] === am['maxTemp']) {
        const tempText = document.createTextNode(`Temp: ${am['minTemp']}`);
        tempEl.appendChild(tempText);
    } else {
        const tempText = document.createTextNode(`Temp: ${am['minTemp']} - ${am['maxTemp']}`);
        tempEl.appendChild(tempText);
    }

    const windEl = document.getElementById('windAm');
    windEl.textContent = '';
    const windText = document.createTextNode(`Wind speed: ${am['windSpeed']}`);
    windEl.appendChild(windText);

    const snowEl = document.getElementById('snowAm');
    snowEl.textContent = '';
    const snowText = document.createTextNode(`Snowfall: ${am['snow']}`);
    snowEl.appendChild(snowText);

    const rainEl = document.getElementById('rainAm');
    rainEl.textContent = '';
    const rainText = document.createTextNode(`Rainfall: ${am['rain']}`);
    rainEl.appendChild(rainText);

    // PM card
    const tomorrowsForecastPM = Obj['forecast5Day']['0']
    const dayPMEl = document.getElementById('dayPm');
    dayPMEl.textContent = '';
    const dayPMText = document.createTextNode(`Night`);
    dayPMEl.appendChild(dayPMText);

    const pm = tomorrowsForecastPM['pm']
    const summaryPMEl = document.getElementById('summaryPm');
    summaryPMEl.textContent = '';
    const summaryPMText = document.createTextNode(`Skies: ${pm['summary']}`);
    summaryPMEl.appendChild(summaryPMText);

    const tempPMEl = document.getElementById('tempPm');
    tempPMEl.textContent = '';
    if (pm['minTemp'] === pm['maxTemp'] ) {
        const tempPMText = document.createTextNode(`Temp: ${pm['minTemp']}`);
        tempPMEl.appendChild(tempPMText);
    } else {
        const tempPMText = document.createTextNode(`Temp: ${pm['minTemp']} - ${pm['maxTemp']}`);
        tempPMEl.appendChild(tempPMText);
    }

    const windPMEl = document.getElementById('windPm');
    windPMEl.textContent = '';
    const windPMText = document.createTextNode(`Wind speed: ${pm['windSpeed']}`);
    windPMEl.appendChild(windPMText);

    const snowPMEl = document.getElementById('snowPm');
    snowPMEl.textContent = '';
    const snowPMText = document.createTextNode(`Snowfall: ${pm['snow']}`);
    snowPMEl.appendChild(snowPMText);

    const rainPMEl = document.getElementById('rainPm');
    rainPMEl.textContent = '';
    const rainPMText = document.createTextNode(`Rainfall: ${pm['rain']}`);
    rainPMEl.appendChild(rainPMText);

}

button();