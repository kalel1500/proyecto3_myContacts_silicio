<?php
	session_start();

	include "conexion.proc.php";

	$busqueda = $_REQUEST['busqueda'];

	$query = "SELECT * FROM `tbl_contacto` WHERE `tbl_contacto`.`id_usuario` = $_SESSION[user_id] 
			AND (nombreMostrar_contacto LIKE '%$nick%'
			OR nombre1_contacto LIKE '%$busqueda%'
			OR nombre2_contacto LIKE '%$busqueda%'
			OR apellido1_contacto LIKE '%$busqueda%'
			OR apellido2_contacto LIKE '%$busqueda%'
			OR telefono_contacto LIKE '%$busqueda%'
			OR email_contacto LIKE '%$busqueda%')
		ORDER BY `tbl_contacto`.`destacado_contacto` ASC, `tbl_contacto`.`nombreMostrar_contacto` ASC";
	
	$sql=mysqli_query($link, $query);

	$array = array();
	if(mysqli_num_rows($sql)>0) {
		while($row = mysqli_fetch_assoc($sql)){
			$array[] = $row;
		}
		$respuesta = json_encode($array);
		echo $respuesta;
	}
?>