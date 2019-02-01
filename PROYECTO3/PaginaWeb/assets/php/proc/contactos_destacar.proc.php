<?php
	session_start();

	include "conexion.proc.php";

	$que = $_REQUEST['que'];
	$id_contacto = $_REQUEST['id_contacto'];

	if ($que == "si") {
		$query = "UPDATE `tbl_contacto` SET `destacado_contacto` = 'si' WHERE `tbl_contacto`.`id_contacto` = $id_contacto";
	} elseif ($que == "no") {
		$query = "UPDATE `tbl_contacto` SET `destacado_contacto` = 'no' WHERE `tbl_contacto`.`id_contacto` = $id_contacto";
	}
	
	mysqli_query($link, $query);
?>