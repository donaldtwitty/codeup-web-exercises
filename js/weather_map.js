"use strict";
let lat = 29.424349;
let lng = -98.491142;

let coords = {lat:lat, lng:lng}

fiveDay(coords);

mapboxgl.accessToken=MAPBOX_TOKEN;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
});



<!-- Notification for Current Location -->
function showCurrentLocationOnMap() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                map.setCenter([longitude, latitude]);
                const marker = new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
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
function makeHTML (data){
let html = `

<h3>${data.city.name}</h3>`
    for (let i = 0; i < data.list.length; i+=8) {
        html+=`
<div class="card">
    <div>icon</div>
    <div>temp: ${data.list[i].main.temp} &#x2109;</div>
    <div>condition: ${data.list[0].weather[0].description}</div>
    <div>humidity: ${data.list[i].main.humidity}%</div>
    </div>
    `
    }
    return html
}

function updateWeatherForLocation(locationInput) {
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${OPEN_WEATHER_APPID}&units=imperial`)
        .done((data) => {
            console.log(data);
            // Update map's center and marker
            map.setCenter([data.coord.lon, data.coord.lat]);
            const marker = new mapboxgl.Marker().setLngLat([data.coord.lon, data.coord.lat]).addTo(map);

            // Call fiveDay function to update weather info
            coords = { lat: data.coord.lat, lng: data.coord.lon };
            fiveDay(coords);
        })
        .fail(console.error);
}
$("#search-form").click((e) => {
    e.preventDefault();
    const locationInput = $("#location-input").val();
    updateWeatherForLocation(locationInput);
});



