var READY_STATE_UNINITIALIZED=0; 
var READY_STATE_LOADING=1; 
var READY_STATE_LOADED=2;
var READY_STATE_INTERACTIVE=3; 
var READY_STATE_COMPLETE=4;

var peticion_eliminarContacto;


var divAlertasVerde = document.getElementById('div-alertas-verde');

var id_eliminarContacto;

function inicializaXhr_eliminarContacto() {
	if(window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}
	else if(window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}
function cargaContenido_eliminarContacto(url, metodo, funcion, id) {
	peticion_eliminarContacto = inicializaXhr_eliminarContacto();
	if(peticion_eliminarContacto) {
		peticion_eliminarContacto.onreadystatechange = funcion;
		peticion_eliminarContacto.open(metodo, url, true);
				
		peticion_eliminarContacto.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		peticion_eliminarContacto.send("id_contacto="+id_eliminarContacto);
		
			
	}
}

function borrarMensaje_eliminarContacto() {

	divAlertasVerde.innerHTML = "";
	divAlertasVerde.style.display = "none";
}

function insertarDatos_eliminarContacto(){

	if(peticion_eliminarContacto.readyState == READY_STATE_COMPLETE) {
		if(peticion_eliminarContacto.status == 200) {
			
			divAlertasVerde.innerHTML = "Perfil modificado con exito";
			divAlertasVerde.style.display = "inherit";

			setTimeout('borrarMensaje_eliminarContacto()',1000);
			iniciar_datosContactos();
			document.getElementById('bnt-cancelar-baja-contacto').click();
		} 
	}
}


function confirmar_eliminarContacto(id) {

	var url = "assets/php/proc/contactos_eliminar.proc.php";

	cargaContenido_eliminarContacto(url, "POST", insertarDatos_eliminarContacto, "si", id_eliminarContacto);
}

function iniciar_eliminarContacto(id) {
	id_eliminarContacto = id;
	document.getElementById('bnt-baja-contacto').addEventListener("click", function() {
		confirmar_eliminarContacto(id_eliminarContacto);
	});
}

