var name;
name = "login";


function Go(el){
	name = el.name.value;
	var pass = el.pass.value;
	
	var fail = "";
	
	if (name == "" || pass == "")
		fail="Заполните все поля";
	else if (name.length<3 || tname.length >20)
		fail="Длина имени должна быть от 3 до 20 символов";
	
	if (fail != "")
		alert (fail);
	else{
		alert (name);
		window.location = "../index.html";
	}
	
	return false;
}

export {name};