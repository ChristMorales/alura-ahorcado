let canvas = document.querySelector("canvas");
let pincel = canvas.getContext("2d");
pincel.lineWidth = 5;


function dibujar0(){
	pincel.lineCap = "round";
	pincel.fillRect(0, 355, 294, 5);
	pincel.fillRect(81, 0, 5, 359);
	pincel.fillRect(81, 0, 150, 5);
	pincel.fillRect(231, 0, 5, 50);
}

function dibujar1(){
	pincel.arc(231, 82, 32, 0, Math.PI*2);
	pincel.stroke();
}

function dibujar2(){
	pincel.fillRect(231, 114, 5, 135);
}

function dibujar3(){
	pincel.beginPath();
	pincel.moveTo(231, 114);
	pincel.lineTo(196, 184);
	pincel.closePath();
	pincel.stroke();
}

function dibujar4(){
	pincel.beginPath();
	pincel.moveTo(236, 114);
	pincel.lineTo(271, 184);
	pincel.closePath();
	pincel.stroke();
}

function dibujar5(){
	pincel.beginPath();
	pincel.moveTo(234, 247);
	pincel.lineTo(196, 319);
	pincel.closePath();
	pincel.stroke();
}

function dibujar6(){
	pincel.beginPath();
	pincel.moveTo(234, 247);
	pincel.lineTo(271, 319);
	pincel.closePath();
	pincel.stroke();
}
