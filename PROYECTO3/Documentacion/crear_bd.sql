/*AVISO----*/
/*Para entrar en la base de datos la contraseña es 1234 (PARA TODOS LOS USUARIOS)*/


/*----------CREAR BASE DE DATOS------------------------------------------------------------------------------------------------------------*/
/*----------CREAR BASE DE DATOS------------------------------------------------------------------------------------------------------------*/
/*----------CREAR BASE DE DATOS------------------------------------------------------------------------------------------------------------*/
/*----------CREAR BASE DE DATOS------------------------------------------------------------------------------------------------------------*/
/*----------CREAR BASE DE DATOS------------------------------------------------------------------------------------------------------------*/
DROP DATABASE IF EXISTS bd_proyecto_3;
CREATE DATABASE IF NOT EXISTS bd_proyecto_3;



/*-----------CREAR TABLAS-----------------------------------------------------------------------------------------------------------------*/
/*-----------CREAR TABLAS-----------------------------------------------------------------------------------------------------------------*/
/*-----------CREAR TABLAS-----------------------------------------------------------------------------------------------------------------*/
/*-----------CREAR TABLAS-----------------------------------------------------------------------------------------------------------------*/
/*-----------CREAR TABLAS-----------------------------------------------------------------------------------------------------------------*/
USE `bd_proyecto_3`;

CREATE TABLE IF NOT EXISTS `tbl_usuario` (
`id_usuario`				int(11) COLLATE utf8_unicode_ci 						NOT NULL AUTO_INCREMENT,
`rutaArchivo_usuario`		varchar(100) COLLATE utf8_unicode_ci					DEFAULT 'assets/imagenes/usuarios/' COMMENT 'Ruta foto perfil',
`nombreArchivo_usuario`		varchar(100) COLLATE utf8_unicode_ci					DEFAULT 'default_user' 				COMMENT 'Nombre foto perfil',
`extensionArchivos_usuario`	varchar(10) COLLATE utf8_unicode_ci						DEFAULT '.png' 						COMMENT 'Extension foto perfil',
`email_usuario`				varchar(100)					COLLATE utf8_unicode_ci	DEFAULT NULL,
`usuario_usuario`			varchar(100)					COLLATE utf8_unicode_ci	DEFAULT NULL,
`password_usuario`			varchar(255)					COLLATE utf8_unicode_ci	DEFAULT NULL,
`nombre1_usuario`			varchar(100)					COLLATE utf8_unicode_ci	DEFAULT NULL,
`nombre2_usuario`			varchar(100)					COLLATE utf8_unicode_ci	DEFAULT NULL,
`apellido1_usuario`			varchar(100)					COLLATE utf8_unicode_ci	DEFAULT NULL,
`apellido2_usuario`			varchar(100)					COLLATE utf8_unicode_ci	DEFAULT NULL,
`telefono_usuario`			varchar(100)					COLLATE utf8_unicode_ci	DEFAULT NULL,
`sexo_usuario`				ENUM('Hombre', 'Mujer', 'Otros')COLLATE utf8_unicode_ci	DEFAULT NULL,
`comentario_usuario`		text COLLATE utf8_unicode_ci 							DEFAULT NULL,
`habilitado_usuario`		ENUM('si', 'no') COLLATE utf8_unicode_ci 				DEFAULT 'si',
`ultimaConexion_usuario`	DATETIME COLLATE utf8_unicode_ci						DEFAULT CURRENT_TIMESTAMP,
`id_grupoUsuario`			int(11) COLLATE utf8_unicode_ci							DEFAULT NULL,
PRIMARY KEY (`id_usuario`),
UNIQUE KEY `email_usuario` (`email_usuario`),
UNIQUE KEY `usuario_usuario` (`usuario_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `tbl_grupoUsuario` (
`id_grupoUsuario` 		int(11) COLLATE utf8_unicode_ci 		NOT NULL AUTO_INCREMENT,
`nombre_grupoUsuario` 	varchar(100) COLLATE utf8_unicode_ci 	DEFAULT NULL,
PRIMARY KEY (`id_grupoUsuario`),
UNIQUE KEY `nombre_grupoUsuario` (`nombre_grupoUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `tbl_contacto` (
`id_contacto`				int(11) COLLATE utf8_unicode_ci 								NOT NULL AUTO_INCREMENT,
`rutaArchivo_contacto`		varchar(100) COLLATE utf8_unicode_ci							DEFAULT 'assets/imagenes/contactos/'COMMENT 'Ruta foto perfil',
`nombreArchivo_contacto`	varchar(100) COLLATE utf8_unicode_ci							DEFAULT 'default_user' 				COMMENT 'Nombre foto perfil',
`extensionArchivos_contacto`varchar(10) COLLATE utf8_unicode_ci								DEFAULT '.png' 						COMMENT 'Extension foto perfil',
`nombreMostrar_contacto`	varchar(100) COLLATE utf8_unicode_ci 							DEFAULT NULL,
`nombre1_contacto`			varchar(100) COLLATE utf8_unicode_ci 							DEFAULT NULL,
`nombre2_contacto`			varchar(100) COLLATE utf8_unicode_ci 							DEFAULT NULL,
`apellido1_contacto`		varchar(100) COLLATE utf8_unicode_ci 							DEFAULT NULL,
`apellido2_contacto`		varchar(10) COLLATE utf8_unicode_ci 							DEFAULT NULL,
`telefono_contacto`			varchar(100) COLLATE utf8_unicode_ci 							DEFAULT NULL,
`email_contacto`			varchar(100) COLLATE utf8_unicode_ci 							DEFAULT NULL,
`comentario_contacto`		text COLLATE utf8_unicode_ci 									DEFAULT NULL,
`destacado_contacto`		ENUM('si', 'no') COLLATE utf8_unicode_ci 						DEFAULT 'no',
`estado_contacto`			ENUM('normal', 'papelera', 'eliminado') COLLATE utf8_unicode_ci DEFAULT 'normal',
`id_usuario`				int(11) COLLATE utf8_unicode_ci									DEFAULT NULL,
PRIMARY KEY (`id_contacto`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `tbl_etiquetaContacto` (
`id_etiquetaContacto` 		int(11) COLLATE utf8_unicode_ci 		NOT NULL AUTO_INCREMENT,
`nombre_etiquetaContacto` 	varchar(100) COLLATE utf8_unicode_ci 	DEFAULT NULL,
`id_usuario`				int(11) COLLATE utf8_unicode_ci			DEFAULT NULL,
PRIMARY KEY (`id_etiquetaContacto`),
UNIQUE KEY `nombreEtiquetaContacto_usuario` (`nombre_etiquetaContacto`,`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `tbl_contacto_etiquetaContacto` (
`id_contacto_etiquetaContacto` 	int(11) COLLATE utf8_unicode_ci 		NOT NULL AUTO_INCREMENT,
`id_contacto` 					int(11) COLLATE utf8_unicode_ci 		DEFAULT NULL,
`id_etiquetaContacto` 			int(11) COLLATE utf8_unicode_ci 		DEFAULT NULL,
PRIMARY KEY (`id_contacto_etiquetaContacto`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `tbl_ubicacion` (
`id_ubicacion`			int(11) COLLATE utf8_unicode_ci 		NOT NULL AUTO_INCREMENT,
`etiqueta_ubicacion`		varchar(100) COLLATE utf8_unicode_ci 	DEFAULT NULL,
`calle_ubicacion`		varchar(100) COLLATE utf8_unicode_ci 	DEFAULT NULL,
`numero_ubicacion`		varchar(100) COLLATE utf8_unicode_ci 	DEFAULT NULL,
`comentario_ubicacion`	varchar(100) COLLATE utf8_unicode_ci 	DEFAULT NULL,
`codigoPostal_ubicacion`varchar(100) COLLATE utf8_unicode_ci 	DEFAULT NULL,
`poblacion_ubicacion`	varchar(100) COLLATE utf8_unicode_ci 	DEFAULT NULL,
`provincia_ubicacion`	varchar(100) COLLATE utf8_unicode_ci 	DEFAULT NULL,
`pais_ubicacion`		varchar(100) COLLATE utf8_unicode_ci 	DEFAULT NULL,
`latitud_ubicacion`		varchar(100) COLLATE utf8_unicode_ci 	DEFAULT NULL,
`longitud_ubicacion`	varchar(100) COLLATE utf8_unicode_ci 	DEFAULT NULL,
`id_contacto`			int(11) COLLATE utf8_unicode_ci 		DEFAULT NULL,
PRIMARY KEY (`id_ubicacion`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


/*-----------ESTABLECER FK---------------------------------------------------------------------------------------------------------------------------*/
/*-----------ESTABLECER FK---------------------------------------------------------------------------------------------------------------------------*/
/*-----------ESTABLECER FK---------------------------------------------------------------------------------------------------------------------------*/
/*-----------ESTABLECER FK---------------------------------------------------------------------------------------------------------------------------*/
/*-----------ESTABLECER FK---------------------------------------------------------------------------------------------------------------------------*/
ALTER TABLE `tbl_usuario` ADD CONSTRAINT `FK_usuario_grupoUsuario` FOREIGN KEY (`id_grupoUsuario`)
REFERENCES `tbl_grupoUsuario` (`id_grupoUsuario`);

ALTER TABLE `tbl_contacto` ADD CONSTRAINT `FK_contacto_usuario` FOREIGN KEY (`id_usuario`)
REFERENCES `tbl_usuario` (`id_usuario`);

ALTER TABLE `tbl_contacto_etiquetaContacto` ADD CONSTRAINT `FK_contacto-etiquetaContacto_contacto` FOREIGN KEY (`id_contacto`)
REFERENCES `tbl_contacto` (`id_contacto`);

ALTER TABLE `tbl_contacto_etiquetaContacto` ADD CONSTRAINT `FK_contacto-etiquetaContacto_etiquetaContacto` FOREIGN KEY (`id_etiquetaContacto`)
REFERENCES `tbl_etiquetaContacto` (`id_etiquetaContacto`);

ALTER TABLE `tbl_ubicacion` ADD CONSTRAINT `FK_ubicacion_contacto` FOREIGN KEY (`id_contacto`)
REFERENCES `tbl_contacto` (`id_contacto`);

ALTER TABLE `tbl_etiquetaContacto` ADD CONSTRAINT `FK_etiquetaContacto_usuario` FOREIGN KEY (`id_usuario`)
REFERENCES `tbl_usuario` (`id_usuario`);




/*------------INSERTAR DATOS----------------------------------------------------------------------------------------------------------*/
/*------------INSERTAR DATOS----------------------------------------------------------------------------------------------------------*/
/*------------INSERTAR DATOS----------------------------------------------------------------------------------------------------------*/
/*------------INSERTAR DATOS----------------------------------------------------------------------------------------------------------*/
/*------------INSERTAR DATOS----------------------------------------------------------------------------------------------------------*/

INSERT INTO `tbl_grupoUsuario` (`nombre_grupoUsuario`) VALUES
('usuario'),
('administrador'),
('superAdministrador');

INSERT INTO `tbl_usuario` (`rutaArchivo_usuario`,`nombreArchivo_usuario`,`extensionArchivos_usuario`,`email_usuario`, `usuario_usuario`, `password_usuario`, `nombre1_usuario`, `nombre2_usuario`, `apellido1_usuario`, `apellido2_usuario`, `telefono_usuario`, `sexo_usuario`, `comentario_usuario`, `habilitado_usuario`, `id_grupoUsuario`) VALUES
('assets/imagenes/usuarios/', 'default_user', '.png', 'superUsuAdmin1@mail.com','superUsuarioAdmin1',	NULL, 'Super',	NULL, 'Admin',		NULL, '123456789', 'Hombre', NULL, 'si', (SELECT `id_grupoUsuario` FROM `tbl_grupoUsuario` WHERE `nombre_grupoUsuario` = 'superAdministrador')),
('assets/imagenes/usuarios/', 'default_user', '.png', 'usuAdmin1@mail.com',		'usuarioAdmin1',		NULL, 'Ana',	NULL, 'Fernandez',	NULL, '123456789', 'Mujer', NULL, 'si', (SELECT `id_grupoUsuario` FROM `tbl_grupoUsuario` WHERE `nombre_grupoUsuario` = 'administrador')),
('assets/imagenes/usuarios/', 'default_user', '.png', 'usuAdmin2@mail.com',		'usuarioAdmin2',		NULL, 'Carlos',	NULL, 'Diaz',		NULL, '123456789', 'Hombre', NULL, 'si', (SELECT `id_grupoUsuario` FROM `tbl_grupoUsuario` WHERE `nombre_grupoUsuario` = 'administrador')),
('assets/imagenes/usuarios/', 'default_user', '.png', 'usu01@mail.com',			'usuario01',			NULL, 'Juan',	NULL, 'Gonzalez',	NULL, '123456789', 'Hombre', NULL, 'si', (SELECT `id_grupoUsuario` FROM `tbl_grupoUsuario` WHERE `nombre_grupoUsuario` = 'usuario')),
('assets/imagenes/usuarios/', 'default_user', '.png', 'usu02@mail.com',			'usuario02',			NULL, 'Pepe',	NULL, 'Gomez',		NULL, '123456789', 'Hombre', NULL, 'si', (SELECT `id_grupoUsuario` FROM `tbl_grupoUsuario` WHERE `nombre_grupoUsuario` = 'usuario')),
('assets/imagenes/usuarios/', 'default_user', '.png', 'usu03@mail.com',			'usuario03',			NULL, 'Lola',	NULL, 'Garcia',		NULL, '123456789', 'Mujer', NULL, 'si', (SELECT `id_grupoUsuario` FROM `tbl_grupoUsuario` WHERE `nombre_grupoUsuario` = 'usuario')),
('assets/imagenes/usuarios/', 'default_user', '.png', 'lolo@la.com',			'lelo',					NULL, 'lilo',	NULL, 'lalo',		NULL, '123456789', 'Otros', NULL, 'si', (SELECT `id_grupoUsuario` FROM `tbl_grupoUsuario` WHERE `nombre_grupoUsuario` = 'usuario'));
UPDATE `tbl_usuario` SET `password_usuario` = '$2y$10$mH6cW.UpaVVk4YUGWI.NNeOhsorQr.WjGZlXi5DhJXz9uY9sUh5gC';

INSERT INTO `tbl_contacto` (`rutaArchivo_contacto`,`nombreArchivo_contacto`,`extensionArchivos_contacto`,`nombreMostrar_contacto`,`nombre1_contacto`,`nombre2_contacto`,`apellido1_contacto`,`apellido2_contacto`,`telefono_contacto`,`email_contacto`,`comentario_contacto`,`destacado_contacto`,`estado_contacto`,`id_usuario`) VALUES
('assets/imagenes/contactos/', 'default_user', '.png', 'c-Juan',	'Juan',		NULL, 'Gongora',	NULL,'111111111','j.gongora@gmail.com',		NULL, 'no', 'normal',	(SELECT `id_usuario` FROM `tbl_usuario` WHERE `usuario_usuario` = 'usuario01')	),
('assets/imagenes/contactos/', 'default_user', '.png', 'c-Sara',	'Sara',		NULL, 'Bernal',		NULL,'222222222','s.bernal@gmail.com',		NULL, 'no', 'normal',	(SELECT `id_usuario` FROM `tbl_usuario` WHERE `usuario_usuario` = 'usuario01')	),
('assets/imagenes/contactos/', 'default_user', '.png', 'c-Pol',		'Pol',		NULL, 'Cozar',		NULL,'333333333','p.cozar@gmail.com',		NULL, 'no', 'normal',	(SELECT `id_usuario` FROM `tbl_usuario` WHERE `usuario_usuario` = 'usuario01')	),
('assets/imagenes/contactos/', 'default_user', '.png', 't-David',	'David',	NULL, 'Arador',		NULL,'444444444','d.arador@gmail.com',		NULL, 'no', 'normal',	(SELECT `id_usuario` FROM `tbl_usuario` WHERE `usuario_usuario` = 'usuario01')	),
('assets/imagenes/contactos/', 'default_user', '.png', 't-German',	'German',	NULL, 'Garmendia',	NULL,'555555555','g.garmendia@gmail.com',	NULL, 'no', 'normal',	(SELECT `id_usuario` FROM `tbl_usuario` WHERE `usuario_usuario` = 'usuario02')	),
('assets/imagenes/contactos/', 'default_user', '.png', 't-Dani',	'Daniel',	NULL, 'Rep',		NULL,'666666666','d.rep@gmail.com',			NULL, 'no', 'normal',	(SELECT `id_usuario` FROM `tbl_usuario` WHERE `usuario_usuario` = 'usuario02')	),
('assets/imagenes/contactos/', 'default_user', '.png', 'p-Alex',	'Alejandro',NULL, 'Luthor',		NULL,'777777777','a.luthor@gmail.com',		NULL, 'no', 'normal',	(SELECT `id_usuario` FROM `tbl_usuario` WHERE `usuario_usuario` = 'usuario02')	),
('assets/imagenes/contactos/', 'default_user', '.png', 'p-Lucas',	'Lucas',	NULL, 'Luthor',		NULL,'888888888','l.luthor@gmail.com',		NULL, 'no', 'normal',	(SELECT `id_usuario` FROM `tbl_usuario` WHERE `usuario_usuario` = 'usuario02')	),
('assets/imagenes/contactos/', 'default_user', '.png', 'p-Cris',	'Cristina',	NULL, 'Fernandez',	NULL,'999999999','c.fernandez@gmail.com',	NULL, 'no', 'normal',	(SELECT `id_usuario` FROM `tbl_usuario` WHERE `usuario_usuario` = 'usuario02')	);

INSERT INTO `tbl_ubicacion` (`etiqueta_ubicacion`, `calle_ubicacion`, `numero_ubicacion`, `comentario_ubicacion`, `codigoPostal_ubicacion`, `poblacion_ubicacion`, `provincia_ubicacion`, `pais_ubicacion`,`latitud_ubicacion`,`longitud_ubicacion`,`id_contacto`) VALUES
('casa', 'Avinguda de Catalunya',		'111',	NULL,	'43763', 'La Nou de Gaià',			'Tarragona', 'España', '41.183038', '1.373399',	(SELECT `id_contacto` FROM `tbl_contacto` WHERE `nombreMostrar_contacto` = 't-Dani')),
('casa', 'Carrer d\'Eduard Toldrà',		'17',	NULL,	'08950', 'Esplugues de Llobregat',	'Barcelona', 'España', '41.3773', '2.0881',		(SELECT `id_contacto` FROM `tbl_contacto` WHERE `nombreMostrar_contacto` = 'c-Sara')),
('trabajo', 'Carrer de Clara Campoamor','2',	NULL,	'08950', 'Esplugues de Llobregat',	'Barcelona', 'España', '41.3773', '2.0881',		(SELECT `id_contacto` FROM `tbl_contacto` WHERE `nombreMostrar_contacto` = 'c-Sara'));
