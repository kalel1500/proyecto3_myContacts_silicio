var check = document.getElementById('inp_reset_pass');

var pass = document.getElementById('group_new_pas');
var pass_conf = document.getElementById('group_conf_new_pas');

function mostrarOcultar() {
	if(check.checked) {
		pass.style.display = 'initial';
		pass_conf.style.display = 'initial';
	} else if(!check.checked) {
		pass.style.display = 'none';
		pass_conf.style.display = 'none';
	}
}

function iniciar() {
	check.addEventListener("click", mostrarOcultar);
}

window.addEventListener("load", iniciar);