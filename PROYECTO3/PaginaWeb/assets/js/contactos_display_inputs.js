
var radio_dejar_ins = document.getElementById('inp1_radioFoto_ins');
var radio_cambiar_ins = document.getElementById('inp2_radioFoto_ins');
var radio_quitar_ins = document.getElementById('inp3_radioFoto_ins');
var subir_foto_ins = document.getElementById('group_subirFoto_ins');

var radio_dejar_mod = document.getElementById('inp1_radioFoto_mod');
var radio_cambiar_mod = document.getElementById('inp2_radioFoto_mod');
var radio_quitar_mod = document.getElementById('inp3_radioFoto_mod');
var subir_foto_mod = document.getElementById('group_subirFoto_mod');


function mostrarOcultar_camposContactos() {
	
	if(radio_cambiar_ins.checked) {
		subir_foto_ins.style.display = 'initial';
	} else if(!radio_cambiar_ins.checked) {
		subir_foto_ins.style.display = 'none';
	}

	if(radio_cambiar_mod.checked) {
		subir_foto_mod.style.display = 'initial';
	} else if(!radio_cambiar_mod.checked) {
		subir_foto_mod.style.display = 'none';
	}
}

function escuchar_camposContactos() {
	radio_dejar_ins.addEventListener("click", mostrarOcultar_camposContactos);
	radio_cambiar_ins.addEventListener("click", mostrarOcultar_camposContactos);
	radio_quitar_ins.addEventListener("click", mostrarOcultar_camposContactos);

	radio_dejar_mod.addEventListener("click", mostrarOcultar_camposContactos);
	radio_cambiar_mod.addEventListener("click", mostrarOcultar_camposContactos);
	radio_quitar_mod.addEventListener("click", mostrarOcultar_camposContactos);
}


function iniciar_camposContactos() {
	var URLactual = window.location.search;
	
	if (URLactual.match(/.*contactos.*/)) {
		escuchar_camposContactos();
	}
}

window.addEventListener("load", iniciar_camposContactos);