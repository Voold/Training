var name;
name = "User Name";


function Go(el){
	var name = el.name.value;
	var pass = el.pass.value;
	
	var fail = "";
	
	if (name == "" || pass == "")
		fail="Заполните все поля";
	else if (name.length<3 || tname.length >20)
		fail="Длина имени должна быть от 3 до 20 символов";
	
	if (fail != "")
		alert (fail);
	else{
		alert ("&&&");
		window.location = "../index.html";
		window.location = "../index.html";
	}
	
	return false;
}


//document.getElementById("UserName").innerHTML = name;