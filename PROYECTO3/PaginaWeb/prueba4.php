<?php
	
	$var1 = "var1";
	$var2 = "var2";
	$var3 = "var3";
	$var4 = "var4";
	$var5 = "var5";
	$var6 = "var6";
	$var7 = "var7";
	$var8 = "var8";
	$var9 = "var9";
	$var10 = "var10";
	$var11 = "var11";

	$foto_b = "'".$var1."'";
	$usuario_b = "'".$var1."'";
	$nombre1_b = "'".$var1."'";
	$nombre2_b = "'".$var1."'";
	$apellido1_b = "'".$var1."'";
	$apellido2_b = "'".$var1."'";
	$telefono_b = "'".$var1."'";
	$correo_b = "'".$var1."'";
	$informacion_b = "'".$var1."'";
	$sexo_b = "'".$var1."'";

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
	
	
		
		$password_request = "qaz";
		$password_b = password_hash($password_request, PASSWORD_BCRYPT);
		$password = "'".$password_b."'";
		$query = "UPDATE `tbl_usuario` SET `nombreArchivo_usuario` = $foto, `email_usuario` = $correo, `usuario_usuario` = $usuario, `nombre1_usuario` = $nombre1, `nombre2_usuario` = $nombre2, `apellido1_usuario` = $apellido1, `apellido2_usuario` = $apellido2, `telefono_usuario` = $telefono, `sexo_usuario` = $sexo, `comentario_usuario` = $informacion, `password_usuario` = $password WHERE `tbl_usuario`.`id_usuario` = 1";

		echo $query;




	
?>


