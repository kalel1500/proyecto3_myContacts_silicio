var READY_STATE_UNINITIALIZED=0; 
var READY_STATE_LOADING=1; 
var READY_STATE_LOADED=2;
var READY_STATE_INTERACTIVE=3; 
var READY_STATE_COMPLETE=4;

var peticion_datosContactos;

function inicializaXhr_datosContactos() {
	if(window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}
	else if(window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}

function cargaContenido_datosContactos(url, metodo, funcion) {
	peticion_datosContactos = inicializaXhr_datosContactos();
	if(peticion_datosContactos) {
		peticion_datosContactos.onreadystatechange = funcion;
		peticion_datosContactos.open(metodo, url, true);
		peticion_datosContactos.send(null);
	}
}

function consultarDatos_datosContactos(){
	div_datosContactos = document.getElementById('div-datos-contactos');
	div_datosDatalist = document.getElementById('div-datos-datalist');

	var id_datosContactos;
	var fotoRuta_datosContactos;
	var foto_datosContactos;
	var fotoExt_datosContactos;
	var nombreMostrar_datosContactos;
	var nombre1_datosContactos;
	var nombre2_datosContactos;
	var apellido1_datosContactos;
	var apellido2_datosContactos;
	var telefono_datosContactos;
	var correo_datosContactos;
	var informacion_datosContactos;
	var destacado_datosContactos;
	
	if(peticion_datosContactos.readyState == READY_STATE_COMPLETE) {
		if(peticion_datosContactos.status == 200) {

			try {
				respuesta_datosContactos = eval("("+peticion_datosContactos.responseText+")");
				/*respuesta_datosContactos = JSON.encode(peticion_datosContactos.responseText);*/
				
			}
			catch(err) {
				respuesta_datosContactos = "vacio";
			}
		
			var tabla = "";
			var datalist = "";

			if (respuesta_datosContactos != "vacio") {

				tabla += '' +
				'<table class="table">' +
					'<thead>' +
						'<tr>' +
							'<th>Foto</th>' +
							'<th>Nombre</th>' +
							'<th>Numero de telefono</th>' +
							'<th>Correo</th>' +
							'<th>Destacar</th>' +
							'<th>Editar</th>' +
							'<th>Eliminar</th>' +
						'</tr>' +
					'</thead>' +
					'<tbody>';
						for (var i = 0; i < respuesta_datosContactos.length; i++) {
							id_datosContactos = respuesta_datosContactos[i].id_contacto;
							fotoRuta_datosContactos = respuesta_datosContactos[i].rutaArchivo_contacto;
							foto_datosContactos = respuesta_datosContactos[i].nombreArchivo_contacto;
							fotoExt_datosContactos = respuesta_datosContactos[i].extensionArchivos_contacto;
							nombreMostrar_datosContactos = respuesta_datosContactos[i].nombreMostrar_contacto;
							nombre1_datosContactos = respuesta_datosContactos[i].nombre1_contacto;
							nombre2_datosContactos = respuesta_datosContactos[i].nombre2_contacto;
							apellido1_datosContactos = respuesta_datosContactos[i].apellido1_contacto;
							apellido2_datosContactos = respuesta_datosContactos[i].apellido2_contacto;
							telefono_datosContactos = respuesta_datosContactos[i].telefono_contacto;
							correo_datosContactos = respuesta_datosContactos[i].email_contacto;
							informacion_datosContactos = respuesta_datosContactos[i].comentario_contacto;
							destacado_datosContactos = respuesta_datosContactos[i].destacado_contacto;

							((id_datosContactos == null)? (id_datosContactos = ""): (id_datosContactos=id_datosContactos));
							((fotoRuta_datosContactos == null)? (fotoRuta_datosContactos = ""): (fotoRuta_datosContactos=fotoRuta_datosContactos));
							((foto_datosContactos == null)? (foto_datosContactos = ""): (foto_datosContactos=foto_datosContactos));
							((fotoExt_datosContactos == null)? (fotoExt_datosContactos = ""): (fotoExt_datosContactos=fotoExt_datosContactos));
							((nombreMostrar_datosContactos == null)? (nombreMostrar_datosContactos = ""): (nombreMostrar_datosContactos=nombreMostrar_datosContactos));
							((nombre1_datosContactos == null)? (nombre1_datosContactos = ""): (nombre1_datosContactos=nombre1_datosContactos));
							((nombre2_datosContactos == null)? (nombre2_datosContactos = ""): (nombre2_datosContactos=nombre2_datosContactos));
							((apellido1_datosContactos == null)? (apellido1_datosContactos = ""): (apellido1_datosContactos=apellido1_datosContactos));
							((apellido2_datosContactos == null)? (apellido2_datosContactos = ""): (apellido2_datosContactos=apellido2_datosContactos));
							((telefono_datosContactos == null)? (telefono_datosContactos = ""): (telefono_datosContactos=telefono_datosContactos));
							((correo_datosContactos == null)? (correo_datosContactos = ""): (correo_datosContactos=correo_datosContactos));
							((informacion_datosContactos == null)? (informacion_datosContactos = ""): (informacion_datosContactos=informacion_datosContactos));
							((destacado_datosContactos == null)? (destacado_datosContactos = ""): (destacado_datosContactos=destacado_datosContactos));

							var star;
							if (destacado_datosContactos == "no") {
								star = '<span onclick="iniciar_destacarContacto_si('+id_datosContactos+')" class="glyphicon glyphicon-star-empty contato-hover-cursor"></span>';
							} else if(destacado_datosContactos == "si") {
								star = '<span onclick="iniciar_destacarContacto_no('+id_datosContactos+')" class="glyphicon glyphicon-star contato-hover-cursor"></span>';
							}

							tabla += '' +
							'<tr class="contato-hover">' +
								'<td data-toggle="modal" data-target="#mostrarContacto_modal"><img class="img-thumbnail img-foto-contactos" src="' + fotoRuta_datosContactos + foto_datosContactos + fotoExt_datosContactos + '" alt="foto contacto"></td>' +
								'<td data-toggle="modal" data-target="#mostrarContacto_modal">' + nombreMostrar_datosContactos + '</td>' +
								'<td data-toggle="modal" data-target="#mostrarContacto_modal">' + telefono_datosContactos + '</td>' +
								'<td data-toggle="modal" data-target="#mostrarContacto_modal">' + correo_datosContactos + '</td>' +
								'<td>' + star + '</td>' +
								'<td>' + 
									'<span onclick="escuchar_llenarModrificar('+id_datosContactos+');escuchar_modificarContacto('+id_datosContactos+')" class="glyphicon glyphicon-pencil contato-hover-cursor" data-toggle="modal" data-target="#editarContacto_modal"></span>' + 
								'</td>' +
								'<td>' +
									'<span onclick="iniciar_eliminarContacto('+id_datosContactos+')" class="glyphicon glyphicon-trash contato-hover-cursor" data-toggle="modal" data-target="#confirmarBorrarContacto_modal"></span>' + 
								'</td>' +
							'</tr>';

							datalist += '<option value="'+ nombreMostrar_datosContactos +'">';
						}
					tabla += '</tbody>' +
				'</table>';
			} else {
				tabla += 'Aun no hay registros';
			}
			div_datosContactos.innerHTML = tabla;
			div_datosDatalist.innerHTML = datalist;
		} else {
			div_datosContactos.innerHTML = "El usuario no existe";
		}
	}
}

function iniciar_datosContactos() {
	var url = "assets/php/proc/contactos_datos.proc.php";

	cargaContenido_datosContactos(url, "POST", consultarDatos_datosContactos);
}

function segunMostrar_datosContactos() {
	var URLactual = window.location.search;
	
	if (URLactual.match(/.*contactos.*/)) {
		iniciar_datosContactos();
	}
}
window.addEventListener("load", segunMostrar_datosContactos);