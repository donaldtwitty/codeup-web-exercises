"use strict";
let lat = 35.31393820;
let lng = -100.23623020;

let coords = {lat:lat, lng:lng}

fiveDay(coords);

mapboxgl.accessToken=MAPBOX_TOKEN;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
});

<!-- Curren Location -->
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

$("#search-form").submit((e) => {
    e.preventDefault();
    const locationInput = $("#location-input").val();
    const searchUrl = OPEN_WEATHER_APPID(0, 0, locationInput);
    $.ajax(searchUrl).done((data) => {
        console.log(data);
        weatherInfoOnPage(data);
    }).fail(console.error);

});

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temp");
const descElement = document.querySelector("#desc");
const minMaxTempElement = document.querySelector("#min-max-temp");
// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM

// https://account.mapbox.com


// function returnMinMaxTemps({ list }) {
//     const minMaxTempDays = [];
//
//     list.forEach(({ dt_txt, main: { temp_max, temp_min } }) => {
//         const [date, time] = dt_txt.split(" ");
//
//         if (minMaxTempDays.length === 0 || time.startsWith("00")) {
//             minMaxTempDays.push({ date, min: temp_min, max: temp_max });
//         } else {
//             const currentMinMaxTemp = minMaxTempDays[minMaxTempDays.length - 1];
//             const { min, max } = currentMinMaxTemp;
//
//             if (min > temp_min) {
//                 currentMinMaxTemp.min = temp_min;
//             }
//
//             if (max < temp_max) {
//                 currentMinMaxTemp.max = temp_max;
//             }
//         }
//     });
//
//     return minMaxTempDays;
// }