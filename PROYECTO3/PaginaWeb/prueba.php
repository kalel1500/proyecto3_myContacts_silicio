<?php
	include "asets/php/conexion.proc.php";
	$sql = "SELECT `titulo_multimedia` FROM `tbl_multimedia`";

	$consulta=mysqli_query($link, $sql);
?>
<!DOCTYPE html>
<html>
	<head>
		<style type="text/css">
			input::-webkit-calendar-picker-indicator {
				display: none;
			}
			input.oculto {
				display: none;
			}
		</style>


	</head>
	<body>
		<form name="formulario" action="javascript:void(0)" method="get">
			<input class="oculto" name="lista" list="browsers" name="browser" list="5">
				<datalist id="browsers" lang="5">
					<?php
					
						if(mysqli_num_rows($consulta)>0) {
							while($array = mysqli_fetch_array($consulta)) {
								$nombre = $array['titulo_multimedia'];
								echo "<option value='$nombre'>";
								echo "</option>";
							}
						} else {
							echo "No hay recursos que recuperar.";
						}
					
					?>
				</datalist>
				<input name="buscar" type="button" value="buscar" onclick="foco();">
				<input name="enviar" type="submit">
				</input>
			</input>
		</form>
		<p>
			<strong>
				Note:
			</strong>
			The datalist tag is not supported in Internet Explorer 9 and earlier versions, or in Safari.
		</p>
		<script type="text/javascript">
			function foco() {
				document.formulario.lista.style.display = "initial";
				document.formulario.lista.focus();
			}
			function ocultar() {
				alert('h');
				document.formulario.lista.style.display = "none";
			}
			function escuchar() {
				inp = document.formulario.lista;
				inp.addEventListener("blur", ocultar()); 
			}
			window.onload = escuchar();
			
		</script>
	</body>
</html>
