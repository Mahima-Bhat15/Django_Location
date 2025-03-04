const googleApiKey = "AIzaSyACo0iKPc60tkUdMDH7h1s4LFo_B1yCoq8"; 


function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 12, lng: 77 }, // Default location of Bangalore
        zoom: 12,
    });

    getAccurateLocation(map);
}


function getAccurateLocation(map) {
    fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=${googleApiKey}`, {
        method: "POST"
    })
    .then(response => response.json())
    .then(data => {
        if (data.location) {
            let lat = data.location.lat;
            let lng = data.location.lng;
            console.log("Google Location:", lat, lng);
            updateMap(map, lat, lng);
        } else {
            console.warn("Google API failed, falling back to browser geolocation");
            fallbackToHTML5Location(map);
        }
    })
    .catch(error => {
        console.error("Google API error:", error);
        fallbackToHTML5Location(map);
    });
}

function fallbackToHTML5Location(map) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                let lat = position.coords.latitude;
                let lng = position.coords.longitude;
                console.log("HTML5 Geolocation:", lat, lng);
                updateMap(map, lat, lng);
            },
            function (error) {
                alert("Error: Unable to fetch location. " + error.message);
            },
            { enableHighAccuracy: true } // 🔥 Improves accuracy
        );
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}

function updateMap(map, lat, lng) {
    const marker = new google.maps.Marker({
        position: { lat, lng },
        map: map,
        title: "You are here!"
    });

    map.setCenter({ lat, lng });
    map.setZoom(14);
}


window.initMap = initMap;
