"use strict";
let lat = 29.424349;
let lng = -98.491142;

let coords = {lat: lat, lng: lng}

fiveDay(coords);

mapboxgl.accessToken = MAPBOX_TOKEN;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
});
const marker = new mapboxgl.Marker({
    draggable: true
}).setLngLat(coords).addTo(map);

<!-- Notification for Current Location -->
function showCurrentLocationOnMap() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const {latitude, longitude} = position.coords;
                map.setCenter([longitude, latitude]);
            },
            (error) => {
                console.error("Error getting current location:", error);
            }
        );
    } else {
        console.error("Geolocation is not available in this browser.");
    }
}

// Call the function to show the current location on the map
showCurrentLocationOnMap();

<!-- 5-Day Forecast  -->
function fiveDay(coords) {
    $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: coords.lat,
        lon: coords.lng,
        units: "imperial"
    })
        .done(function (data) {
            console.log(data);
            $('#results').html(makeHTML(data))
        })
        .fail(function () {
            console.log('You broke it')
        })
        .always(function () {
        });
}

<!-- Weather Info in 5-Day Forecast -->
function makeHTML(data) {
    let html = `

<h3 class="text-center">${data.city.name}</h3>`
    for (let i = 0; i < data.list.length; i += 8) {
        const iconUrl = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`;
        const temp = `${data.list[i].main.temp}&#x2109;`;
        const condition = data.list[i].weather[0].description;
        const humidity = `${data.list[i].main.humidity}%`;
        const dayOfWeek = new Date(data.list[i].dt * 1000).toLocaleDateString('en-US', {weekday: 'long'});
        html += `
<div class="text-center" style="width: 25rem">
    <div><img src="${iconUrl}"</div>
    <div>${dayOfWeek}</div>
    <div>Temperature: ${data.list[i].main.temp} &#x2109;</div>
    <div>Condition: ${data.list[0].weather[0].description}</div>
    <div>Humidity: ${data.list[i].main.humidity}%</div>
    </div>
    `
    }
    return html
}

function updateWeatherForLocation(locationInput) {
    console.log(locationInput);
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${OPEN_WEATHER_APPID}&units=imperial`)
        .done((data) => {
            console.log(data);
            // Update map's center and marker
            map.setCenter([data.coord.lon, data.coord.lat]);

            // Call fiveDay function to update weather info
            coords = {lat: data.coord.lat, lng: data.coord.lon};
            marker.setLngLat(coords);
            fiveDay(coords);
        })
        .fail(console.error);
}

<!-- Form Submission -->
$("#search-form").click((e) => {
    e.preventDefault();
    const locationInput = $("#location-input").val();
    updateWeatherForLocation(locationInput);
});

marker.on('dragend', function () {
    console.log(marker.getLngLat())
    fiveDay(marker.getLngLat())
})

fetch(`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${OPEN_WEATHER_APPID}`)
    .then(response => response.json())
    .then(data => {
        const weatherCondition = data.weather[0].main;
        const weatherBackgroundImage = getWeatherBackgroundImage(weatherCondition); // Implement this function to map the weather condition to a background image

        document.getElementById('weather-background').style.backgroundImage = `url(${weatherBackgroundImage})`;
    })
    .catch(error => console.log(error));

function getWeatherBackgroundImage(weatherCondition) {
    // Implement this function to map the weather condition to a background image URL
    // For example:
    if (weatherCondition === 'clear sky') return './img/clear-sky.jpg';
    if (weatherCondition === 'Cloudy') return 'https://example.com/cloudy.jpg';
    // ...
}


