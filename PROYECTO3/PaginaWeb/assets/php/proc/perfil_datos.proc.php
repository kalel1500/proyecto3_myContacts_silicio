<?php
	session_start();

	include "conexion.proc.php";

	$query = "SELECT * FROM tbl_usuario WHERE id_usuario = $_SESSION[user_id]";
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