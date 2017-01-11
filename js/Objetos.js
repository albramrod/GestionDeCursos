//---------- Objeto Persona ----------
function Persona(sDni,sNombre,sApellido,dFechaNacimiento, iTelefono,sDireccion){
	
	this.sDni=sDni;
	this.sNombre=sNombre;
	this.sApellido=sApellido;
	this.dFechaNacimiento=dFechaNacimiento;
	this.iTelefono=iTelefono;
	this.sDireccion=sDireccion;

}

//---------- Métodos Objeto Persona ----------
Persona.prototype.toHTMLRow=function(){
	
	return    "<td>" + this.sDni + "</td>"
			+ "<td>" + this.sNombre + "</td>"
	  		+ "<td>" + this.sApellido + "</td>"
	   		+ "<td>" + this.dFechaNacimiento + "</td>"
	   		+ "<td>" + this.iTelefono + "</td>"
	   		+ "<td>" + this.sDireccion + "</td>";

}
//********** Fin Objeto Persona **********

//---------- Objeto Profesor ----------
function Profesor (sDni,sNombre,sApellido,dFechaNacimiento, iTelefono,sDireccion){
	Persona.call(this,sDni,sNombre,sApellido,dFechaNacimiento, iTelefono,sDireccion);
	this.aAsignatura = [ ];//array vacio que contine a objetos asignatura
}

Profesor.prototype = Object.create(Profesor.prototype);

Profesor.prototype.toHTMLRow=function(){

	var tdDatosProfesor=    "<td>" + this.sDni + "</td>"
					 	  + "<td>" + this.sNombre + "</td>"
	  					  + "<td>" + this.sApellido + "</td>"
	   				 	  + "<td>" + this.dFechaNacimiento + "</td>"
	   				 	  + "<td>" + this.iTelefono + "</td>"
	   				 	  + "<td>" + this.sDireccion + "</td>";
	
	

	//recorremos las asignaturas del profesor y almacenarlas en td
	var tdDatosAsgnaturas = "<td>";
	for (var i = 0; i < this.aAsignatura.length; i++) {
	  		 	
	    tdDatosAsgnaturas+= this.aAsignatura[i].sNombreAsignatura+"\n";
	}  		
	tdDatosAsgnaturas += "<td/>"; 

	var tdProfesor= tdDatosProfesor+tdDatosAsgnaturas;


	return tdProfesor;
}
//********** Fin Objeto Profesor **********

//---------- Objeto Asignatura ----------
function Asignatura (iIdAsignatura,sNombreAsignatura){
	this.iIdAsignatura = iIdAsignatura;
	this.sNombreAsignatura= sNombreAsignatura;
}
//---------- Métodos Objeto Asignatura ----------

Asignatura.prototype.toHTMLRow=function(){

	return    "<td>" + this.sNombreAsignatura + "</td>"; 

}
//********** Fin Objeto Asignatura **********


//---------- Objeto Alumno ----------
function Alumno (sDni,sNombre,sApellido,dFechaNacimiento, iTelefono,sDireccion){
	Persona.call(this,sDni,sNombre,sApellido,dFechaNacimiento, iTelefono,sDireccion);
	this.aNotas = [ ];//array vacio que contine a objetos Notas
}

//---------- Métodos Objeto ALumno ----------
Alumno.prototype = Object.create(Alumno.prototype);

Alumno.prototype.toHTMLRow = function(){

	var tdDatosAlumno=    "<td>" + this.sDni + "</td>"
					 	  + "<td>" + this.sNombre + "</td>"
	  					  + "<td>" + this.sApellido + "</td>"
	   				 	  + "<td>" + this.dFechaNacimiento + "</td>"
	   				 	  + "<td>" + this.iTelefono + "</td>"
	   				 	  + "<td>" + this.sDireccion + "</td>";
	
	

	//recorremos las asignaturas del profesor y almacenarlas en td
	var tdDatosNota = "<td>";
	for (var i = 0; i < this.aNotas.length; i++) {
	  		 	
	    tdDatosNota+= this.aNotas[i].sNombreNota+"\n";
	}  		
	tdDatosNota += "<td/>"; 

	var tdAlumno= tdDatosProfesor+tdDatosNota;


	return tdProfesor;

}
//********** Fin Objeto Alumno **********

