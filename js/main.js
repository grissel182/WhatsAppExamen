
(function(){
    // Variables
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tarea");

    var agregarTarea = function(){
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("P"),
            caja = document.createElement("span"),
            contenido = document.createTextNode(tarea);
        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Escribe tu mensaje aquí");

            return false;
        }
        total++;
        caja.id ='item' + total;
        enlace.setAttribute("href", "#");
        enlace.appendChild(caja);
        caja.appendChild(contenido);
        caja.innertext = "itemtext";
        //li
        nuevaTarea.appendChild(enlace);
    
        lista.appendChild(nuevaTarea);

        tareaInput.value = "";

    };
    var comprobarInput = function(){
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Escribe tu mensaje aquí");
    };

    var eliminartarea = function(){
        var parent = this.parentElement;
        parent.parentElement.removeChild(parent);
    };
    // tachado
    function actualizar() {
        var cbid = this.id.replace("cb", "");
        var itemtext = document.getElementById("item"+ cbid);
        if(this.checked){
            itemtext.className="tachar";
        }
        else{
            itemtext.className="none";
        }
    }
    var total = 0;
    tareaInput.addEventListener("click", comprobarInput);

    $(document).keypress(function(e){
	if(e.which == 13)
	{
		agregarTarea();
	}
});

}());


