<nav class="navbar navbar-inverse navbar-fixed-top">
	<div class="container-fluid">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span> 
			</button>
			<a class="navbar-brand" href="index.php">MyContacts</a>
		</div>
		<div class="collapse navbar-collapse" id="myNavbar">
			<ul class="nav navbar-nav">
				<li><a href="index.php">Inicio</a></li>
				<li><a href="index.php?mostrar=mapa">Mapa</a></li>
				<li><a href="index.php?mostrar=localizar">Ir a</a></li>
			</ul>
			<ul class="nav navbar-nav navbar-right">
				<li><a href="index.php?mostrar=perfil&idUsu=<?php echo $idUsuario; ?>"><span class="glyphicon glyphicon-user"></span> <?php echo $nombreUsuario; ?></a></li>
				<li><a href="index.php?mostrar=logout"><span class="glyphicon glyphicon-log-out"></span> Cerrar sesion</a></li>
			</ul>
		</div>
	</div>
</nav>