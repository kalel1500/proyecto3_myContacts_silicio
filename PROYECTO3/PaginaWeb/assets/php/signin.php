<?php
	/*session_start();*/
	$message = '';
	if (isset($_POST['email'])) {
		$email = $_POST['email'];
		$password = $_POST['password'];
		if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$message = 'El correo ES valido';
			//SELECT nombre, email FROM tbl_usuarios WHERE nombre=usu2 or email=usu1@mail.com
			if (!empty($_POST['email']) && !empty($_POST['password']) && !empty($_POST['confirm_password'])) {
				if ($_POST['password'] == $_POST['confirm_password']) {
					$records = $conn->prepare('SELECT usuario_usuario, email_usuario FROM tbl_usuario WHERE usuario_usuario=:usuario OR email_usuario=:email');
					$records->bindParam(':usuario', $_POST['usuario']);
					$records->bindParam(':email', $_POST['email']);
					$records->execute();
					$results = $records->fetch(PDO::FETCH_ASSOC);
					if (count($results['usuario_usuario']) > 0) {
						$message = "El usuario o el correo ya exsisten.";
					} else {
						$sql = "INSERT INTO tbl_usuario (email_usuario, usuario_usuario, password_usuario, nombre1_usuario, apellido1_usuario, habilitado_usuario, id_grupoUsuario) VALUES (:email, :usuario, :password, :nombre, :apellido, 'si', 1)";
						$stmt = $conn->prepare($sql);
						$stmt->bindParam(':email', $_POST['email']);
						$stmt->bindParam(':usuario', $_POST['usuario']);
						$stmt->bindParam(':nombre', $_POST['nombre']);
						$stmt->bindParam(':apellido', $_POST['apellido']);
						$password = password_hash($_POST['password'], PASSWORD_BCRYPT);
						$stmt->bindParam(':password', $password);
						if ($stmt->execute()) {
							$message = "El usuario se ha creado correctamente";
							header("Location: index.php");
						} else {
							$message = "Lo sentimos, ha debido de haber algun error al crear la cuenta.";
						}
					}
				} else {
					$message = "Las contraseñas no coinciden";
				}
			} else {
				$message = "Rellena los campos obligatorios";
			}
		} else {
			$message = "El correo NO es valido";
		}
	}
?>

<div class="signup-form">
	<form action="index.php?mostrar=signin" method="post">
		<h2>Registrate</h2>
		<p class="hint-text">Crea tu cuenta. Es gratis y solo tardas un minuto.</p>
		<?php if (!empty($message)) { ?>
			<div class="alert alert-danger">
				<?php echo $message; ?>
			</div>
		<?php } ?>
		<div class="form-group">
			<div class="row">
				<div class="col-xs-6"><input type="text" class="form-control" name="nombre" placeholder="Nombre" required="required"></div>
				<div class="col-xs-6"><input type="text" class="form-control" name="apellido" placeholder="Apellido" required="required"></div>
			</div>
		</div>
		<div class="form-group">
			<input type="text" class="form-control" name="usuario" placeholder="Usuario para login" required="required">
		</div>
		<div class="form-group">
			<input type="email" class="form-control" name="email" placeholder="Email" required="required">
		</div>
		<div class="form-group">
			<input type="password" class="form-control" name="password" placeholder="Contraseña" required="required">
		</div>
		<div class="form-group">
			<input type="password" class="form-control" name="confirm_password" placeholder="Contraseña" required="required">
		</div>
		<div class="form-group">
			<label class="checkbox-inline"><input type="checkbox" required="required"> Acepto los <a href="#">Terminos de Uso</a> &amp; <a href="#">la Politica de Privacidad</a></label>
		</div>
		<div class="form-group">
			<button type="submit" class="btn btn-success btn-lg btn-block">Registrar Ahora</button>
		</div>
	</form>
	<div class="text-center">Ya tienes una cuenta? <a href="index.php?mostrar=login">Inicia Sesion</a></div>
</div>