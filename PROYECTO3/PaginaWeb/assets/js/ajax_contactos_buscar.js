var READY_STATE_UNINITIALIZED=0; 
var READY_STATE_LOADING=1; 
var READY_STATE_LOADED=2;
var READY_STATE_INTERACTIVE=3; 
var READY_STATE_COMPLETE=4;

var peticion_buscarContacto;

var busqueda;

function inicializaXhr_buscarContacto() {
	if(window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}
	else if(window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}
function cargaContenido_buscarContacto(url, metodo, funcion) {
	peticion_buscarContacto = inicializaXhr_buscarContacto();
	if(peticion_buscarContacto) {
		peticion_buscarContacto.onreadystatechange = funcion;
		peticion_buscarContacto.open(metodo, url, true);
				
		peticion_buscarContacto.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		peticion_buscarContacto.send("busqueda="+busqueda);
		
			
	}
}

function borrarMensaje_buscarContacto() {

	divAlertasVerde.innerHTML = "";
	divAlertasVerde.style.display = "none";
}

function insertarDatos_buscarContacto(){

	busqueda = document.getElementById("id-form-buscar").value;

	if(peticion_buscarContacto.readyState == READY_STATE_COMPLETE) {
		if(peticion_buscarContacto.status == 200) {
			
			divAlertasVerde.innerHTML = "Busqueda realizada con exito";
			divAlertasVerde.style.display = "inherit";

			cargaContenido_buscarContacto(url, "POST", consultarDatos_datosContactos);
			setTimeout('borrarMensaje_buscarContacto()',1000);
		} 
	}
}




function iniciar_buscarContacto() {
	var url = "assets/php/proc/contactos_buscar.proc.php";

	cargaContenido_buscarContacto(url, "POST", insertarDatos_buscarContacto);
}



function segunMostrar_buscarContacto() {
	var URLactual = window.location.search;
	
	if (URLactual.match(/.*contactos.*/)) {
		document.getElementById("id-form-buscar").addEventListener("submit", function(event){
			event.preventDefault();
			iniciar_buscarContacto();
			
		}, false);
	}
}

window.addEventListener("load", segunMostrar_buscarContacto);