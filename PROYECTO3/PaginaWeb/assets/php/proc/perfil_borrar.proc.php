<?php
	session_start();

	include "conexion.proc.php";

	
	/* Recorremos todos los contactos del usuario y borramos la/las direcciones que tengan */
	$query_4 = "SELECT `id_contacto` FROM `tbl_contacto` WHERE `id_usuario` = $_SESSION[user_id]";
	$sql_4=mysqli_query($link, $query_4);
	if(mysqli_num_rows($sql_4)>0) {
		while($row_4 = mysqli_fetch_assoc($sql_4)) {
			$id_contacto=$row_4['id_contacto'];
			$query_5 = "DELETE FROM `tbl_ubicacion` WHERE  `tbl_ubicacion`.`id_contacto` = $id_contacto";
			mysqli_query($link, $query_5);
		}
	}

	/* Eliminamos a los contactos del usuario */
	$query_8 = "DELETE FROM `tbl_contacto` WHERE `tbl_contacto`.`id_usuario` = $_SESSION[user_id]";
	mysqli_query($link, $query_8);
	
	/* Eliminamos al usuario */
	$query_9 = "DELETE FROM `tbl_usuario` WHERE `tbl_usuario`.`id_usuario` = $_SESSION[user_id]";
	mysqli_query($link, $query_9);


	session_unset();
	session_destroy();
?>