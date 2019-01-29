<!DOCTYPE html>
<html lang="es">
	<head>
		<?php include "assets/php/proc/head.proc.php"; ?>
		<?php include "assets/php/proc/conexion.proc.php"; ?>
		<?php include "assets/php/proc/datosUsuario.proc.php"; ?>
		<?php include "assets/php/proc/titleHead.proc.php"; ?>
	</head>

	<?php if (!isset($_SESSION['user_id'])) {
	?><body><?php
	} else {
	?><body class="margin"><?php
	}?>
		<?php
			if (!isset($_SESSION['user_id'])) {
				?><div class="container"><?php
					if (!isset($_REQUEST['mostrar'])) {
						include "assets/php/login.php";
					} else {
						$mostrar = $_REQUEST['mostrar'];
						switch ($mostrar) {
							case 'login':
								include "assets/php/login.php";
								break;
							case 'signin':
								include "assets/php/signin.php";
								break;
							default:
								echo "Esta pagina no existe";
								break;
						}
					}
				?></div><?php
			} else {
				?>
					<header>
						<div class="jumbotron">
							<div class="container">
							<?php include "assets/php/proc/tituloCabezera.proc.php"; ?>
						</div>
						</div>
					</header>

					<?php include "assets/php/proc/navegador.proc.php"; ?>

					<section>
						<div class="container">
							<?php
								if (!isset($_REQUEST['mostrar'])) {
									include "assets/php/contactos.php";
								} else {
									$mostrar = $_REQUEST['mostrar'];
									switch ($mostrar) {
										case 'contactos':
											include "assets/php/contactos.php";
											break;
										case 'mapa':
											include "assets/php/mapa.php";
											break;
										case 'localizar':
											include "assets/php/localizar.php";
											break;
										case 'perfil':
											include "assets/php/perfil.php";
											break;
										case 'logout':
											include "assets/php/proc/logout.proc.php";
											break;
										default:
											echo "Esta pagina no existe";
											break;
									}
								}
							?>
						</div>
					</section>

					<footer class="container-fluid text-center">
						<p>Adrian Canals</p>
					</footer>
				<?php
			}
		?>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
		<!-- <script src="assets/js/validarFormularios.js" type="text/javascript"></script> -->
		<script src="assets/js/inputs_pass.js" type="text/javascript"></script>
		<script src="assets/js/ajax_datos_perfil.js" type="text/javascript"></script>
	</body>
</html>