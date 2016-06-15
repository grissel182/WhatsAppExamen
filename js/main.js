//json vacio, se almacenaran los mensajes de manera temporal
var mensajes=[
];
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

// dar click y cambiar de imagen en el titular
$(".chat").click(function(){
    var data = $(this).attr("data");
    $(".mensaje-green").remove();
    // var imagen ="image/"+foto[data];
    $("#hablando").html('<img src="image/' + foto[data] + ' "class="img top">');
    $("#titulo").html("<b>" + nombre[data] + "</b>");
    escribirChat();
});

// moment().format("HH:mm");  Dentro de el span que se cree con el msj, añadir
// el moment.js//

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
            contenedor = document.createElement("div"),
            texto = document.createElement("p"),
            contenido = document.createTextNode(tarea),
            hora = document.createElement("span"); 

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
        contenedor.appendChild(hora);
        hora.setAttribute("class", "ver");
        texto.appendChild(contenido);
        caja.innertext = "itemtext";
        //li
        nuevaTarea.appendChild(enlace);
    
        lista.appendChild(nuevaTarea);

        
        contenedor.setAttribute("class", "mensaje-green"); //burbuja verde creada
        texto.setAttribute("class", "dark-gray", "mt-m");


    };
    var comprobarInput = function(){
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Escribe tu mensaje aquí");
        tareaInput.setAttribute("class", "form-control-2","inline", "escribe", "mt-5", "w-80");
    };

    var eliminartarea = function(){
        var parent = this.parentElement;
        parent.parentElement.removeChild(parent);
    };
    // 
    var total = 0;
    tareaInput.addEventListener("click", comprobarInput);

    $(document).keypress(function(e){
	if(e.which == 13)
	{
		agregarTarea();
        $(".ver").html('<span class="dark-gray time">' + moment().format("HH:mm") + "</span>");
        //pruebas de guardar
        var text = $("#tarea").val();
        var quien = $("#titulo").text();
        // guardar hora
        var time = $(".ver").text();
        var temp = {
            mensaje: text,
            persona: quien,
            tiempo: time
        };
        mensajes.push(temp);
        console.log(mensajes);
        tareaInput.value = "";
	}
});

}());
//se reescriben los mensajes borrados, extraidos de memoria temporal, para visualizar la conversación
var escribirChat = function(){
    for (var i =0; i< mensajes.length; i++){
    var temp = mensajes[i];
    var contact = $("#titulo").text();

    if (contact ==temp.persona){
        var msjAnteriores = temp.mensaje;
        var tiempoMsj = temp.tiempo;
        var bloque = document.createElement("div");
            interior = document.createTextNode(msjAnteriores);
            hour = document.createElement("span");
            minutos = document.createTextNode(tiempoMsj);

        $(bloque).addClass("mensaje-green");
        $(hour).addClass("time-2 dark-gray");
        bloque.appendChild(interior);
        bloque.appendChild(hour);
        hour.appendChild(minutos);
        $("#lista").append(bloque);
        }
    };
};
