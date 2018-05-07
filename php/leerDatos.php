<?php 

$opcion = $_POST["opc"];


switch ($opcion) {
	//REGISTRO DE UN NUEVO USUARIO AL CHAT -----------------------------------------------------
	case 1:
		//procedimiento que verifique que el usuario y correo no estan registrados
		//despues de verificar registra en la BD

		//Envia el correo al usuario 
		enviarCorreo( $_POST["usuario"], $_POST["correo"]);
	break;
}

function enviarCorreo($usuario,$correo){
	$clave = rand(1111,9999);
	$mensaje = "Bienvenido ". $usuario ." al CHAT! \n Tu clave de ingreso es: ". $clave;
	$para      =  $correo;
	$titulo    = 'Clave App Chat';
	$cabeceras = 'From: adsi.nocturno2017@gmail.com' . "\r\n" .
    				'Reply-To: haroldcupitra@gmail.com' . "\r\n" .
    				'X-Mailer: PHP/' . phpversion();

	mail($para, $titulo, $mensaje, $cabeceras);

	$respuesta = array('mensaje' => 'ok');
	echo json_encode($respuesta);
}



/****** LEER REGISTRO   ******************************************************
* ejecuta la consulta y devuelve datos en formato JSON
*****************************************************************************/
function leerRegistro($sql){
	include("conexionDB.php");   			//Conecta a la BD $conexion
	$result = $conexion->query($sql);

	$rows = array();
	if ($result != NULL && $result->num_rows > 0) {
    
		while(($r =  mysqli_fetch_assoc($result))) {
		  	$rows[] = $r;	  	
		}
		mysqli_free_result($result);
	}
	mysqli_close($conexion);
	echo json_encode($rows);
}


/*****************************************************************************
INSERTA, ACTUALIZA O ELIMINA REGISTROS DE LA BASE DE DATOS
*****************************************************************************/

function actualizarRegistro($sql){

		include("conexionDB.php");

		if ($conexion->query($sql) === TRUE) {	
			$respuesta = array('ok' => 'actualizo');

		}else  {
	
			$respuesta = array('ok' => 'error' );
		}

		echo json_encode($respuesta);

}




?>