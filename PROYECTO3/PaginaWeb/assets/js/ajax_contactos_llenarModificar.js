var READY_STATE_UNINITIALIZED=0; 
var READY_STATE_LOADING=1; 
var READY_STATE_LOADED=2;
var READY_STATE_INTERACTIVE=3; 
var READY_STATE_COMPLETE=4;

var peticion_llenarModrificar;

function inicializaXhr_llenarModrificar() {
	if(window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}
	else if(window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}

function cargaContenido_llenarModrificar(url, metodo, funcion, id) {
	peticion_llenarModrificar = inicializaXhr_llenarModrificar();
	if(peticion_llenarModrificar) {
		peticion_llenarModrificar.onreadystatechange = funcion;
		peticion_llenarModrificar.open(metodo, url, true);

		peticion_llenarModrificar.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		peticion_llenarModrificar.send("id_contacto="+id);
	}
}

function consultarDatos_llenarModrificar(){
	//div_llenarModrificar = document.getElementById('div-datos-perfil');

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
	
	if(peticion_llenarModrificar.readyState == READY_STATE_COMPLETE) {
		if(peticion_llenarModrificar.status == 200) {

			try {
				respuesta_llenarModrificar = eval("("+peticion_llenarModrificar.responseText+")");
				/*respuesta_llenarModrificar = JSON.encode(peticion_llenarModrificar.responseText);*/
				
			}
			catch(err) {
				respuesta_llenarModrificar = "vacio";
			}
		
			
			if (respuesta_llenarModrificar != "vacio") {

				fotoRuta_llenarModrificar = respuesta_llenarModrificar[0].rutaArchivo_contacto;
				foto_llenarModrificar = respuesta_llenarModrificar[0].nombreArchivo_contacto;
				fotoExt_llenarModrificar = respuesta_llenarModrificar[0].extensionArchivos_contacto;
				usuario_llenarModrificar = respuesta_llenarModrificar[0].nombreMostrar_contacto;
				nombre1_llenarModrificar = respuesta_llenarModrificar[0].nombre1_contacto;
				nombre2_llenarModrificar = respuesta_llenarModrificar[0].nombre2_contacto;
				apellido1_llenarModrificar = respuesta_llenarModrificar[0].apellido1_contacto;
				apellido2_llenarModrificar = respuesta_llenarModrificar[0].apellido2_contacto;
				telefono_llenarModrificar = respuesta_llenarModrificar[0].telefono_contacto;
				correo_llenarModrificar = respuesta_llenarModrificar[0].email_contacto;
				informacion_llenarModrificar = respuesta_llenarModrificar[0].comentario_contacto;

				((fotoRuta_llenarModrificar == null)? (fotoRuta_llenarModrificar = ""): (fotoRuta_llenarModrificar=fotoRuta_llenarModrificar));
				((foto_llenarModrificar == null)? (foto_llenarModrificar = ""): (foto_llenarModrificar=foto_llenarModrificar));
				((fotoExt_llenarModrificar == null)? (fotoExt_llenarModrificar = ""): (fotoExt_llenarModrificar=fotoExt_llenarModrificar));
				((usuario_llenarModrificar == null)? (usuario_llenarModrificar = ""): (usuario_llenarModrificar=usuario_llenarModrificar));
				((nombre1_llenarModrificar == null)? (nombre1_llenarModrificar = ""): (nombre1_llenarModrificar=nombre1_llenarModrificar));
				((nombre2_llenarModrificar == null)? (nombre2_llenarModrificar = ""): (nombre2_llenarModrificar=nombre2_llenarModrificar));
				((apellido1_llenarModrificar == null)? (apellido1_llenarModrificar = ""): (apellido1_llenarModrificar=apellido1_llenarModrificar));
				((apellido2_llenarModrificar == null)? (apellido2_llenarModrificar = ""): (apellido2_llenarModrificar=apellido2_llenarModrificar));
				((telefono_llenarModrificar == null)? (telefono_llenarModrificar = ""): (telefono_llenarModrificar=telefono_llenarModrificar));
				((correo_llenarModrificar == null)? (correo_llenarModrificar = ""): (correo_llenarModrificar=correo_llenarModrificar));
				((informacion_llenarModrificar == null)? (informacion_llenarModrificar = ""): (informacion_llenarModrificar=informacion_llenarModrificar));

				document.getElementById('inp_nombreMostrar_mod').value = usuario_llenarModrificar;
				document.getElementById('inp_nombre1_mod').value = nombre1_llenarModrificar;
				document.getElementById('inp_nombre2_mod').value = nombre2_llenarModrificar;
				document.getElementById('inp_apellido1_mod').value = apellido1_llenarModrificar;
				document.getElementById('inp_apellido2_mod').value = apellido2_llenarModrificar;
				document.getElementById('inp_telefono_mod').value = telefono_llenarModrificar;
				document.getElementById('inp_correo_mod').value = correo_llenarModrificar;
				document.getElementById('inp_informacion_mod').value = informacion_llenarModrificar;
			} else {
				tabla += 'Aun no hay registros';
			}
			div_llenarModrificar.innerHTML = tabla;
		} else {
			div_llenarModrificar.innerHTML = "El usuario no existe";
		}
	}
}

function iniciar_llenarModrificar(id) {
	var url = "assets/php/proc/contactos_llenarModificar.proc.php";

	cargaContenido_llenarModrificar(url, "POST", consultarDatos_llenarModrificar, id);
}


function escuchar_llenarModrificar(id) {
	iniciar_llenarModrificar(id);
}