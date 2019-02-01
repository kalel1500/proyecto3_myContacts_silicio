var READY_STATE_UNINITIALIZED=0; 
var READY_STATE_LOADING=1; 
var READY_STATE_LOADED=2;
var READY_STATE_INTERACTIVE=3; 
var READY_STATE_COMPLETE=4;

var peticion_destacarContacto;


var divAlertasVerde = document.getElementById('div-alertas-verde');

var id_destacarContacto;

function inicializaXhr_destacarContacto() {
	if(window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}
	else if(window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}
function cargaContenido_destacarContacto(url, metodo, funcion, que, id) {
	peticion_destacarContacto = inicializaXhr_destacarContacto();
	if(peticion_destacarContacto) {
		peticion_destacarContacto.onreadystatechange = funcion;
		peticion_destacarContacto.open(metodo, url, true);
				
		peticion_destacarContacto.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		peticion_destacarContacto.send("id_contacto="+id+"&que="+que);
		
			
	}
}

function borrarMensaje_destacarContacto() {

	divAlertasVerde.innerHTML = "";
	divAlertasVerde.style.display = "none";
}

function insertarDatos_destacarContacto(){

	if(peticion_destacarContacto.readyState == READY_STATE_COMPLETE) {
		if(peticion_destacarContacto.status == 200) {
			
			divAlertasVerde.innerHTML = "Perfil modificado con exito";
			divAlertasVerde.style.display = "inherit";

			setTimeout('borrarMensaje_destacarContacto()',1000);
			iniciar_datosContactos();
		} 
	}
}


function iniciar_destacarContacto_si(id) {
	var url = "assets/php/proc/contactos_destacar.proc.php";

	cargaContenido_destacarContacto(url, "POST", insertarDatos_destacarContacto, "si", id);
}

function iniciar_destacarContacto_no(id) {
	var url = "assets/php/proc/contactos_destacar.proc.php";

	cargaContenido_destacarContacto(url, "POST", insertarDatos_destacarContacto, "no", id);
}

