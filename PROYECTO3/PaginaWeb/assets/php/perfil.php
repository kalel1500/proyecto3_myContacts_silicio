<div class="container">
	<div class="row text-center">
			<div class="col-xs-12"><h2>Tus datos</h2></div>
	</div>
	<div class="container" id="div-datos-perfil"></div>
</div>

<div class="container well">
	<div class="row text-center">
			<div class="col-xs-12"><h2>Tu Perfil de Usuario</h2></div>
	</div>

	<br /><br />

	<form class="form-horizontal col-sm-7 center-block">

		<div class="form-group">
			<label class="col-sm-3 control-label" for="inp_subirFoto">Foto</label>
			<div class="col-sm-9">
				<input class="form-control" type="file" id="inp_subirFoto" name="inp_subirFoto">
			</div>
		</div>
		
		<div class="form-group">
			<label class="col-sm-3 control-label" for="inp_usuario">Usuario</label>
			<div class="col-sm-9">
				<input class="form-control" type="text" id="inp_usuario" name="inp_usuario" placeholder="Para login">
				<span class="help-block">Este nombre sera mostrado a los usuarios, ocultando el verdadero nombre.</span>
			</div>
		</div>
		
		<div class="form-group">
			<label class="col-sm-3 control-label" for="inp_nombre1">Nombre 1</label>
			<div class="col-sm-9">
				<input class="form-control" type="text" id="inp_nombre1" name="inp_nombre1" placeholder="Nombre real">
			</div>
		</div>

		<div class="form-group">
			<label class="col-sm-3 control-label" for="inp_nombre2">Nombre 2</label>
			<div class="col-sm-9">
				<input class="form-control" type="text" id="inp_nombre2" name="inp_nombre2" placeholder="Nombre real 2">
			</div>
		</div>
		
		<div class="form-group">
			<label class="col-sm-3 control-label" for="inp_apellido1">Apellido 1</label>
			<div class="col-sm-9">
				<input class="form-control" type="text" id="inp_apellido1" name="inp_apellido1" placeholder="Apellido">
			</div>
		</div>

		<div class="form-group">
			<label class="col-sm-3 control-label" for="inp_apellido2">Apellido 2</label>
			<div class="col-sm-9">
				<input class="form-control" type="text" id="inp_apellido2" name="inp_apellido2" placeholder="Apellido">
			</div>
		</div>
		
		<div class="form-group">
			<label class="col-sm-3 control-label" for="inp_telefono">Teléfono</label>
			<div class="input-group col-sm-8 pading-input-group">
				<span class="input-group-addon"><span class="glyphicon glyphicon-phone"></span></span>
				<input class="form-control" type="text" id="inp_telefono" name="inp_telefono" placeholder="xxxxxxxxx">
			</div>
		</div>
		
		<div class="form-group">
			<label class="col-sm-3 control-label" for="inp_correo">Correo electrónico</label>
			<div class="input-group col-sm-8 pading-input-group">
				<span class="input-group-addon">@</span>
				<input class="form-control" type="text" id="inp_correo" name="inp_correo" placeholder="Ej: usuario@mail.com">
			</div>
		</div>
		
		<div class="form-group">
			<label class="col-sm-3 control-label" for="inp_informacion">Mas información</label>
			<div class="col-sm-9">
				<textarea class="form-control" rows="4" id="inp_informacion" name="inp_informacion" placeholder="Cuentanos algo mas sobre ti..."></textarea>
			</div>
		</div>
		
		<div class="form-group">
			<label class="col-sm-3 control-label" for="inp_sexo">Sexo</label>
			<div class="col-sm-9">
				<label class="radio-inline">
					<input type="radio" name="inp_sexo" id="inp_sexo" value="Hombre" checked> Hombre
				</label>
				<label class="radio-inline">
					<input type="radio" name="inp_sexo" id="inp_sexo" value="Mujer"> Mujer
				</label>
				<label class="radio-inline">
					<input type="radio" name="inp_sexo" id="inp_sexo" value="Otros"> Otros
				</label>
			</div>
		</div>

		<div class="form-group">
			<label class="col-sm-3 control-label" for="inp_reset_pass">Cambiar contraseña</label>
			<div class="col-sm-9">
				<label class="checkbox-inline">
					<input type="checkbox" id="inp_reset_pass" name="inp_reset_pass" value="si"> Cambiar contraseña
				</label>
			</div>
		</div>

		<div class="form-group" style="display: none;" id="group_new_pas">
			<label class="col-sm-3 control-label" for="inp_new_pas">Contraseña nueva</label>
			<div class="col-sm-9">
				<input class="form-control" type="password" id="inp_new_pas" name="inp_new_pas" placeholder="Nueva contraseña">
			</div>
		</div>

		<div class="form-group" style="display: none;" id="group_conf_new_pas">
			<label class="col-sm-3 control-label" for="inp_conf_new_pas">Confirmar contraseña nueva</label>
			<div class="col-sm-9">
				<input class="form-control" type="password" id="inp_conf_new_pas" name="inp_conf_new_pas" placeholder="Confirmar nueva contraseña">
			</div>
		</div>
		
		<br />

		<div class="form-group">
			<label class="col-sm-3 control-label" for="formGroup"></label>
			<div class="col-sm-9">
				<button type="submit" class="btn btn-success btn-lg"><span class="glyphicon glyphicon-floppy-saved"></span> Guardar</button>
				<button type="button" class="btn btn-danger btn-lg"><span class="glyphicon glyphicon-remove-circle"></span> Cancelar</button>
			</div>
		</div>

	</form>
</div>