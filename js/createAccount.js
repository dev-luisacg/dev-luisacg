function createAccount(){
	var name, password, confirmPassword, expresion;
	name = document.getElementById("userName").value;
	password = document.getElementById("password").value;
	confirmPassword = document.getElementById("confirmPassword").value;

	if(name === "" || password === "" || confirmPassword === ""){
		alert("Algún campo esta vacio.");
		return false;
	}else if(name.length>10){
		alert("El nombre es muy largo.");
		return false;
	}else if(password.length>10){
		alert("La clave es muy larga.");
		return false;
	}else if(name.length<8){
		alert("El nombre es muy corto.");
		return false;
	}else if(password.length<8){
		alert("La clave es muy corta.");
		return false;
	}else if(confirmPassword != password){
		alert("La clave no coincide con la clave para confirmar.");
		return false;
	}
}