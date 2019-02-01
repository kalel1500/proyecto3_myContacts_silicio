var READY_STATE_UNINITIALIZED=0; 
var READY_STATE_LOADING=1; 
var READY_STATE_LOADED=2;
var READY_STATE_INTERACTIVE=3; 
var READY_STATE_COMPLETE=4;

var peticion_insertarContacto;

var foto_insertarContacto;
var nombreMostrar_insertarContacto;
var nombre1_insertarContacto;
var nombre2_insertarContacto;
var apellido1_insertarContacto;
var apellido2_insertarContacto;
var telefono_insertarContacto;
var correo_insertarContacto;
var informacion_insertarContacto;

var divAlertasVerde = document.getElementById('div-alertas-verde');
var divErrorMos = document.getElementById('div_error_mostrar');
var divErrorTel = document.getElementById('div_error_tel');

function inicializaXhr_insertarContacto() {
	if(window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}
	else if(window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}
function cargaContenido_insertarContacto(url, metodo, funcion) {
	peticion_insertarContacto = inicializaXhr_insertarContacto();
	if(peticion_insertarContacto) {
		peticion_insertarContacto.onreadystatechange = funcion;
		peticion_insertarContacto.open(metodo, url, true);

		if ((nombreMostrar_insertarContacto == "") || (telefono_insertarContacto == "")) {

			var msgMos = "";
			var msgTel = "";
			if (nombreMostrar_insertarContacto == "") {
				msgMos = "El campo Mostrar es obligatorio";
				divErrorMos.style.display = "inherit";
				divErrorMos.innerHTML = msgMos;
			}
			if (telefono_insertarContacto == "") {
				msgTel = "El campo Telefono es obligatorio";
				divErrorTel.style.display = "inherit";
				divErrorTel.innerHTML = msgTel;
			}

			setTimeout('borrarMensaje_modificarPerfil()',2000);
			return false;
			
		}
		
		peticion_insertarContacto.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		peticion_insertarContacto.send("nombreArchivo_contacto="+foto_insertarContacto+"&nombreMostrar_contacto="+nombreMostrar_insertarContacto+"&nombre1_contacto="+nombre1_insertarContacto+"&nombre2_contacto="+nombre2_insertarContacto+"&apellido1_contacto="+apellido1_insertarContacto+"&apellido2_contacto="+apellido2_insertarContacto+"&telefono_contacto="+telefono_insertarContacto+"&email_contacto="+correo_insertarContacto+"&comentario_contacto="+informacion_insertarContacto);
		
			
	}
}

function borrarMensaje_insertarContacto() {
	document.getElementById('btn_guardar_ins').disabled = false;
	document.getElementById('btn_cancelar_ins').disabled = false;
	divAlertasVerde.innerHTML = "";
	divAlertasVerde.style.display = "none";
	divErrorMos.style.display = "none";
	divErrorTel.style.display = "none";
	
}

function limpiarCampos_insertarContacto() {
	document.form_ins_contacto.inp_nombreMostrar_ins.value = "";
	document.form_ins_contacto.inp_nombre1_ins.value = "";
	document.form_ins_contacto.inp_nombre2_ins.value = "";
	document.form_ins_contacto.inp_apellido1_ins.value = "";
	document.form_ins_contacto.inp_apellido2_ins.value = "";
	document.form_ins_contacto.inp_telefono_ins.value = "";
	document.form_ins_contacto.inp_correo_ins.value = "";
	document.form_ins_contacto.inp_informacion_ins.value = "";
}

function insertarDatos_insertarContacto(){

	//foto_insertarContacto=document.form_ins_contacto.inp_subirFoto.value;
	foto_insertarContacto="default_user";
	nombreMostrar_insertarContacto=document.form_ins_contacto.inp_nombreMostrar_ins.value;
	nombre1_insertarContacto=document.form_ins_contacto.inp_nombre1_ins.value;
	nombre2_insertarContacto=document.form_ins_contacto.inp_nombre2_ins.value;
	apellido1_insertarContacto=document.form_ins_contacto.inp_apellido1_ins.value;
	apellido2_insertarContacto=document.form_ins_contacto.inp_apellido2_ins.value;
	telefono_insertarContacto=document.form_ins_contacto.inp_telefono_ins.value;
	correo_insertarContacto=document.form_ins_contacto.inp_correo_ins.value;
	informacion_insertarContacto=document.form_ins_contacto.inp_informacion_ins.value;

	if(peticion_insertarContacto.readyState == READY_STATE_COMPLETE) {
		if(peticion_insertarContacto.status == 200) {
			//respuesta_insertarContacto = eval("(" + peticion_insertarContacto.responseText + ")");
			//respuesta_insertarContacto = JSON.encode(peticion_insertarContacto.responseText);
			//if (respuesta_insertarContacto.resultado == "ok") {
			
			//document.getElementById('canc-disable-on-mod').disabled = true;
			//document.getElementById('conf-disable-on-mod').disabled = true;
			divAlertasVerde.innerHTML = "Contacto insertado con exito";
			divAlertasVerde.style.display = "inherit";

			iniciar_datosContactos();
			setTimeout('borrarMensaje_insertarContacto()',2000);
			setTimeout('limpiarCampos_insertarContacto()',2000);
			document.getElementById('btn_cancelar_ins').click();
		} 
	}
}


function iniciar_insertarContacto() {
	var url = "assets/php/proc/contactos_insertar.proc.php";

	cargaContenido_insertarContacto(url, "POST", insertarDatos_insertarContacto);
}


function segunMostrar_insertarContacto() {
	var URLactual = window.location.search;
	//var json = JSON.stringify(eval('(' + URLactual + ')'));
	//var json = JSON.parse(URLactual);
	//var json = eval('('+URLactual+')');
	
	if (URLactual.match(/.*contactos.*/)) {
		document.getElementById("form-ins-contacto").addEventListener("submit", function(event){
			event.preventDefault();
			iniciar_insertarContacto();

			
		});
	}
}
	
window.addEventListener("load", segunMostrar_insertarContacto);