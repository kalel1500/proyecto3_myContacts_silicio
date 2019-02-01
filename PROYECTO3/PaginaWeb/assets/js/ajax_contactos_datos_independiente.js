var READY_STATE_UNINITIALIZED=0; 
var READY_STATE_LOADING=1; 
var READY_STATE_LOADED=2;
var READY_STATE_INTERACTIVE=3; 
var READY_STATE_COMPLETE=4;

var peticion_datosContactos_independiente;


var id_contacto_independiente;

function inicializaXhr_datosContactos_independiente() {
	if(window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}
	else if(window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}

function cargaContenido_datosContactos_independiente(url, metodo, funcion) {
	peticion_datosContactos_independiente = inicializaXhr_datosContactos_independiente();
	if(peticion_datosContactos_independiente) {
		peticion_datosContactos_independiente.onreadystatechange = funcion;
		peticion_datosContactos_independiente.open(metodo, url, true);
		peticion_modificarPerfil.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		peticion_modificarPerfil.send("id_contacto_independiente="+id_contacto_independiente);
		
	}
}

function consultarDatos_datosContactos_independiente(){
	div_nombre_independiente = document.getElementById('div-mostrar-nombre-contacto');
	div_datosContactos_independiente = document.getElementById('div-mostrar-datos-contacto');
	
	id_contacto_independiente = document.getElementById('id_contacto_independiente').value

	var fotoRuta_datosContactos_independiente;
	var foto_datosContactos_independiente;
	var fotoExt_datosContactos_independiente;
	var nombreMostrar_datosContactos_independiente;
	var nombre1_datosContactos_independiente;
	var nombre2_datosContactos_independiente;
	var apellido1_datosContactos_independiente;
	var apellido2_datosContactos_independiente;
	var telefono_datosContactos_independiente;
	var correo_datosContactos_independiente;
	var informacion_datosContactos_independiente;
	var destacado_datosContactos_independiente;
	
	if(peticion_datosContactos_independiente.readyState == READY_STATE_COMPLETE) {
		if(peticion_datosContactos_independiente.status == 200) {

			try {
				respuesta_datosContactos_independiente = eval("("+peticion_datosContactos_independiente.responseText+")");
				/*respuesta_datosContactos_independiente = JSON.encode(peticion_datosContactos_independiente.responseText);*/
				
			}
			catch(err) {
				respuesta_datosContactos_independiente = "vacio";
			}
		
			var tabla = "";

			if (respuesta_datosContactos_independiente != "vacio") {

				fotoRuta_datosContactos_independiente = respuesta_datosContactos_independiente[0].rutaArchivo_contacto;
				foto_datosContactos_independiente = respuesta_datosContactos_independiente[0].nombreArchivo_contacto;
				fotoExt_datosContactos_independiente = respuesta_datosContactos_independiente[0].extensionArchivos_contacto;
				nombreMostrar_datosContactos_independiente = respuesta_datosContactos_independiente[0].nombreMostrar_contacto;
				nombre1_datosContactos_independiente = respuesta_datosContactos_independiente[0].nombre1_contacto;
				nombre2_datosContactos_independiente = respuesta_datosContactos_independiente[0].nombre2_contacto;
				apellido1_datosContactos_independiente = respuesta_datosContactos_independiente[0].apellido1_contacto;
				apellido2_datosContactos_independiente = respuesta_datosContactos_independiente[0].apellido2_contacto;
				telefono_datosContactos_independiente = respuesta_datosContactos_independiente[0].telefono_contacto;
				correo_datosContactos_independiente = respuesta_datosContactos_independiente[0].email_contacto;
				informacion_datosContactos_independiente = respuesta_datosContactos_independiente[0].comentario_contacto;
				destacado_datosContactos_independiente = respuesta_datosContactos_independiente[0].destacado_contacto;

				((fotoRuta_datosContactos_independiente == null)? (fotoRuta_datosContactos_independiente = ""): (fotoRuta_datosContactos_independiente=fotoRuta_datosContactos_independiente));
				((foto_datosContactos_independiente == null)? (foto_datosContactos_independiente = ""): (foto_datosContactos_independiente=foto_datosContactos_independiente));
				((fotoExt_datosContactos_independiente == null)? (fotoExt_datosContactos_independiente = ""): (fotoExt_datosContactos_independiente=fotoExt_datosContactos_independiente));
				((nombreMostrar_datosContactos_independiente == null)? (nombreMostrar_datosContactos_independiente = ""): (nombreMostrar_datosContactos_independiente=nombreMostrar_datosContactos_independiente));
				((nombre1_datosContactos_independiente == null)? (nombre1_datosContactos_independiente = ""): (nombre1_datosContactos_independiente=nombre1_datosContactos_independiente));
				((nombre2_datosContactos_independiente == null)? (nombre2_datosContactos_independiente = ""): (nombre2_datosContactos_independiente=nombre2_datosContactos_independiente));
				((apellido1_datosContactos_independiente == null)? (apellido1_datosContactos_independiente = ""): (apellido1_datosContactos_independiente=apellido1_datosContactos_independiente));
				((apellido2_datosContactos_independiente == null)? (apellido2_datosContactos_independiente = ""): (apellido2_datosContactos_independiente=apellido2_datosContactos_independiente));
				((telefono_datosContactos_independiente == null)? (telefono_datosContactos_independiente = ""): (telefono_datosContactos_independiente=telefono_datosContactos_independiente));
				((correo_datosContactos_independiente == null)? (correo_datosContactos_independiente = ""): (correo_datosContactos_independiente=correo_datosContactos_independiente));
				((informacion_datosContactos_independiente == null)? (informacion_datosContactos_independiente = ""): (informacion_datosContactos_independiente=informacion_datosContactos_independiente));
				((destacado_datosContactos_independiente == null)? (destacado_datosContactos_independiente = ""): (destacado_datosContactos_independiente=destacado_datosContactos_independiente));

							

				tabla += '' +
				'<div class="row center-block margin-rows-perfil div-foto-perfil">' +
					'<div class="col-sm-12 fondo-datos-perfil"><img class="img-thumbnail center-block width50" src="' + fotoRuta_datosPerfil + foto_datosPerfil + fotoExt_datosPerfil + '" alt="foto perfil"></div>' +
				'</div>' +
				'<div class="row center-block margin-rows-perfil">' +
					'<div class="col-sm-6"><strong>Usuario:</strong></div>' +
					'<div class="col-sm-6 fondo-datos-perfil">' + usuario_datosPerfil + '</div>' +
				'</div>' +
				'<div class="row center-block margin-rows-perfil">' +
					'<div class="col-sm-6"><strong>Nombre 1:</strong></div>' +
					'<div class="col-sm-6 fondo-datos-perfil">' + nombre1_datosPerfil + '</div>' +
				'</div>' +
				'<div class="row center-block margin-rows-perfil">' +
					'<div class="col-sm-6"><strong>Nombre 2:</strong></div>' +
					'<div class="col-sm-6 fondo-datos-perfil">' + nombre2_datosPerfil + '</div>' +
				'</div>' +
				'<div class="row center-block margin-rows-perfil">' +
					'<div class="col-sm-6"><strong>Apellido 1:</strong></div>' +
					'<div class="col-sm-6 fondo-datos-perfil">' + apellido1_datosPerfil + '</div>' +
				'</div>' +
				'<div class="row center-block margin-rows-perfil">' +
					'<div class="col-sm-6"><strong>Apellido 2:</strong></div>' +
					'<div class="col-sm-6 fondo-datos-perfil">' + apellido2_datosPerfil + '</div>' +
				'</div>' +
				'<div class="row center-block margin-rows-perfil">' +
					'<div class="col-sm-6"><strong>Telefono:</strong></div>' +
					'<div class="col-sm-6 fondo-datos-perfil">' + telefono_datosPerfil + '</div>' +
				'</div>' +
				'<div class="row center-block margin-rows-perfil">' +
					'<div class="col-sm-6"><strong>Correo:</strong></div>' +
					'<div class="col-sm-6 fondo-datos-perfil">' + correo_datosPerfil + '</div>' +
				'</div>' +
				'<div class="row center-block margin-rows-perfil">' +
					'<div class="col-sm-6"><strong>Mas informacion:</strong></div>' +
					'<div class="col-sm-6 fondo-datos-perfil">' + informacion_datosPerfil + '</div>' +
				'</div>' +
				'<div class="row center-block margin-rows-perfil">' +
					'<div class="col-sm-6"><strong>Sexo:</strong></div>' +
					'<div class="col-sm-6 fondo-datos-perfil">' + sexo_datosPerfil + '</div>' +
				'</div>';

			} else {
				tabla += 'Aun no hay registros';
			}
			div_datosContactos_independiente.innerHTML = tabla;
			div_nombre_independiente.innerHTML = nombreMostrar_datosContactos_independiente;
		} else {
			div_datosContactos_independiente.innerHTML = "El usuario no existe";
		}
	}
}

function iniciar_datosContactos_independiente() {
	var url = "assets/php/proc/contactos_datos_independiente_1.proc.php";

	cargaContenido_datosContactos_independiente(url, "POST", consultarDatos_datosContactos_independiente);
}

function segunMostrar_datosContactos_independiente() {
	var URLactual = window.location.search;
	
	if (URLactual.match(/.*contactos.*/)) {
		
		var node = document.getElementById("qqq");
		return (node !== document.body) ? false : iniciar_datosContactos_independiente();

		/*document.getElementById("qqq").addEventListener("click", function(event){
			event.preventDefault();
			iniciar_datosContactos_independiente();

			
		});*/
	}


}
window.addEventListener("load", segunMostrar_datosContactos_independiente);