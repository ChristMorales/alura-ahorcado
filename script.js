let btnIniciar = document.querySelector("#btn-iniciar");
let btnAgregar = document.querySelector("#btn-agregar");
let btnsArranque = document.querySelector(".btn-inicio");
let verCanvas = document.querySelector("#section-canvas");
let parrafoFallos = document.querySelector(".fallos p")
let elementosLista = [];



btnIniciar.addEventListener("click", function(){
	btnsArranque.classList.add("oculto");
	let list = verCanvas.classList;
	list.remove("oculto");
	dibujar0();
	console.log(list);	
	seleccionarRandom();
	crearLi();
	document.addEventListener("keydown", escucharTeclado);
	agregarBotones("reiniciar", "abandonar");
});

let escucharTeclado = function(event) {
	let char = event.key;
	char = char.toUpperCase(); 
	if (char.length === 1 && char.match(/[A-Z]/i)){
		checarLetra(event.key);
	}
}


function agregarBotones(texto1, texto2){
	let botonesNuevos = document.createElement("section");
	main.appendChild(botonesNuevos);
	botonesNuevos.classList.add("btn-agregado");
	let btn1 = document.createElement("button");
	btn1.classList.add("btn1");
	btn1.textContent = texto1;
	let btn2 = document.createElement("button");
	btn2.textContent = texto2;
	btn2.classList.add("btn2");
	botonesNuevos.appendChild(btn1);
	botonesNuevos.appendChild(btn2);
}




let palabras = ["PYTHON", "MONITOR", "CAFETERA", "TERMO", "SALAME", "JAMON", "REMOTO", "PIZARRON", "FRONTEND", "BACKEND"];
let intentos = [];
let exito = []
let fallo = []
let palabraActual = []
let indiceLetra = 0;
let letraActual = "";
let counterFallos = 0;
let counterExitos = 0;

function seleccionarRandom(){
	let palabra = palabras[Math.floor(Math.random() * palabras.length)];
	console.log(palabra);
	palabraActual = Array.from(palabra);
}

function checarLetra(letra){
	letraActual = letra.toUpperCase();
	if (!intentos.includes(letraActual)){
			if (palabraActual.includes(letraActual)){
				console.log("exito");
				intentos.push(letraActual);
				exito.push(letraActual);
				palabraActual.forEach((item, index) => {
					if (item == letraActual){
						elementosLista[index].textContent = letraActual;
						counterExitos++;
					}
				});
				if (counterExitos == palabraActual.length){
					console.log("ganaste pa")
					document.removeEventListener("keydown", escucharTeclado);

				}	

			} else {
				console.log("fallo");
				intentos.push(letraActual);
				fallo.push(letraActual);
				counterFallos++;
				parrafoFallos.textContent = parrafoFallos.textContent + " " + letraActual;
				dibujos[fallo.length]();
				if (counterFallos == 6){
					console.log("perdiste Gil")
					document.removeEventListener("keydown", escucharTeclado);

				}
			}
	}
}

let lista = document.querySelector(".lista-letras"); 

function crearLi(){
	for(letra of palabraActual){
		let li = document.createElement("li");
		lista.appendChild(li);
		li.textContent = " ";
	}
	elementosLista = lista.children;
}

