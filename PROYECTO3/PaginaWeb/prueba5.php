
<?php
	if (isset($_REQUEST['mostrar'])) {
		$mostrar = $_REQUEST['mostrar'];
		if ($mostrar == "hola") {
			echo "hola";
		} elseif ($mostrar == "adios") {
			echo "adios";
		}
	}
		
?>

<nav>
	<ul>
		<li><a href="prueba5.php">index</a></li>
		<li><a href="prueba5.php?mostrar=hola">hola</a></li>
		<li><a href="prueba5.php?mostrar=adios">adios</a></li>
	</ul>
</nav>

<nav>
	<ul>
		<li><button onclick="hola();">hola</button></li>
		<li><button onclick="adios()">adios</button></li>
	</ul>
</nav>


<script type="text/javascript">
	function hola() {
		//alert('hola');
		//location.href ="prueba5.php?mostrar=hola";
		history.pushState(null, "", "prueba5.php?mostrar=hola");
	}
	function adios() {
		//alert('adios');
		//location.href ="prueba5.php?mostrar=adios";
		history.pushState(null, "", "prueba5.php?mostrar=adios");
	}
</script>
