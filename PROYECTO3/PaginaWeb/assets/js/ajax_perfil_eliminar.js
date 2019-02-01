var READY_STATE_UNINITIALIZED=0; 
var READY_STATE_LOADING=1; 
var READY_STATE_LOADED=2;
var READY_STATE_INTERACTIVE=3; 
var READY_STATE_COMPLETE=4;

var peticion_eliminarPerfil;


var divAlertasVerde = document.getElementById('div-alertas-verde');
var divErrorPass = document.getElementById('div_error_pas');

function inicializaXhr_eliminarPerfil() {
	if(window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}
	else if(window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}
function cargaContenido_eliminarPerfil(url, metodo, funcion) {
	peticion_eliminarPerfil = inicializaXhr_eliminarPerfil();
	if(peticion_eliminarPerfil) {
		peticion_eliminarPerfil.onreadystatechange = funcion;
		peticion_eliminarPerfil.open(metodo, url, true);
		peticion_eliminarPerfil.send(null);
			
	}
}

function borrarMensaje_eliminarPerfil() {

	document.getElementById('bnt-cancelar-baja-perfil').disabled = false;
	document.getElementById('bnt-baja-perfil').disabled = false;
	divAlertasVerde.innerHTML = "";
	divAlertasVerde.style.display = "none";
	divErrorPass.style.display = "none";

	location.href ="index.php";

}

function procesarDatos_eliminarPerfil(){

	if(peticion_eliminarPerfil.readyState == READY_STATE_COMPLETE) {
		if(peticion_eliminarPerfil.status == 200) {
			document.getElementById('bnt-cancelar-baja-perfil').disabled = true;
			document.getElementById('bnt-baja-perfil').disabled = true;
			divAlertasVerde.innerHTML = "Cuenta eliminada con exito";
			divAlertasVerde.style.display = "inherit";

			setTimeout('borrarMensaje_eliminarPerfil()',2000);
		} 
	}
}


function iniciar_eliminarPerfil() {
	var url = "assets/php/proc/perfil_borrar.proc.php";

	cargaContenido_eliminarPerfil(url, "POST", procesarDatos_eliminarPerfil);
}


function segunMostrar_eliminarPerfil() {
	var URLactual = window.location.search;
	
	if (URLactual.match(/.*perfil.*/)) {
		document.getElementById("bnt-baja-perfil").addEventListener("click", iniciar_eliminarPerfil);
	}
}
	
window.addEventListener("load", segunMostrar_eliminarPerfil);