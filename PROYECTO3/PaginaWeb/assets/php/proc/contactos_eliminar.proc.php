<?php
	session_start();

	include "conexion.proc.php";

	$id_contacto = $_REQUEST['id_contacto'];

	$query = "DELETE FROM `tbl_contacto` WHERE `tbl_contacto`.`id_contacto` = $id_contacto";
	
	
	mysqli_query($link, $query);
?>