let btnIniciar = document.querySelector("#btn-iniciar");
let btnAgregar = document.querySelector("#btn-agregar");

btnIniciar.addEventListener("click", function(){
	console.log("boton iniciar");
});

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
