var check_pass = document.getElementById('inp_reset_pass');
var pass = document.getElementById('group_new_pas');
var pass_conf = document.getElementById('group_conf_new_pas');

var radio_dejar_foto = document.getElementById('inp1_cambiar_foto');
var radio_cambiar_foto = document.getElementById('inp2_cambiar_foto');
var radio_quitar_foto = document.getElementById('inp3_cambiar_foto');
var subir_foto = document.getElementById('group_subir-foto');

function mostrarOcultar_camposPerfil() {
	if(check_pass.checked) {
		pass.style.display = 'initial';
		pass_conf.style.display = 'initial';
	} else if(!check_pass.checked) {
		pass.style.display = 'none';
		pass_conf.style.display = 'none';
	}

	if(radio_cambiar_foto.checked) {
		subir_foto.style.display = 'initial';
	} else if(!radio_cambiar_foto.checked) {
		subir_foto.style.display = 'none';
	}
}

function iniciar_camposPerfil() {
	check_pass.addEventListener("click", mostrarOcultar_camposPerfil);
	radio_dejar_foto.addEventListener("click", mostrarOcultar_camposPerfil);
	radio_cambiar_foto.addEventListener("click", mostrarOcultar_camposPerfil);
	radio_quitar_foto.addEventListener("click", mostrarOcultar_camposPerfil);
}


function mostrar_camposPerfil() {
	var URLactual = window.location.search;
	
	if (URLactual.match(/.*perfil.*/)) {
		iniciar_camposPerfil();
	}
}

window.addEventListener("load", mostrar_camposPerfil);