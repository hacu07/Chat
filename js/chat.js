
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
			'<button id="btnIngresar" class="btn btn-primary">Ingresar</button>'+
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
			'<button id="btnRegistrar" class="btn btn-primary ">Aceptar</button>';
	$('#cont_trabajo').html(registro);
}