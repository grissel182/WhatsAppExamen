
//Funcion de busqueda
function doSearch()
        {
            var tableReg = document.getElementById('datos');
            var searchText = document.getElementById('searchTerm').value.toLowerCase();
            var cellsOfRow="";
            var found=false;
            var compareWith="";
 
            // Recorremos todas las filas con contenido de la tabla
            for (var i = 1; i < tableReg.rows.length; i++)
            {
                cellsOfRow = tableReg.rows[i].getElementsByTagName('b'); //La busqueda en solo nombres
                found = false;
                // Recorremos todas las celdas
                for (var j = 0; j < cellsOfRow.length && !found; j++)
                {
                    compareWith = cellsOfRow[j].innerHTML.toLowerCase();
                    // Buscamos el texto en el contenido de la celda
                    if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1))
                    {
                        found = true;
                    }
                }
                if(found)
                {
                    tableReg.rows[i].style.display = '';
                } else {
                    // si no ha encontrado ninguna coincidencia, esconde la
                    // fila de la tabla
                    tableReg.rows[i].style.display = 'none';
                }
            }
        }


var foto = ["logocodeacademy.png", "raymi.jpg", 
"mariana.jpg", "anamaria.jpg", "rodulfo.jpg",
 "andrea.jpg", "mariapaula.jpg"];

var nombre = ["Laboratoria Perú", "Raymi Saldomando", 
"Mariana Costa", "Ana María Martinez", "Rodulfo Prieto", 
"Andrea Lamas", "María Paula Rivarola"];

$(".chat").click(function(){
    var data = $(this).attr("data");
    // var imagen ="image/"+foto[data];
    $("#hablando").html('<img src="image/' + foto[data] + ' "class="img top">');
    $("#titulo").html("<b>" + nombre[data] + "</b>");



// var imagen = "fotos/" + imagenes[numeroAlAzar];
//     $('#imagenPersona').attr('src', imagen) 
//     $("a").click(function() {
//       $("#imageBox").html("<img src=' + this.href + '>");
// });
});



//funcion de creación de mensajes de conversación
(function(){
    // Variables
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tarea");

    var agregarTarea = function(){
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("P"),
            caja = document.createElement("span"),
            contenedor = document.createElement ("div"),
            texto = document.createElement("p"),
            contenido = document.createTextNode(tarea);
        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Escribe tu mensaje aquí");

            return false;
        }
        total++;
        caja.id ='item' + total;
        enlace.setAttribute("href", "#");
        enlace.appendChild(caja);
        caja.appendChild(contenedor);
        contenedor.appendChild(texto);
        texto.appendChild(contenido);
        caja.innertext = "itemtext";
        //li
        nuevaTarea.appendChild(enlace);
    
        lista.appendChild(nuevaTarea);

        tareaInput.value = "";
        contenedor.setAttribute("class", "mensaje-green"); //burbuja verde creada
        texto.setAttribute("class", "dark-gray", "mt-m");

    };
    var comprobarInput = function(){
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Escribe tu mensaje aquí");
        tareaInput.setAttribute("class", "form-control","inline", "escribe", "mt-5", "w-80");
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
        //pruebas de guardar
        // var text = $("#tarea").val();
        // var persona = $("#header").text();
        // var temp = {
        //     mensaje: ;
        //     persona: ;
        // };
        // mensajes.push(temp;)
	}
});

}());


