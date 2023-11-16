var ed_row = document.getElementById("ed_row");
var ButR = document.getElementById("ButR");
var ButL = document.getElementById("ButL");
var Count = 0;
var step = 0;

function testes() {
	alert('test text');
}


function but1(el){

}


function ButRcl(el){
	step+=220;
	if (step >= 215)
		ButL.style.visibility="visible";
	if (step <= 1100)
		ed_row.style.cssText="right: +"+step+"px;transition: 0.6s linear;";
	else if (step <= 1320){
		el.style.visibility="hidden";
		ed_row.style.cssText="right: +"+step+"px;transition: 0.6s linear;";
	}
}

function ButLcl(el){
	if (step >= 220){
		step-=220;
		ButR.style.visibility="visible";
	}
	if (step == 0){
		el.style.visibility="hidden";
		ed_row.style.cssText="right: -"+step+"px;transition: 0.6s linear;";
	}
	else if (step > 0)
		ed_row.style.cssText="right: +"+step+"px;transition: 0.6s linear;";
}
