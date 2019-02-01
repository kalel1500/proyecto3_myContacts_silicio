<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<div>
		<p id="objeto">hola</p>
	</div>

	<script type="text/javascript">
		function some_function(id) {
			alert(id);
		}
		document.getElementById('objeto').addEventListener("click", function(){
		    some_function(8);
		});
	</script>
</body>
</html>