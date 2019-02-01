<?php
	/*session_start();*/
	if (isset($_POST['email']) && isset($_POST['password'])) {
		$records = $conn->prepare('SELECT * FROM tbl_usuario WHERE email_usuario = :email OR usuario_usuario = :email');
		$records->bindParam(':email', $_POST['email']);
		$records->execute();
		$results = $records->fetch(PDO::FETCH_ASSOC);
		$message = '';
		if (count($results) > 0 && password_verify($_POST['password'], $results['password_usuario'])) {
			if ($results['habilitado_usuario'] == 'si') {
				$_SESSION['user_id'] = $results['id_usuario'];
				header("Location: index.php?mostrar=contactos");
			} else {
				$message = 'El usuario esta deshabilitado. Consulte con el administrador';
			}
		} else {
			$message = 'El usuario y/o la contraseña son incorrectos';
		}
	}

	
?>

<div class="login-form">
	<form action="index.php" method="post">
		<h2 class="text-center">Inicia Sesión</h2>   
		<div class="form-group">
			<div class="input-group">
				<span class="input-group-addon"><i class="fa fa-user"></i></span>
				<input type="text" name="email" class="form-control" placeholder="Usuario/Email" required="required">
			</div>
		</div>
		<div class="form-group">
			<div class="input-group">
				<span class="input-group-addon"><i class="fa fa-lock"></i></span>
				<input type="password" name="password" class="form-control" placeholder="Contraseña" required="required">
			</div>
		</div>
		<div class="form-group">
			<button type="submit" class="btn btn-primary btn-block">Entrar</button>
		</div>
		<?php if (!empty($message)) { ?>
			<div class="alert alert-danger">
				<?php echo $message; ?>
			</div>
		<?php } ?>
	</form>
	<p class="text-center small">¡No tienes una cuenta aún! <a href="index.php?mostrar=signin">Regístrate aquí</a>.</p>
</div>