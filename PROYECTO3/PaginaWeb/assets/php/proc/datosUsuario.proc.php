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
			$_SESSION['usuario_usuario'] = $results['usuario_usuario'];
			$_SESSION['habilitado_usuario'] = $results['habilitado_usuario'];
			$_SESSION['nombre_grupoUsuario'] = $results['nombre_grupoUsuario'];
			$_SESSION['id_grupoUsuario'] = $results['id_grupoUsuario'];

			$idUsuario = $_SESSION['user_id'];
			$nombreUsuario = $_SESSION['usuario_usuario'];
			$habilitadoUsuario = $_SESSION['habilitado_usuario'];
			$grupoUsuario = $_SESSION['nombre_grupoUsuario'];
			$idGrupo = $_SESSION['id_grupoUsuario'];
		}
	}
?>