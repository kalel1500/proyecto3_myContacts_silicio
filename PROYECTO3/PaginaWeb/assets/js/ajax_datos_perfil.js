var READY_STATE_UNINITIALIZED=0; 
var READY_STATE_LOADING=1; 
var READY_STATE_LOADED=2;
var READY_STATE_INTERACTIVE=3; 
var READY_STATE_COMPLETE=4;

var peticion_http;

function inicializa_xhr() {
	if(window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}
	else if(window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}
function cargaContenido(url, metodo, funcion) {
	peticion_http = inicializa_xhr();
	if(peticion_http) {
		peticion_http.onreadystatechange = funcion;
		peticion_http.open(metodo, url, true);
		peticion_http.send(null);
	}
}

/*function insertarDatosAlumno(){

	divResultado = document.getElementById('mensaje');
	nom=document.nuevo_alumno.nombre.value;
	ape=document.nuevo_alumno.apellido.value;
	curso=document.nuevo_alumno.curso.value;
	//que=document.nuevo_alumno.que.value;
	que="insertar";

	ajax=objetoAjax();

	ajax.open("POST", "registro.php",true);
	ajax.onreadystatechange=function() {
		if (ajax.readyState==4 && ajax.status==200) {
			respuesta = eval("("+ajax.responseText+")");
			if (respuesta.resultado == "ok") {
				//divResultado.innerHTML = "Alumno insertado con exito";
			} else {
				divResultado.innerHTML = "Ha habido un problema al insertar el alumno, intentalo de nuevo mas tarde";
			}
			LimpiarCampos();
			consultarDatosAlumno();
		}
	}
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("nombre="+nom+"&apellido="+ape+"&curso="+curso+"&que="+que);
}*/

function consultarDatos(){
	divResultado = document.getElementById('div-datos-perfil');
	
	if(peticion_http.readyState == READY_STATE_COMPLETE) {
		if(peticion_http.status == 200) {

			try {
				respuesta = eval("("+peticion_http.responseText+")");
				/*respuesta = JSON.encode(peticion_http.responseText);*/
				
			}
			catch(err) {
				respuesta = "vacio";
			}
		
			var tabla = "";
			if (respuesta != "vacio") {
				tabla += '' +
				'<div class="row">' +
					'<div class="col-sm-2">Foto</div>' +
					'<div class="col-sm-8">' + respuesta[0].nombreArchivo_usuario + '</div>' +
				'</div>' +
				'<div class="row">' +
					'<div class="col-sm-2">Usuario</div>' +
					'<div class="col-sm-8">' + respuesta[0].usuario_usuario + '</div>' +
				'</div>' +
				'<div class="row">' +
					'<div class="col-sm-2">Nombre 1</div>' +
					'<div class="col-sm-8">' + respuesta[0].nombre1_usuario + '</div>' +
				'</div>' +
				'<div class="row">' +
					'<div class="col-sm-2">Nombre 2</div>' +
					'<div class="col-sm-8">' + respuesta[0].nombre2_usuario + '</div>' +
				'</div>' +
				'<div class="row">' +
					'<div class="col-sm-2">Apellido 1</div>' +
					'<div class="col-sm-8">' + respuesta[0].apellido1_usuario + '</div>' +
				'</div>' +
				'<div class="row">' +
					'<div class="col-sm-2">Apellido 2</div>' +
					'<div class="col-sm-8">' + respuesta[0].apellido2_usuario + '</div>' +
				'</div>' +
				'<div class="row">' +
					'<div class="col-sm-2">Telefono</div>' +
					'<div class="col-sm-8">' + respuesta[0].telefono_usuario + '</div>' +
				'</div>' +
				'<div class="row">' +
					'<div class="col-sm-2">Correo</div>' +
					'<div class="col-sm-8">' + respuesta[0].email_usuario + '</div>' +
				'</div>' +
				'<div class="row">' +
					'<div class="col-sm-2">Mas informacion</div>' +
					'<div class="col-sm-8">' + respuesta[0].comentario_usuario + '</div>' +
				'</div>' +
				'<div class="row">' +
					'<div class="col-sm-2">Sexo</div>' +
					'<div class="col-sm-8">' + respuesta[0].sexo_usuario + '</div>' +
				'</div>';
			} else {
				tabla += 'Aun no hay registros';
			}
			divResultado.innerHTML = tabla;
		} else {
			divResultado.innerHTML = "El usuario no existe";
		}
	}
}

 
// function LimpiarCampos(){
// 	document.nuevo_alumno.nombre.value="";
// 	document.nuevo_alumno.apellido.value="";
// 	document.nuevo_alumno.curso.value="";
// 	document.nuevo_alumno.nombre.focus();

	
// }


function iniciar() {
	var url = "assets/php/proc/datos_perfil.proc.php";
	cargaContenido(url, "POST", consultarDatos);
}


window.addEventListener("load", iniciar);