var name;
name = "login";


function Go(el){
	var tname = document.getElementById("name").value;
	var pass = document.getElementById("pass").value;
	
	var fail = "";
	
	el.style.background= "red";
	
	if (tname == "" || pass == "")
		fail="Заполните все поля";
	else if (tname.length<3 || tname.length >20)
		fail="Длина имени должна быть от 3 до 20 символов";
	
	if (fail != "")
		alert (fail);
	else{
		name = tname;
		alert (name);
		window.location = "../index.html";
	}
}

export {name};