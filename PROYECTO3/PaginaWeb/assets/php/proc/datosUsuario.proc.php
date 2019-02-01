<?php	
	session_start();
	if (isset($_SESSION['user_id'])) {
		$records = $conn->prepare('SELECT * FROM `tbl_usuario` INNER JOIN `tbl_grupoUsuario` ON `tbl_usuario`.`id_grupoUsuario` = `tbl_grupoUsuario`.`id_grupoUsuario` WHERE `id_usuario` = :id');
		$records->bindParam(':id', $_SESSION['user_id']);
		$records->execute();
		$results = $records->fetch(PDO::FETCH_ASSOC);
		$usuario = null;
		if (count($results) > 0) {
			$usuario = $results;
			$_SESSION['nombreArchivo_usuario'] = $results['nombreArchivo_usuario'];
			$_SESSION['email_usuario'] = $results['email_usuario'];
			$_SESSION['usuario_usuario'] = $results['usuario_usuario'];
			$_SESSION['nombre1_usuario'] = $results['nombre1_usuario'];
			$_SESSION['nombre2_usuario'] = $results['nombre2_usuario'];
			$_SESSION['apellido1_usuario'] = $results['apellido1_usuario'];
			$_SESSION['apellido2_usuario'] = $results['apellido2_usuario'];
			$_SESSION['telefono_usuario'] = $results['telefono_usuario'];
			$_SESSION['sexo_usuario'] = $results['sexo_usuario'];
			$_SESSION['comentario_usuario'] = $results['comentario_usuario'];
			$_SESSION['habilitado_usuario'] = $results['habilitado_usuario'];
			$_SESSION['nombre_grupoUsuario'] = $results['nombre_grupoUsuario'];
			$_SESSION['id_grupoUsuario'] = $results['id_grupoUsuario'];
		}
	}
?>