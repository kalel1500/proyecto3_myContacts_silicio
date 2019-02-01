<div class="container well">

	<div class="container">

		<div class="row">
			<div class="col-sm-9">
				<button type="button" class="btn btn-success btn-lg" data-toggle="modal" data-target="#crearContacto_modal">Crear contacto</button>
			</div>
		</div>
		<br>
		<br>

		<!-- Modal ver detalles contacto -->
		<div class="modal fade" id="mostrarContacto_modal" role="dialog">
			<div class="modal-dialog modal-lg">
		
				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<div id="div-mostrar-nombre-contacto"></div><h2 class="modal-title">Por falta de tiempo</h2>
					</div>
					<div class="modal-body well">
						<h4 class="modal-title">Datos del contacto</h4>
						<div id="div-mostrar-datos-contacto"></div>
						

					</div>

					<div class="modal-footer">
						
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					</div>
				</div>

			</div>

		</div>









		<!-- Modal crear contacto -->
		<div class="modal fade" id="crearContacto_modal" role="dialog">
			<div class="modal-dialog modal-lg">
		
				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Crea un contacto</h4>
					</div>
					<div class="modal-body well">


						<form class="form-horizontal col-sm-7 center-block" name="form_ins_contacto" id="form-ins-contacto">


							<div class="form-group">
								<label class="col-sm-4 control-label" for="inp_radioFoto_ins">Foto</label>
								<div class="col-sm-8">
									<label class="radio-inline">
										<input type="radio" name="inp_radioFoto_ins" id="inp1_radioFoto_ins" value="dejar" checked> Dejar
									</label>
									<label class="radio-inline">
										<input type="radio" name="inp_radioFoto_ins" id="inp2_radioFoto_ins" value="cambiar"> Cambiar
									</label>
									<label class="radio-inline">
										<input type="radio" name="inp_radioFoto_ins" id="inp3_radioFoto_ins" value="quitar"> Quitar
									</label>
								</div>
							</div>

							<div class="form-group" style="display: none;" id="group_subirFoto_ins">
								<label class="col-sm-4 control-label" for="inp_subirFoto">Cambiar</label>
								<div class="col-sm-8">
									<input class="form-control" type="file" id="inp_subirFoto_mod" name="inp_subirFoto_ins" disabled value="default_user">
								</div>
							</div>
							
							<div class="form-group">
								<label class="col-sm-4 control-label" for="inp_nombreMostrar_mod">Mostrar como</label>
								<div class="col-sm-8">
									<input class="form-control" type="text" id="inp_nombreMostrar_ins" name="inp_nombreMostrar_ins" placeholder="Nombre que se mostrara*">
								</div>
							</div>

							<div class="alert alert-danger" role="alert" style="display: none;" id="div_error_mostrar"></div>
							
							<div class="form-group">
								<label class="col-sm-4 control-label" for="inp_nombre1_mod">Nombre 1</label>
								<div class="col-sm-8">
									<input class="form-control" type="text" id="inp_nombre1_ins" name="inp_nombre1_ins" placeholder="Nombre 1">
								</div>
							</div>

							<div class="form-group">
								<label class="col-sm-4 control-label" for="inp_nombre2_mod">Nombre 2</label>
								<div class="col-sm-8">
									<input class="form-control" type="text" id="inp_nombre2_ins" name="inp_nombre2_ins" placeholder="Nombre 2">
								</div>
							</div>
							
							<div class="form-group">
								<label class="col-sm-4 control-label" for="inp_apellido1_mod">Apellido 1</label>
								<div class="col-sm-8">
									<input class="form-control" type="text" id="inp_apellido1_ins" name="inp_apellido1_ins" placeholder="Apellido 1">
								</div>
							</div>

							<div class="form-group">
								<label class="col-sm-4 control-label" for="inp_apellido2_mod">Apellido 2</label>
								<div class="col-sm-8">
									<input class="form-control" type="text" id="inp_apellido2_ins" name="inp_apellido2_ins" placeholder="Apellido 2">
								</div>
							</div>
							
							<div class="form-group">
								<label class="col-sm-4 control-label" for="inp_telefono_mod">Teléfono</label>
								<div class="input-group col-sm-8 pading-input-group">
									<span class="input-group-addon"><span class="glyphicon glyphicon-phone"></span></span>
									<input class="form-control" type="text" id="inp_telefono_ins" name="inp_telefono_ins" placeholder="xxxxxxxxx*">
								</div>
							</div>

							<div class="alert alert-danger" role="alert" style="display: none;" id="div_error_tel"></div>
							
							<div class="form-group">
								<label class="col-sm-4 control-label" for="inp_correo_mod">Correo electrónico</label>
								<div class="input-group col-sm-8 pading-input-group">
									<span class="input-group-addon">@</span>
									<input class="form-control" type="text" id="inp_correo_ins" name="inp_correo_ins" placeholder="Email ej.: usu01@mail.com">
								</div>
							</div>
							
							<div class="form-group">
								<label class="col-sm-4 control-label" for="inp_informacion_mod">Mas información</label>
								<div class="col-sm-8">
									<textarea class="form-control" rows="4" id="inp_informacion_ins" name="inp_informacion_ins" placeholder="Notas"></textarea>
								</div>
							</div>
							
							<br /><br />

							<div class="form-group">
								<label class="col-sm-4 control-label" for="formGroup"></label>
								<div class="col-sm-8">
									<button type="submit" class="btn btn-success btn-lg" id="btn_guardar_ins"><span class="glyphicon glyphicon-floppy-saved"></span> Guardar</button>
									<button type="button" class="btn btn-danger btn-lg" data-dismiss="modal" id="btn_cancelar_ins"><span class="glyphicon glyphicon-remove-circle"></span> Cancelar</button>
								</div>
							</div>

						</form>

					</div>

					<div class="modal-footer">
						
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					</div>
				</div>

			</div>

		</div>













		<!-- Modal editar contacto -->
		<div class="modal fade" id="editarContacto_modal" role="dialog">
			<div class="modal-dialog modal-lg">
		
				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Modificar Contacto</h4>
					</div>
					<div class="modal-body well">


						<form class="form-horizontal col-sm-7 center-block" name="form_mod_contacto" id="form_mod_contacto">


							<div class="form-group">
								<label class="col-sm-4 control-label" for="inp_radioFoto_mod">Foto</label>
								<div class="col-sm-8">
									<label class="radio-inline">
										<input type="radio" name="inp_radioFoto_mod" id="inp1_radioFoto_mod" value="dejar" checked> Dejar
									</label>
									<label class="radio-inline">
										<input type="radio" name="inp_radioFoto_mod" id="inp2_radioFoto_mod" value="cambiar"> Cambiar
									</label>
									<label class="radio-inline">
										<input type="radio" name="inp_radioFoto_mod" id="inp3_radioFoto_mod" value="quitar"> Quitar
									</label>
								</div>
							</div>

							<div class="form-group" style="display: none;" id="group_subirFoto_mod">
								<label class="col-sm-4 control-label" for="inp_subirFoto">Cambiar</label>
								<div class="col-sm-8">
									<input class="form-control" type="file" id="inp_subirFoto_mod" name="inp_subirFoto_mod" disabled value="default_user">
								</div>
							</div>
							
							<div class="form-group">
								<label class="col-sm-4 control-label" for="inp_nombreMostrar_mod">Mostrar como</label>
								<div class="col-sm-8">
									<input class="form-control" type="text" id="inp_nombreMostrar_mod" name="inp_nombreMostrar_mod">
								</div>
							</div>

							<div class="alert alert-danger" role="alert" style="display: none;" id="div_error_mos"></div>
							
							<div class="form-group">
								<label class="col-sm-4 control-label" for="inp_nombre1_mod">Nombre 1</label>
								<div class="col-sm-8">
									<input class="form-control" type="text" id="inp_nombre1_mod" name="inp_nombre1_mod">
								</div>
							</div>

							<div class="form-group">
								<label class="col-sm-4 control-label" for="inp_nombre2_mod">Nombre 2</label>
								<div class="col-sm-8">
									<input class="form-control" type="text" id="inp_nombre2_mod" name="inp_nombre2_mod">
								</div>
							</div>
							
							<div class="form-group">
								<label class="col-sm-4 control-label" for="inp_apellido1_mod">Apellido 1</label>
								<div class="col-sm-8">
									<input class="form-control" type="text" id="inp_apellido1_mod" name="inp_apellido1_mod">
								</div>
							</div>

							<div class="form-group">
								<label class="col-sm-4 control-label" for="inp_apellido2_mod">Apellido 2</label>
								<div class="col-sm-8">
									<input class="form-control" type="text" id="inp_apellido2_mod" name="inp_apellido2_mod">
								</div>
							</div>
							
							<div class="form-group">
								<label class="col-sm-4 control-label" for="inp_telefono_mod">Teléfono</label>
								<div class="input-group col-sm-8 pading-input-group">
									<span class="input-group-addon"><span class="glyphicon glyphicon-phone"></span></span>
									<input class="form-control" type="text" id="inp_telefono_mod" name="inp_telefono_mod">
								</div>
							</div>

							<div class="alert alert-danger" role="alert" style="display: none;" id="div_error_tel"></div>
							
							<div class="form-group">
								<label class="col-sm-4 control-label" for="inp_correo_mod">Correo electrónico</label>
								<div class="input-group col-sm-8 pading-input-group">
									<span class="input-group-addon">@</span>
									<input class="form-control" type="text" id="inp_correo_mod" name="inp_correo_mod">
								</div>
							</div>
							
							<div class="form-group">
								<label class="col-sm-4 control-label" for="inp_informacion_mod">Mas información</label>
								<div class="col-sm-8">
									<textarea class="form-control" rows="4" id="inp_informacion_mod" name="inp_informacion_mod"></textarea>
								</div>
							</div>
							
							<br /><br />

							<div class="form-group">
								<label class="col-sm-4 control-label" for="formGroup"></label>
								<div class="col-sm-8">
									<button type="submit" class="btn btn-success btn-lg" id="btn_guardar_mod"><span class="glyphicon glyphicon-floppy-saved"></span> Guardar</button>
									<button type="button" class="btn btn-danger btn-lg" data-dismiss="modal" id="btn_cancelar_mod"><span class="glyphicon glyphicon-remove-circle"></span> Cancelar</button>
								</div>
							</div>

						</form>

					</div>

					<div class="modal-footer">
						
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					</div>
				</div>

			</div>

		</div>






		<div class="modal fade" id="confirmarBorrarContacto_modal" role="dialog">
			<div class="modal-dialog">
		
				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">¿Estas seguro?</h4>
					</div>
					<div class="modal-body well">
						<div class="col-sm-12 text-center">Si eliminas el contacto no lo podrás recuperar.</div>

						<br/>
						
						<div class="col-sm-12 text-center">
							<button type="submit" class="btn btn-success btn-lg" id="bnt-baja-contacto"><span class="glyphicon glyphicon-trash"></span> Confirmar</button>
							<button type="button" class="btn btn-danger btn-lg" data-dismiss="modal" id="bnt-cancelar-baja-contacto"><span class="glyphicon glyphicon-remove-circle"></span> Cancelar</button>
						</div>
					</div>

					<div class="modal-footer">
						
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					</div>
				</div>

			</div>

		</div>

	</div>

	<div class="container col-sm-12 center-block" id="div-datos-contactos"></div>

</div>



	