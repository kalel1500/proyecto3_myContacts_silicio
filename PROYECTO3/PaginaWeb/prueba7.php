<?php
	$idUsu = 1;

	$foto_b = "'"."d"."'";
	$usuario_b = "'"."d"."'";
	$nombre1_b = "'"."d"."'";
	$nombre2_b = "'"."d"."'";
	$apellido1_b = "'"."d"."'";
	$apellido2_b = "'"."d"."'";
	$telefono_b = "'"."d"."'";
	$correo_b = "'"."d"."'";
	$informacion_b = "'"."d"."'";

	$foto = ($foto_b=="''") ? ('NULL') : ($foto_b);
	$usuario = ($usuario_b=="''") ? 'NULL' : $usuario_b;
	$nombre1 = ($nombre1_b=="''") ? 'NULL' : $nombre1_b;
	$nombre2 = ($nombre2_b=="''") ? 'NULL' : $nombre2_b;
	$apellido1 = ($apellido1_b=="''") ? 'NULL' : $apellido1_b;
	$apellido2 = ($apellido2_b=="''") ? 'NULL' : $apellido2_b;
	$telefono = ($telefono_b=="''") ? 'NULL' : $telefono_b;
	$correo = ($correo_b=="''") ? 'NULL' : $correo_b;
	$informacion = ($informacion_b=="''") ? 'NULL' : $informacion_b;
	
	$query = "INSERT INTO `tbl_contacto` (`nombreArchivo_contacto`, `nombreMostrar_contacto`, `nombre1_contacto`, `nombre2_contacto`, `apellido1_contacto`, `apellido2_contacto`, `telefono_contacto`, `email_contacto`, `comentario_contacto`,`id_usuario`) VALUES ($foto, $usuario, $nombre1, $nombre2, $apellido1, $apellido2, $telefono, $correo, $informacion, $idUsu)";

	echo "$query";
?>