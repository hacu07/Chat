
/* ejecutarAjaxJson  *********************************************************** 
	* Ejecuta una consulta AJAX en el servidor. Usa el metodo POST 
	* devuelve los datos en formatoJSON 
	* Parametros: datos: arreglo de parametroscon los datos, 
	* llama la funcion leerDatos() para tratar la respuesta
	********************************************************************/
function ejecutarAjaxJson(datos, opc){
	$.ajax({                                      
		type: 'post',
		url:  'php/leerDatos.php',                  
		data: datos,                                       
		//dataType: 'json',                     

	    success : function(response) {
			leerDatos(response, opc);
	    },
	 
	    error : function(xhr, status) {
	    	console.log(' No se pudo realizar la conexión al servidor. ' + status)
	    },	 
	});	
}


function leerDatos(responseJSON, opc){
	var response = JSON.parse(responseJSON);
	switch(opc){
		case 1:
			if(response['mensaje'] == 'ok'){
				alert("mensaje enviado");
			}
		break;
	}
}

function mostrarInterfazLogin(){
	var login = '<div id="cont_trabajo">'+
			'<h1>CHAT ADSI</h1>'+
			'<h3>Usuario</h3>'+
			'<input id="inUsuario" class="btn btn-block" type="text" placeholder="Usuario"></input>'+
			'<h3>Contraseña</h3>'+
			'<input id="inPassword" class="btn btn-block" type="password" placeholder="Usuario"></input>'+
			'<button id="btnIngresar" class="btn btn-primary" onclick="mostrarInterfazChat()">Ingresar</button>'+
			'<button id="btnRegistrarme" class="btn btn-primary" onclick="mostrarInterfazRegistro()">Registrarme</button>'+
			'</div>';
	$('#cont_trabajo').html(login);

}

function mostrarInterfazRegistro(){
	var registro = '<h1>Registro</h1>'+
			'<h3>Usuario</h3>'+
			'<input id="regUsuario" class="btn btn-block" type="text" placeholder="Usuario"></input>'+
			'<h3>Correo Electronico</h3>'+
			'<input id="regCorreo" class="btn btn-block" type="text" placeholder="Correo Electronico"></input>'+
			'<button id="btnAtras" class="btn btn-primary " onclick="mostrarInterfazLogin()">Atras</button>'+
			'<button id="btnRegistrar" class="btn btn-primary" onclick="registrarUsuario()">Aceptar</button>';
	$('#cont_trabajo').html(registro);
}

function mostrarInterfazChat(){
	var chat = '<div id="cont_principal_chat" class="container"><div id="cont_mensajes"></div><div id="cont_sur"><input id="mensaje" type="text" placeholder="Escriba aqui su mensaje" class="btn"></input><button id="btnEnviar" class="btn btn-primary" onclick="agregarMensaje()">Enviar</button></div></div>';
	$('body').html(chat);

}

function agregarMensaje(){
	var mensaje = '<div id="lineaMensaje"><h4>Usuario</h4><h4>Prueba mensaje</h4></div>';
	$('#cont_mensajes').append(mensaje);
}


function registrarUsuario(){
	var usuario = $('#regUsuario').val();
	var correo = $('#regCorreo').val();
	var parametros = {"opc" : 1, "usuario" : usuario, "correo" : correo};
	ejecutarAjaxJson(parametros,1);
}