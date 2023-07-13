$(() => {
    // Global Variables
    const map = initializeMap();
    const marker = createMarker();
    const popup = createPopup();

    // Functions
    // Function that initialize the map
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/navigation-night-v1',
            zoom: 10,
            center: [-98.4916, 29.4252],
        }

        return new mapboxgl.Map(mapOptions);
    }

    //Function that creates a marker at Codeup
    function createMarker() {
        return new mapboxgl.Marker()
            .setLngLat([-98.4916, 29.4260])
            .addTo(map);
    }

    //Function that creates a popup
    function createPopup() {
        return new mapboxgl.Popup()
            .setLngLat([-98.4916, 29.4260])
            .setHTML(`
            <div>
                <h1>Codeup</h1>
                <p>Git In There</p>
            </div>
            `);
    }

    //Function that moves me to Africa
    function moveToAfrica() {
        geocode('Africa', MAPBOX_TOKEN).then((data) => {
            console.log(data);
            map.setCenter(data);
        })
    }

    //Events


    // Runs when the program loads
    map.setZoom(10);
    marker.setPopup(popup);



});