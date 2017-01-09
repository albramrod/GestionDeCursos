//---------- Objetos ----------



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

//---------- Objeto Profesor ----------
function Profesor (){
	Persona.call(this,sDni,sNombre,sApellido,dFechaNacimiento, iTelefono,sDireccion);
	this.aAsignatura = [ ];//array vacio que contine a objetos asignatura
}

Profesor.prototype = Object.create(Profesor.prototype);

//---------- Objeto Profesor ----------
function Alumno (){
	Persona.call(this,sDni,sNombre,sApellido,dFechaNacimiento, iTelefono,sDireccion);
	this.aNotas = [ ];//array vacio que contine a objetos asignatura
}

//---------- Métodos Objeto ALumno ----------
Alumno.prototype = Object.create(Alumno.prototype);

Alumno.prototype.modificarNotaALumno = function(){

}


