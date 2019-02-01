<?php
	session_start();

	include "conexion.proc.php";

	$foto_b = "'".$_REQUEST['nombreArchivo_usuario']."'";
	$usuario_b = "'".$_REQUEST['usuario_usuario']."'";
	$nombre1_b = "'".$_REQUEST['nombre1_usuario']."'";
	$nombre2_b = "'".$_REQUEST['nombre2_usuario']."'";
	$apellido1_b = "'".$_REQUEST['apellido1_usuario']."'";
	$apellido2_b = "'".$_REQUEST['apellido2_usuario']."'";
	$telefono_b = "'".$_REQUEST['telefono_usuario']."'";
	$correo_b = "'".$_REQUEST['email_usuario']."'";
	$informacion_b = "'".$_REQUEST['comentario_usuario']."'";
	$sexo_b = "'".$_REQUEST['sexo_usuario']."'";
	$existePass_b = "'".$_REQUEST['existePass_usuario']."'";

	$foto = ($foto_b=="''") ? ('NULL') : ($foto_b);
	$usuario = ($usuario_b=="''") ? 'NULL' : $usuario_b;
	$nombre1 = ($nombre1_b=="''") ? 'NULL' : $nombre1_b;
	$nombre2 = ($nombre2_b=="''") ? 'NULL' : $nombre2_b;
	$apellido1 = ($apellido1_b=="''") ? 'NULL' : $apellido1_b;
	$apellido2 = ($apellido2_b=="''") ? 'NULL' : $apellido2_b;
	$telefono = ($telefono_b=="''") ? 'NULL' : $telefono_b;
	$correo = ($correo_b=="''") ? 'NULL' : $correo_b;
	$informacion = ($informacion_b=="''") ? 'NULL' : $informacion_b;
	$sexo = ($sexo_b=="''") ? 'NULL' : $sexo_b;
	$existePass = ($existePass_b=="''") ? 'NULL' : $existePass_b;
	
	if ($existePass == "'si'") {
		$password_request = $_REQUEST['password_usuario'];
		$password_b = password_hash($password_request, PASSWORD_BCRYPT);
		$password = "'".$password_b."'";
		$query = "UPDATE `tbl_usuario` SET `nombreArchivo_usuario` = $foto, `email_usuario` = $correo, `usuario_usuario` = $usuario, `nombre1_usuario` = $nombre1, `nombre2_usuario` = $nombre2, `apellido1_usuario` = $apellido1, `apellido2_usuario` = $apellido2, `telefono_usuario` = $telefono, `sexo_usuario` = $sexo, `comentario_usuario` = $informacion, `password_usuario` = $password WHERE `tbl_usuario`.`id_usuario` = $_SESSION[user_id]";
	} else {
		$query = "UPDATE `tbl_usuario` SET `nombreArchivo_usuario` = $foto, `email_usuario` = $correo, `usuario_usuario` = $usuario, `nombre1_usuario` = $nombre1, `nombre2_usuario` = $nombre2, `apellido1_usuario` = $apellido1, `apellido2_usuario` = $apellido2, `telefono_usuario` = $telefono, `sexo_usuario` = $sexo, `comentario_usuario` = $informacion WHERE `tbl_usuario`.`id_usuario` = $_SESSION[user_id]";
	}

	

	
	mysqli_query($link, $query) or die('{"resultado":"nok"}');

	echo '{"resultado":"ok"}';
?>