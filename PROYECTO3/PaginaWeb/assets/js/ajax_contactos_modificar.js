var READY_STATE_UNINITIALIZED=0; 
var READY_STATE_LOADING=1; 
var READY_STATE_LOADED=2;
var READY_STATE_INTERACTIVE=3; 
var READY_STATE_COMPLETE=4;

var peticion_modificarContacto;


var foto_modificarContacto;
var usuario_modificarContacto;
var nombre1_modificarContacto;
var nombre2_modificarContacto;
var apellido1_modificarContacto;
var apellido2_modificarContacto;
var telefono_modificarContacto;
var correo_modificarContacto;
var informacion_modificarContacto;

var divAlertasVerde = document.getElementById('div-alertas-verde');
var divErrorMos = document.getElementById('div_error_mostrar');
var divErrorTel = document.getElementById('div_error_tel');

var id_modificarContacto;

function inicializaXhr_modificarContacto() {
	if(window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}
	else if(window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}
function cargaContenido_modificarContacto(url, metodo, funcion, id) {
	peticion_modificarContacto = inicializaXhr_modificarContacto();
	if(peticion_modificarContacto) {
		peticion_modificarContacto.onreadystatechange = funcion;
		peticion_modificarContacto.open(metodo, url, true);

		if ((nombreMostrar_modificarContacto == "") || (telefono_modificarContacto == "")) {

			var msgMos = "";
			var msgTel = "";
			if (nombreMostrar_modificarContacto == "") {
				msgMos = "El campo Mostrar es obligatorio";
				divErrorMos.style.display = "inherit";
				divErrorMos.innerHTML = msgMos;
			}
			if (telefono_modificarContacto == "") {
				msgTel = "El campo Telefono es obligatorio";
				divErrorTel.style.display = "inherit";
				divErrorTel.innerHTML = msgTel;
			}

			setTimeout('borrarMensaje_modificarPerfil()',2000);
			return false;
			
		}
		
		peticion_modificarContacto.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		peticion_modificarContacto.send("nombreArchivo_contacto="+foto_modificarContacto+"&nombreMostrar_contacto="+nombreMostrar_modificarContacto+"&nombre1_contacto="+nombre1_modificarContacto+"&nombre2_contacto="+nombre2_modificarContacto+"&apellido1_contacto="+apellido1_modificarContacto+"&apellido2_contacto="+apellido2_modificarContacto+"&telefono_contacto="+telefono_modificarContacto+"&email_contacto="+correo_modificarContacto+"&comentario_contacto="+informacion_modificarContacto+"&id_contacto="+id);
		
			
	}
}

function borrarMensaje_modificarContacto() {

	document.getElementById('btn_cancelar_mod').disabled = false;
	document.getElementById('btn_guardar_mod').disabled = false;
	divAlertasVerde.innerHTML = "";
	divAlertasVerde.style.display = "none";
	divErrorMos.style.display = "none";
	divErrorTel.style.display = "none";

}

function insertarDatos_modificarContacto(){

	//foto_modificarContacto=document.form_mod_contacto.inp_subirFoto.value;
	foto_modificarContacto="default_user";
	nombreMostrar_modificarContacto=document.form_mod_contacto.inp_nombreMostrar_mod.value;
	nombre1_modificarContacto=document.form_mod_contacto.inp_nombre1_mod.value;
	nombre2_modificarContacto=document.form_mod_contacto.inp_nombre2_mod.value;
	apellido1_modificarContacto=document.form_mod_contacto.inp_apellido1_mod.value;
	apellido2_modificarContacto=document.form_mod_contacto.inp_apellido2_mod.value;
	telefono_modificarContacto=document.form_mod_contacto.inp_telefono_mod.value;
	correo_modificarContacto=document.form_mod_contacto.inp_correo_mod.value;
	informacion_modificarContacto=document.form_mod_contacto.inp_informacion_mod.value;


	if(peticion_modificarContacto.readyState == READY_STATE_COMPLETE) {
		if(peticion_modificarContacto.status == 200) {
			//respuesta_modificarContacto = eval("(" + peticion_modificarContacto.responseText + ")");
			//respuesta_modificarContacto = JSON.encode(peticion_modificarContacto.responseText);
			//if (respuesta_modificarContacto.resultado == "ok") {
			
			//document.getElementById('btn_cancelar_mod').disabled = true;
			//document.getElementById('btn_guardar_mod').disabled = true;
			divAlertasVerde.innerHTML = "Contacto modificado con exito";
			divAlertasVerde.style.display = "inherit";

			iniciar_datosContactos();
			setTimeout('borrarMensaje_modificarContacto()',2000);
			document.getElementById('btn_cancelar_mod').click();
		} 
	}
}


function iniciar_modificarContacto(id) {
	var url = "assets/php/proc/contactos_modificar.proc.php";

	cargaContenido_modificarContacto(url, "POST", insertarDatos_modificarContacto, id);
}


function escuchar_modificarContacto(id) {
	document.getElementById("form_mod_contacto").addEventListener("submit", function(event){
		event.preventDefault();
		iniciar_modificarContacto(id);
	});
}