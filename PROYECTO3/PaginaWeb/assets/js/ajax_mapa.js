
var mymap = L.map('mapid').setView([41.35, 2.11], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiNTg5MWpvYW4yMyIsImEiOiJjanJpNDNiNXExa3hhM3lvZ2t4NW1ic21xIn0.nmIdnzwj_Zo82O_DGU1Qwg'
}).addTo(mymap);


var existe_marker = 0;


var predeterminado = L.icon({
    iconUrl: './assets/imagenes/marcador/predeterminado.png',
    shadowUrl: './assets/imagenes/marcador/sombra.png',

    iconSize:     [30, 40], // size of the icon
    shadowSize:   [40, 40], // size of the shadow
    iconAnchor:   [15, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [5, 40],  // the same for the shadow
    popupAnchor:  [1, -40] // point from which the popup should open relative to the iconAnchor
});

var destacado = L.icon({
    iconUrl: './assets/imagenes/marcador/destacado.png',
    shadowUrl: './assets/imagenes/marcador/sombra.png',

    iconSize:     [30, 40], // size of the icon
    shadowSize:   [40, 40], // size of the shadow
    iconAnchor:   [15, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [5, 40],  // the same for the shadow
    popupAnchor:  [1, -40] // point from which the popup should open relative to the iconAnchor
});

var marker = L.marker([41.355345, 2.11], {icon: predeterminado}).addTo(mymap);

var marker2 = L.marker([41.3575435, 2.11], {icon: destacado}).addTo(mymap);

function onMapClick(e) {

	mymap.removeLayer(marker);
	var latitud = (e.latlng.lat);
	var longitud = (e.latlng.lng);
	marker = L.marker(e.latlng, {icon: predeterminado} ).addTo(mymap);
	// marker = L.marker($latitud, $longitud, {icon: predeterminado} ).addTo(mymap);
    }

function onMarkerClick(a) {

	mymap.removeLayer(marker);
}

// mymap.on('dblclick', onMarkerClick);

mymap.on('click', onMapClick);


// marker.setLatLng(e.latlng.lat,e.latlng.lng)
marker.bindPopup("<b>Joan XXIII</b><br>Escola Jesuïtes").openPopup();


// var circle = L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);

// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(mymap);






// TUTORIAL API Mapa
// https://leafletjs.com/examples/quick-start/