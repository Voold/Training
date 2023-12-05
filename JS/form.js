export {name};
var name;
name = "login";


function checkForm(el){
	var name = el.name.value;
	var pass = el.pass.value;
	
	var fail = "";
	
	if (name == "" || pass == "")
		fail="Заполните все поля";
	else if (name.length<3 || name.length >50)
		fail="Длина имени должна быть от 3 до 50 символов";
	
	if (fail != "")
		alert (fail);
	else{
		name = document.getElementById("name");
		window.location = "../pages/index.html";
	}
	return false;
}
