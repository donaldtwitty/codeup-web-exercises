"use strict"
function returnMinMaxTemps({list}) {
    const minMaxTempDays = [];

    // loops through 40 three hour blocks of forecast and creates a new temperature object for each new day
    list.forEach(({dt_txt, main: {temp_max, temp_min}}) => {
        const [date, time] = dt_txt.split(' '); // splits the date time string
        if (minMaxTempDays.length === 0 || time.startsWith('00')) { // add a new forecast day for each new date
            minMaxTempDays.push({date, min: temp_min, max: temp_max});
        } else {
            // replace the current days min and max temps if a higher max or lower min is found throughout the day
            const currentMinMaxTemp = minMaxTempDays[minMaxTempDays.length - 1];
            const {min, max} = currentMinMaxTemp;
            if (min > temp_min) currentMinMaxTemp.min = temp_min;
            if (max < temp_max) currentMinMaxTemp.max = temp_max;
        }
    });

    return minMaxTempDays;
}


// EXAMPLE OF USAGE: //

function weatherInfoOnPage (info) {
    const resultElement = document.querySelector("result");
    resultElement.innerHTML = "";

    $.get(getWeatherURL(...ALAMO_COORDINATES))
        .done(data => {
            const minMaxTemps = returnMinMaxTemps(data);
            // use minMaxTemps data as needed

            const cityElement = document.querySelector('#city');
            const tempElement = document.querySelector('#temp');
            const descElement = document.querySelector('#desc');
            cityElement.textContent = data.name;
            tempElement.textContent = data.main.temp;
            descElement.textContent = data.weather[0].description;
        })
        .fail(console.error);

    $.get(OPEN_WEATHER_APPID)
        .done(data => {
        })
        .then(data => {
            // Display the weather information on the page
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const temperatureEl = document.getElementById('temperature');
            temperatureEl.innerHTML = `${temperature} &deg;C`;
            const descriptionEl = document.getElementById('description');
            descriptionEl.innerHTML = description;
        });

}

const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';

// Simple way to create URL for request based on coordinates
// function getWeatherURL(lat, lon) {
//     return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
// }

function getWeatherURL(lat, lon, query = '') {
    const searchQuery = query ? `&q=${query}` : '';
    return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}${searchQuery}&units=metric&appid=${OPEN_WEATHER_APPID}`;
}

const ALAMO_COORDINATES = ['29.4260', '-98.4861'];

// TODO: log URL

console.log(getWeatherURL(ALAMO_COORDINATES[0], ALAMO_COORDINATES[1]));

const URL = getWeatherURL(...ALAMO_COORDINATES);

// TODO: log full response from API

$.ajax(URL).done(data => {
    console.log(data);
}).fail(console.error);


// TODO: log various parts of the API

$.ajax(URL).done(data => {
    console.log(data.city.name);
    console.log(data.list[0]);
    console.log(data.list[0].main.humidity);
    //     // TODO: log the city name
    //     // TODO: log the first three-hour forecast block
    //     // TODO: log the humidity for the first three-hour block
}).fail(console.error);


// TODO: log the humidity for all days

$.ajax(getWeatherURL(...ALAMO_COORDINATES))
    .done((data) => {

        data.list.forEach((day, index) => {
            if (index % 8 === 0) {
                console.log(day.main.humidity);
            }
        });
        //
        //         // OR
        //
        //         for (let i = 0; i < data.list.length; i += 8) {
        //             console.log(data.list[i].main.humidity);
        //         }
        //
    })
    .fail(console.error);


// TODO: log the min and max temp for each day

$.ajax(getWeatherURL(...ALAMO_COORDINATES))
    .done(data => {
        console.log(data);
        const minMaxTemps = returnMinMaxTemps(data);
        minMaxTemps.forEach(minMaxTemp => {
            console.log(minMaxTemp);
        });
    })
    .fail(console.error);

// Search form submission
$('#search-form').submit(e => {
    e.preventDefault();
    const locationInput = $('#location-input').val();
    const searchUrl = getWeatherURL(0, 0, locationInput);
    // Make AJAX request to search URL
    $.ajax(searchUrl).done(data => {
        // Handle search results
    }).fail(console.error);
});