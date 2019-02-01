// *************************************************
// **********  Envío de ubicación   ***************
// ***********************************************
function objetoAjax(){
    var xmlhttp=false;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
 
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
 
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
      xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

// var latitud_ubicacion = getDocumentById('latitud_ubicacion');
// var longitud_ubicacion = getDocumentById('longitud_ubicacion'); 
// var nombre_ubicacion = getDocumentById('nombre_ubicacion');
var latitudpred = 41.355345;
var longitudpred = 2.1143254;

// *************************************************
// **********     Limpiar campos    ***************
// ***********************************************

    function limpiarCampos(){
        latitudpred = "";
        longitudpred = "";
    }


// *************************************************
// **************  Leaflet Mapa    ****************
// ***********************************************

// Creación del mapa
var mymap = L.map('mapid').setView([41.35, 2.11], 13);

// Pie del mapa
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 14,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiNTg5MWpvYW4yMyIsImEiOiJjanJpNDNiNXExa3hhM3lvZ2t4NW1ic21xIn0.nmIdnzwj_Zo82O_DGU1Qwg'
}).addTo(mymap);


// *************************************************
// **************  Leaflet Iconos    **************
// ***********************************************
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


// marcador que está en el mapa nada más crearlo
var marker = L.marker([latitudpred,longitudpred], {icon: predeterminado}).addTo(mymap);

// var marker2 = L.marker([41.3575435, 2.11], {icon: destacado}).addTo(mymap);

// Función para mover el marcador al hacer click en el mapa. 
function onMapClick(e) {

	mymap.removeLayer(marker);
	var latitud = (e.latlng.lat);
	var longitud = (e.latlng.lng);
	marker = L.marker(e.latlng, {icon: predeterminado} ).addTo(mymap);
	// marker = L.marker($latitud, $longitud, {icon: predeterminado} ).addTo(mymap);

    ajax=objetoAjax();

    ajax.open("POST", "añadir_ubicacion.php",true);
    ajax.onreadystatechange=function() {
    if (ajax.readyState==4) {
        divResultado.innerHTML = ajax.responseText
        LimpiarCampos();
    }
 }

    // alert(latitud + ' - ' + longitud);
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    ajax.send("latitud_ubicacion=" + latitud + "&longitud_ubicacion=" + longitud);
    }

function onMarkerClick(a) {

	mymap.removeLayer(marker);
    marker.bindPopup(a.latlng).openPopup();
}

// mymap.on('dblclick', onMarkerClick);

mymap.on('click', onMapClick);


// marker.setLatLng(e.latlng.lat,e.latlng.lng)
marker.bindPopup("<b>"+ nombre_ubicacion +"</b>").openPopup();


// *************************************************
// **********  Leaflet Routing Machine ************
// ***********************************************
// L.Routing.control({
//   waypoints: [
//     L.latLng(41.355345, 2.11, {icon: predeterminado}), //punto de partida
//     L.latLng(41.355376, 2.15, {icon: predeterminado})  // destino
//   ]
// }).addTo(mymap);

// function createButton(label, container) {
//     var btn = L.DomUtil.create('button', '', container);
//     btn.setAttribute('type', 'button');
//     btn.innerHTML = label;
//     return btn;
// }

// mymap.on('click', function(e) {
//     var container = L.DomUtil.create('div'),
//         startBtn = createButton('Start from this location', container),
//         destBtn = createButton('Go to this location', container);

//     // L.popup()
//     //     .setContent(container)
//     //     .setLatLng(e.latlng)
//     //     .openOn(mymap);

//     L.DomEvent.on(startBtn, 'click', function() {
//         control.spliceWaypoints(0, 1, e.latlng);
//         mymap.closePopup();
//     });

//     L.DomEvent.on(destBtn, 'click', function() {
//         control.spliceWaypoints(control.getWaypoints().length - 1, 1, e.latlng);
//         mymap.closePopup();
//     });
// });

 




// TUTORIAL API Mapa
// https://leafletjs.com/examples/quick-start/