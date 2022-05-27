let main = document.querySelector("main");

btnAgregar.addEventListener("click", function(){
	console.log("boton agregar")
	btnsArranque.classList.add("oculto");
	let textArea = document.createElement("TEXTAREA");
	main.appendChild(textArea);
	textArea.focus();
	textArea.classList.add("texto");
	textArea.placeholder = "Ingrese palabra aqui";
	agregarBotones("guardar", "cancelar");

	
});



