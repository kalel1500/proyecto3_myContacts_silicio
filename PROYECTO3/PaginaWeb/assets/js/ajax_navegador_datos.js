var READY_STATE_UNINITIALIZED=0; 
var READY_STATE_LOADING=1; 
var READY_STATE_LOADED=2;
var READY_STATE_INTERACTIVE=3; 
var READY_STATE_COMPLETE=4;

var peticion_datosContactosNav;

function inicializaXhr_datosContactosNav() {
	if(window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}
	else if(window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}

function cargaContenido_datosContactosNav(url, metodo, funcion) {
	peticion_datosContactosNav = inicializaXhr_datosContactosNav();
	if(peticion_datosContactosNav) {
		peticion_datosContactosNav.onreadystatechange = funcion;
		peticion_datosContactosNav.open(metodo, url, true);
		peticion_datosContactosNav.send(null);
	}
}

function consultarDatos_datosContactosNav(){
	div_datosPerfilNav = document.getElementById('li-link-nombre-usuario');

	var id_datosContactosNav;
	var nombreMostrar_datosContactosNav;
	
	if(peticion_datosContactosNav.readyState == READY_STATE_COMPLETE) {
		if(peticion_datosContactosNav.status == 200) {

			try {
				respuesta_datosContactosNav = eval("("+peticion_datosContactosNav.responseText+")");
				/*respuesta_datosContactosNav = JSON.encode(peticion_datosContactosNav.responseText);*/
				
			}
			catch(err) {
				respuesta_datosContactosNav = "vacio";
			}
		
			var li = "";
			if (respuesta_datosContactosNav != "vacio") {

				id_datosContactosNav = respuesta_datosContactosNav[0].id_usuario;
				nombreMostrar_datosContactosNav = respuesta_datosContactosNav[0].usuario_usuario;

				li += '<a href="index.php?mostrar=perfil&idUsu=' + id_datosContactosNav + '"><span class="glyphicon glyphicon-user"></span>' + nombreMostrar_datosContactosNav + '</a>';
				
			} else {
				div_datosPerfilNav.innerHTML = "Aim no hay registros";
			}
			div_datosPerfilNav.innerHTML = li;
		} else {
			div_datosPerfilNav.innerHTML = "El usuario no existe";
		
		}
	}
}

function iniciar_datosContactosNav() {
	var url = "assets/php/proc/perfil_datos.proc.php";

	cargaContenido_datosContactosNav(url, "POST", consultarDatos_datosContactosNav);
}

window.addEventListener("load", iniciar_datosContactosNav);