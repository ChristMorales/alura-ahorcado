let btnIniciar = document.querySelector("#btn-iniciar");
let btnAgregar = document.querySelector("#btn-agregar");
let btnsArranque = document.querySelector(".btn-inicio");
let verCanvas = document.querySelector("#section-canvas");



btnIniciar.addEventListener("click", function(){
	btnsArranque.classList.add("oculto");
	let list = verCanvas.classList;
	console.log(list);	
	seleccionarRandom();
	crearLi();
});

document.addEventListener("keydown", function(event) {
	if (event.key.toLowerCase() != event.key.toUpperCase()){
		checarLetra(event.key);
	} else {
		console.log("escriba letra")
	}
})



btnAgregar.addEventListener("click", function(){
	console.log("boton agregar");
});

let palabras = ["python", "monitor", "cafetera", "termo", "salame", "jamon", "remoto", "pizarron", "frontend", "backend"];
let intentos = [];
let exito = []
let fallo = []
let palabraActual = []

function seleccionarRandom(){
	let palabra = palabras[Math.floor(Math.random() * palabras.length)];
	console.log(palabra);
	palabraActual = Array.from(palabra);
}

function checarLetra(letra){
	let indeceLetra = 0;
	if (palabraActual.includes(letra)){
		console.log("exito");
		intentos.push(letra);
		exito.push(letra);
		indiceLetra = palabraActual.indexOf(letra);
	} else {
		console.log("fallo");
		intentos.push(letra);
		fallo.push(letra);
	}
	return indiceLetra;
}

let lista = document.querySelector(".lista-letras"); 
function crearLi(){
	for(letra of palabraActual){
		let li = document.createElement("li");
		lista.appendChild(li);
		li.textContent = " ";
	}
}

