// alerta no
function no() {
	alert("no estas autorizado para cambiar estos datos");
}

// buscar si cedula existe
function cargar () {
	/*var datos1 = document.getElementById("dato1") ;
	var datos2 = document.getElementById("dato2") ;
	var datos3 = document.getElementById("dato3") ;
	var datos4 = document.getElementById("dato4") ;
	var cedula = prompt("Ingrese numero de cedula a buscar") ;

	while (cedula == "" || isNaN (cedula) ) {
		cedula = prompt ("Ingrese solo numeros");	
	}*/

	/*switch (cedula) {
		case "22048180":
			var nombres = [ "Nestor Jose"];
			datos1.value = nombres;
			datos1.style.color = "green";
			var apellidos = [ "Duarte Salgado" ];
			datos2.value = apellidos;
			datos2.style.color = "green";
			var edad = [ "22ños" ];
			datos3.value = edad;
			datos3.style.color = "green"; 
			var fecha = [ "07/DICIEMBRE/1992" ]; 
			datos4.value = fecha;
			datos4.style.color = "green";
			break ;

		case "5451242":
			var nombres = ["Rita Diaz"];
			datos1.value = nombres;
			datos1.style.color = "green";
			var apellidos = [ "Salgado" ];
			datos2.value = apellidos;
			datos2.style.color = "green";
			var edad = [ "59ños" ];
			datos3.value = edad;
			datos3.style.color = "orange";
			var fecha = [ "21/MAYO/1955" ]; 
			datos4.value = fecha;
			datos4.style.color = "green";
			break ;

		case "627863":
			var nombres = [ "Hernando Asdrubal"] ;
			datos1.value = nombres;
			datos1.style.color = "green" ;
			var apellidos = [ "Duarte Medina" ] ;
			datos2.value = apellidos;
			datos2.style.color = "green" ;
			var edad = [ "69ños" ] ;
			datos3.value = edad;
			datos3.style.color = "silver" ; 
			var fecha = [ "20/MAYO/1945" ]  ;
			datos4.value = fecha;
			datos4.style.color = "green" ;
			break ;
		 
		default :
			alert("cedula no registrada, intente de nuevo");
	}*/

	// comenzamos por poner todos los datos en un arreglo de objetos (JSON)
	// de esta manera quedan comprimidos y el codigo se puede extender a cualquier cantidad
	var cedulas = [
		{
			id: 22048180,
			nombre: "Nestor Jose",
			apellido: "Duarte Salgado",
			edad: 22,
			fecha: "07/DICIEMBRE/1992"
		},
		{
			id: 5451242,
			nombre: "Rita Diaz",
			apellido: "Salgado",
			edad: 59,
			fecha: "21/MAYO/1955"
		},
		{
			id: 627863,
			nombre: "Hernando Asdrubal",
			apellido: "Duarte Medina",
			edad: 69,
			fecha: "20/MAYO/1945"
		}
	];

	// Leemos la cedula desde el text-input
	var cedula = document.getElementById('cedula').value;

	// creamos una expresion regular para probar si el texto solo tiene numeros
	var regex = new RegExp("^[0-9]*$");
	if ( ! regex.test(cedula))
		alert('Solo numeros validos para una cedula');
	else {
		// buscamos cada elemento de la estructura de datos
		var i;

		// inicializamos encontrado en falso por si no se consigue la cedula
		var encontrado = false;

		for (i = 0; i < cedulas.length; i++)
		{
			if (cedulas[i].id == cedula)
			{
				// si se consiguio, llenamos los campos con las variables
				var dato1 = document.getElementById('dato1');
				var dato2 = document.getElementById('dato2');
				var dato3 = document.getElementById('dato3');
				var dato4 = document.getElementById('dato4');

				dato1.value = cedulas[i].nombre;
				dato2.value = cedulas[i].apellido;
				dato3.value = cedulas[i].edad;
				dato4.value = cedulas[i].fecha;

				encontrado = true;

				// rompemos el ciclo debido a que encontramos la cedula
				break;
			}
		}
		// si llegamos aca y encontrado == false entonces no encontramos una cedula
		if ( ! encontrado)
			alert('No encontramos su Cedula en el sistema.');
	}
}
