var READY_STATE_UNINITIALIZED=0; 
var READY_STATE_LOADING=1; 
var READY_STATE_LOADED=2;
var READY_STATE_INTERACTIVE=3; 
var READY_STATE_COMPLETE=4;

var peticion_modificarPerfil;


var foto_modificarPerfil;
var usuario_modificarPerfil;
var nombre1_modificarPerfil;
var nombre2_modificarPerfil;
var apellido1_modificarPerfil;
var apellido2_modificarPerfil;
var telefono_modificarPerfil;
var correo_modificarPerfil;
var informacion_modificarPerfil;
var sexo_modificarPerfil;
var password_modificarPerfil;
var passwordConf_modificarPerfil;
var checkboxPass_modificarPerfil;
var existePass_modificarPerfil;

var divAlertasVerde = document.getElementById('div-alertas-verde');
var divErrorPass = document.getElementById('div_error_pas');

function inicializaXhr_modificarPerfil() {
	if(window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}
	else if(window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}
function cargaContenido_modificarPerfil(url, metodo, funcion) {
	peticion_modificarPerfil = inicializaXhr_modificarPerfil();
	if(peticion_modificarPerfil) {
		peticion_modificarPerfil.onreadystatechange = funcion;
		peticion_modificarPerfil.open(metodo, url, true);
		if ((existePass_modificarPerfil == "si") && ((password_modificarPerfil == "") || (password_modificarPerfil != passwordConf_modificarPerfil))) {

			var msg = "";
			if (password_modificarPerfil == "") { msg = "Rellena el campo contraseña"; }
			else if (password_modificarPerfil != passwordConf_modificarPerfil) { msg = "Las contraseñas no coinciden"; }
			divErrorPass.style.display = "inherit";
			divErrorPass.innerHTML = msg;
			setTimeout('borrarMensaje_modificarPerfil()',2000);
			return false;
			
		}
		
		peticion_modificarPerfil.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		peticion_modificarPerfil.send("nombreArchivo_usuario="+foto_modificarPerfil+"&usuario_usuario="+usuario_modificarPerfil+"&nombre1_usuario="+nombre1_modificarPerfil+"&nombre2_usuario="+nombre2_modificarPerfil+"&apellido1_usuario="+apellido1_modificarPerfil+"&apellido2_usuario="+apellido2_modificarPerfil+"&telefono_usuario="+telefono_modificarPerfil+"&email_usuario="+correo_modificarPerfil+"&comentario_usuario="+informacion_modificarPerfil+"&sexo_usuario="+sexo_modificarPerfil+"&password_usuario="+password_modificarPerfil+"&existePass_usuario="+existePass_modificarPerfil);
		
			
	}
}

function borrarMensaje_modificarPerfil() {

	document.getElementById('canc-disable-on-mod').disabled = false;
	document.getElementById('conf-disable-on-mod').disabled = false;
	divAlertasVerde.innerHTML = "";
	divAlertasVerde.style.display = "none";
	divErrorPass.style.display = "none";

	document.form_mod_perfil.inp_new_pas.value ="";
	document.form_mod_perfil.inp_conf_new_pas.value ="";

}

function insertarDatos_modificarPerfil(){

	//foto_modificarPerfil=document.form_mod_perfil.inp_subirFoto.value;
	foto_modificarPerfil="default_user";
	usuario_modificarPerfil=document.form_mod_perfil.inp_usuario.value;
	nombre1_modificarPerfil=document.form_mod_perfil.inp_nombre1.value;
	nombre2_modificarPerfil=document.form_mod_perfil.inp_nombre2.value;
	apellido1_modificarPerfil=document.form_mod_perfil.inp_apellido1.value;
	apellido2_modificarPerfil=document.form_mod_perfil.inp_apellido2.value;
	telefono_modificarPerfil=document.form_mod_perfil.inp_telefono.value;
	correo_modificarPerfil=document.form_mod_perfil.inp_correo.value;
	informacion_modificarPerfil=document.form_mod_perfil.inp_informacion.value;
	sexo_modificarPerfil=document.form_mod_perfil.inp_sexo.value;
	checkboxPass_modificarPerfil=document.form_mod_perfil.inp_reset_pass;

	if (checkboxPass_modificarPerfil.checked) {
		existePass_modificarPerfil = "si";
		password_modificarPerfil=document.form_mod_perfil.inp_new_pas.value;
		passwordConf_modificarPerfil=document.form_mod_perfil.inp_conf_new_pas.value;
	} else {
		existePass_modificarPerfil = "no";
		password_modificarPerfil="";
		passwordConf_modificarPerfil="";
	}

	/*if ((password_modificarPerfil != "") && (password_modificarPerfil == passwordConf_modificarPerfil)) {
		existePass_modificarPerfil = "si";
	} else {
		existePass_modificarPerfil = "no";
	}*/

	if(peticion_modificarPerfil.readyState == READY_STATE_COMPLETE) {
		if(peticion_modificarPerfil.status == 200) {
			//respuesta_modificarPerfil = eval("(" + peticion_modificarPerfil.responseText + ")");
			//respuesta_modificarPerfil = JSON.encode(peticion_modificarPerfil.responseText);
			//if (respuesta_modificarPerfil.resultado == "ok") {
			
			//document.getElementById('canc-disable-on-mod').disabled = true;
			//document.getElementById('conf-disable-on-mod').disabled = true;
			divAlertasVerde.innerHTML = "Perfil modificado con exito";
			divAlertasVerde.style.display = "inherit";

			iniciar_datosContactosNav();
			iniciar_datosPerfil();
			setTimeout('borrarMensaje_modificarPerfil()',2000);
			document.getElementById('canc-disable-on-mod').click();
		} 
	}
}


function iniciar_modificarPerfil() {
	var url = "assets/php/proc/perfil_modificar.proc.php";

	cargaContenido_modificarPerfil(url, "POST", insertarDatos_modificarPerfil);
}


function segunMostrar_modificarPerfil() {
	var URLactual = window.location.search;
	//var json = JSON.stringify(eval('(' + URLactual + ')'));
	//var json = JSON.parse(URLactual);
	//var json = eval('('+URLactual+')');
	
	if (URLactual.match(/.*perfil.*/)) {
		document.getElementById("id-form-perfil").addEventListener("submit", function(event){
			event.preventDefault();
			iniciar_modificarPerfil();

			
		});
	}
}
	
window.addEventListener("load", segunMostrar_modificarPerfil);