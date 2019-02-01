<?php
	
	$rer = "";
	$foto_b = "'".$rer."'";
	$usuario_b = "";

	$nombre_b = "nombre";
	$apellido_b = "";
	

	$foto = ($foto_b=="''") ? ('NULL') : ($foto_b);
	$usuario = ($usuario_b=="") ? ('NULL') : ($foto_b);

	$nombre = ($nombre_b=="") ? 'NULL' : $nombre_b;
	$apellido = ($apellido_b=="") ? 'NULL' : $apellido_b;

	echo "<div>";
		echo $foto;
	echo "</div>";
	
	echo "<div>";
		echo $usuario;
	echo "</div>";


	echo "<br/>-----------------<br/>";
	




	echo "<div>";
		echo $nombre;
	echo "</div>";
	
	echo "<div>";
		echo $apellido;
	echo "</div>";
?>

<style type="text/css">
	div {
		background-color: red;
		height: 20px;
    margin: 10px;
	}
</style>