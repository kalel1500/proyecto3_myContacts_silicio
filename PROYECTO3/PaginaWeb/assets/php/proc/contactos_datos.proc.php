<?php
	session_start();

	include "conexion.proc.php";

	$query = "SELECT * FROM `tbl_contacto` WHERE `tbl_contacto`.`id_usuario` = $_SESSION[user_id] ORDER BY `tbl_contacto`.`destacado_contacto` ASC, `tbl_contacto`.`nombreMostrar_contacto` ASC";
	
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