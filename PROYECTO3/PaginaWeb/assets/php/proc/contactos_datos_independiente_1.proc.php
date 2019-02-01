<?php
	session_start();

	include "conexion.proc.php";

	$id_contacto = $_REQUEST['id_contacto'];

	$query = "SELECT * FROM `tbl_contacto` WHERE `tbl_contacto`.`id_contacto` = $id_contacto";
	
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