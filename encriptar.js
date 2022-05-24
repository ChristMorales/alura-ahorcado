


let botonEncriptar = document.querySelector("#boton-encriptar");
let displayTexto = document.querySelector(".display-texto");
let pResultado = document.createElement("p");
let ocultar = document.querySelector(".ocultable");
let botonCopiar = document.querySelector("#boton-copiar");



botonEncriptar.addEventListener("click", function(){
	let texto = document.querySelector("#texto");
	console.log(encriptar(texto.value));
	pResultado.textContent = encriptar(texto.value);
	displayTexto.appendChild(pResultado);
	ocultable.classList.add("ocultable");
	botonCopiar.classList.remove("ocultable");
})



function reemplazarLetra(char){
	let nuevaChar = "";
	switch (char){
		case "a":
			nuevaChar = "ai";
			break;
		case "e":
			nuevaChar = "enter";
			break;
		case "i":
			nuevaChar = "imes";
			break;
		case "o":
			nuevaChar = "ober";
			break;
		case "u":
			nuevaChar = "ufat";
			break;
		default:
			nuevaChar = char;
		}
	return nuevaChar;
}

function encriptar(texto){
	let encriptado = "";
	for(let i = 0; i < texto.length; i++){	
		encriptado = encriptado + reemplazarLetra(texto[i]);
	}
	return encriptado;
}

/*function encriptar(texto){
    let encriptado = texto
	encriptado = encriptado.replace(/a/g, "ai");
    encriptado = encriptado.replace(/e/g, "enter");
    encriptado = encriptado.replace(/i/g, "imes");
    encriptado = encriptado.replace(/o/g, "ober");
    encriptado = encriptado.replace(/u/g, "ufat");
    return encriptado;
}*/

