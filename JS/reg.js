function checkForm(el){
	var name = el.name.value;
	var pass = el.pass.value;
	var repass = el.repass.value;
	var state = el.state.value;
	
	var fail = "";
	
	if (name == "" || pass == "" || repass =="" || state =="")
		fail="Заполните все поля";
	else if (repass != pass)
		fail = "Пароли не совпадают";
	else if (name.length<3 || name.length >50)
		fail="Длина имени должна быть от 3 до 50 символов";
	
	if (fail != "")
		alert (fail);
	else{
		alert("Все данные заполнены корректно! Заявка на кредит будет рассмотрена в течении 10 минут!");
//		window.location = "https://voold.online";
		window.location = "../index.html";
	}
	return false;
}

