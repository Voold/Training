export {name};
var name;
name = "login";


function checkForm(el){
	var tname = el.name.value;
	var pass = el.pass.value;
	
	var fail = "";
	
	if (tname == "" || pass == "")
		fail="Заполните все поля";
	else if (tname.length<3 || tname.length >20)
		fail="Длина имени должна быть от 3 до 20 символов";
	
	if (fail != "")
		alert (fail);
	else{
		name = document.getElementById("name");
		window.location = "../pages/index.html";
	}
	return false;
}
