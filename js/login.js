function login(){
	var name, password, expresion;
	name = document.getElementById("name").value;
	password = document.getElementById("password").value;

	if(name === "" || password === ""){
		alert("El campo name esta vacio");
		return false;
	}else if(name.length>10){
		alert("El nombre es muy largo");
		return false;
	}else if(password.length>10){
		alert("La clave es muy larga");
		return false;
	}else if(name.length<8){
		alert("El nombre es muy corto");
		return false;
	}else if(password.length<8){
		alert("La clave es muy corta");
		return false;
	}
}