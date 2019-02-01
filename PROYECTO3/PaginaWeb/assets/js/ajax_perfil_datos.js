var READY_STATE_UNINITIALIZED=0; 
var READY_STATE_LOADING=1; 
var READY_STATE_LOADED=2;
var READY_STATE_INTERACTIVE=3; 
var READY_STATE_COMPLETE=4;

var peticion_datosPerfil;

function inicializaXhr_datosPerfil() {
	if(window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}
	else if(window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}

function cargaContenido_datosPerfil(url, metodo, funcion) {
	peticion_datosPerfil = inicializaXhr_datosPerfil();
	if(peticion_datosPerfil) {
		peticion_datosPerfil.onreadystatechange = funcion;
		peticion_datosPerfil.open(metodo, url, true);
		peticion_datosPerfil.send(null);
	}
}

function consultarDatos_datosPerfil(){
	div_datosPerfil = document.getElementById('div-datos-perfil');

	var fotoRuta_datosPerfil;
	var foto_datosPerfil;
	var fotoExt_datosPerfil;
	var usuario_datosPerfil;
	var nombre1_datosPerfil;
	var nombre2_datosPerfil;
	var apellido1_datosPerfil;
	var apellido2_datosPerfil;
	var telefono_datosPerfil;
	var correo_datosPerfil;
	var informacion_datosPerfil;
	var sexo_datosPerfil;
	
	if(peticion_datosPerfil.readyState == READY_STATE_COMPLETE) {
		if(peticion_datosPerfil.status == 200) {

			try {
				respuesta_datosPerfil = eval("("+peticion_datosPerfil.responseText+")");
				/*respuesta_datosPerfil = JSON.encode(peticion_datosPerfil.responseText);*/
				
			}
			catch(err) {
				respuesta_datosPerfil = "vacio";
			}
		
			var tabla = "";
			if (respuesta_datosPerfil != "vacio") {

				fotoRuta_datosPerfil = respuesta_datosPerfil[0].rutaArchivo_usuario;
				foto_datosPerfil = respuesta_datosPerfil[0].nombreArchivo_usuario;
				fotoExt_datosPerfil = respuesta_datosPerfil[0].extensionArchivos_usuario;
				usuario_datosPerfil = respuesta_datosPerfil[0].usuario_usuario;
				nombre1_datosPerfil = respuesta_datosPerfil[0].nombre1_usuario;
				nombre2_datosPerfil = respuesta_datosPerfil[0].nombre2_usuario;
				apellido1_datosPerfil = respuesta_datosPerfil[0].apellido1_usuario;
				apellido2_datosPerfil = respuesta_datosPerfil[0].apellido2_usuario;
				telefono_datosPerfil = respuesta_datosPerfil[0].telefono_usuario;
				correo_datosPerfil = respuesta_datosPerfil[0].email_usuario;
				informacion_datosPerfil = respuesta_datosPerfil[0].comentario_usuario;
				sexo_datosPerfil = respuesta_datosPerfil[0].sexo_usuario;

				((fotoRuta_datosPerfil == null)? (fotoRuta_datosPerfil = ""): (fotoRuta_datosPerfil=fotoRuta_datosPerfil));
				((foto_datosPerfil == null)? (foto_datosPerfil = ""): (foto_datosPerfil=foto_datosPerfil));
				((fotoExt_datosPerfil == null)? (fotoExt_datosPerfil = ""): (fotoExt_datosPerfil=fotoExt_datosPerfil));
				((usuario_datosPerfil == null)? (usuario_datosPerfil = ""): (usuario_datosPerfil=usuario_datosPerfil));
				((nombre1_datosPerfil == null)? (nombre1_datosPerfil = ""): (nombre1_datosPerfil=nombre1_datosPerfil));
				((nombre2_datosPerfil == null)? (nombre2_datosPerfil = ""): (nombre2_datosPerfil=nombre2_datosPerfil));
				((apellido1_datosPerfil == null)? (apellido1_datosPerfil = ""): (apellido1_datosPerfil=apellido1_datosPerfil));
				((apellido2_datosPerfil == null)? (apellido2_datosPerfil = ""): (apellido2_datosPerfil=apellido2_datosPerfil));
				((telefono_datosPerfil == null)? (telefono_datosPerfil = ""): (telefono_datosPerfil=telefono_datosPerfil));
				((correo_datosPerfil == null)? (correo_datosPerfil = ""): (correo_datosPerfil=correo_datosPerfil));
				((informacion_datosPerfil == null)? (informacion_datosPerfil = ""): (informacion_datosPerfil=informacion_datosPerfil));
				((sexo_datosPerfil == null)? (sexo_datosPerfil = ""): (sexo_datosPerfil=sexo_datosPerfil));

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
			div_datosPerfil.innerHTML = tabla;
		} else {
			div_datosPerfil.innerHTML = "El usuario no existe";
		}
	}
}

function iniciar_datosPerfil() {
	var url = "assets/php/proc/perfil_datos.proc.php";

	cargaContenido_datosPerfil(url, "POST", consultarDatos_datosPerfil);
}

function segunMostrar_datosPerfil() {
	var URLactual = window.location.search;
	
	if (URLactual.match(/.*perfil.*/)) {
		iniciar_datosPerfil();
	}
}
window.addEventListener("load", segunMostrar_datosPerfil);