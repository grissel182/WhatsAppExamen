// // funcion para que al dar enter se ejecute
// $(document).keypress(function(e){
// 	if(e.which == 13)
// 	{
// 		alert("sdfsf") //borrar y poner el aggregar div
// 	}
// });
// // crear texto nodo, poner en input
// // function myFunction() {
// //     var t = document.createTextNode("Hello World");
// //     document.body.appendChild(t);
// // }


// var msjInput = document.getElementById("msj");

// var agregarMensaje = function(){
// 	var mensaje = msjInput.value;

// 	if (mensaje === "") {
// 	    msjInput.setAttribute("placeholder", "Agrega una tarea valida");

// 	    return false;
// 	}
// };

// var comprobarInput = function(){
//         msjInput.className = "";
//         msjInput.setAttribute("placeholder", "Agrega tu tarea");
//     };



















// var container = $(document.createElement('div')).css({
// padding: '5px', margin: '20px', width: '170px', border: '1px dashed',
// borderTopColor: '#999', borderBottomColor: '#999',
// borderLeftColor: '#999', borderRightColor: '#999'
// });



// $(document).ready(function(){
//     $("#btn1").click(function(){
//         $("p").append(" <b>Appended text</b>.");
//     });

//     $("#btn2").click(function(){
//         $("ol").append("<li>Appended item</li>");
//     });
// });




// (function(){
//     // Variables
//     var bloque = document.getElementById("mensje"), //div contenedor de msj
//         tareaInput = document.getElementById("msj"),

//         btnNuevaTarea = document.getElementById("agregar");

//     var agregarTarea = function(){
//         var tarea = tareaInput.value,
//             nuevaTarea = document.createElement("li"),
//             enlace = document.createElement("a"),
//             caja = document.createElement("span")
//             chkbox = document.createElement('input'),
//             contenido = document.createTextNode(tarea);
//             removeButton = document.createElement('button');

//         if (tarea === "") {
//             tareaInput.setAttribute("placeholder", "Agrega una tarea valida");

//             return false;
//         }


//         total++;
//         caja.id ='item' + total;
//         enlace.setAttribute("href", "#");
//         enlace.appendChild(chkbox);
//         enlace.appendChild(caja);
//         caja.appendChild(contenido);
//         nuevaTarea.appendChild(removeButton);
        
//         chkbox.type = 'checkbox';

//         removeButton.className = 'removeMe'; // CSS
//         removeButton.innerHTML = "<i class='fa fa-times right'></i>";
//         removeButton.onclick = eliminartarea;
//         // checkbox intento
//         chkbox.onclick = actualizar;
//         chkbox.id = 'cb' + total;

//         caja.innertext = "itemtext";
//         //li
//         nuevaTarea.appendChild(enlace);
    
//         lista.appendChild(nuevaTarea);

//         tareaInput.value = "";

//     };
//     var comprobarInput = function(){
//         tareaInput.className = "";
//         tareaInput.setAttribute("placeholder", "Agrega tu tarea");
//     };

//     var eliminartarea = function(){
//         var parent = this.parentElement;
//         parent.parentElement.removeChild(parent);
//     };
//     // tachado
//     function actualizar() {
//         var cbid = this.id.replace("cb", "");
//         var itemtext = document.getElementById("item"+ cbid);
//         if(this.checked){
//             itemtext.className="tachar";
//         }
//         else{
//             itemtext.className="none";
//         }
//     }
//     // variable para contador del ciclo de tachar
//     var total = 0;

//     // Agregar Tarea
//     btnNuevaTarea.addEventListener("click", agregarTarea);

//     // Comprobar Input
//     tareaInput.addEventListener("click", comprobarInput);

// }());



(function(){
    // Variables
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tarea");
        // btnNuevaTarea = document.getElementById("agregar");

    var agregarTarea = function(){
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("P"),
            caja = document.createElement("span"),
            // chkbox = document.createElement('input'),
            contenido = document.createTextNode(tarea);
            // removeButton = document.createElement('button');

        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Escribe tu mensaje aquí");

            return false;
        }


        total++;
        caja.id ='item' + total;
        enlace.setAttribute("href", "#");
        // enlace.appendChild(chkbox);
        enlace.appendChild(caja);
        caja.appendChild(contenido);
        // nuevaTarea.appendChild(removeButton);
        
        // chkbox.type = 'checkbox';

        // removeButton.className = 'removeMe'; // CSS
        // removeButton.innerHTML = "<i class='fa fa-times right'></i>";
        // removeButton.onclick = eliminartarea;
        // checkbox intento
        // chkbox.onclick = actualizar;
        // chkbox.id = 'cb' + total;

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
    // variable para contador del ciclo de tachar
    var total = 0;

    // Agregar Tarea
    // btnNuevaTarea.addEventListener("click", agregarTarea);

    // Comprobar Input
    tareaInput.addEventListener("click", comprobarInput);

    $(document).keypress(function(e){
	if(e.which == 13)
	{
		agregarTarea();
	}
});

}());





// var msjInput = document.getElementById("mensaje");

// $(document).ready(function(){
// 	msjInput.setAttribute("placeholder", "Agrega una tarea valida");
// });



// $(document).ready(function() {
//   mensajeVacio();
//   // $('.btn-1').slideToggle(300) //ocultar botones de menu al inicio
// });



// var mensajeVacio = function() {
// 	$('#mensaje').setAttribute("placeholder", "Agrega una tarea valida");
// };



// $(document).ready(function() {


// });





// (function(){
//     // Variables
//     // var lista = document.getElementById("lista"),
//         msjInput = document.getElementById("mensaje"),
//     //     btnNuevaTarea = document.getElementById("agregar");

//     var agregarMsj = function(){
//         var msj = msjInput.value,
//             nuevaCaja = document.createElement("div"),
//             texto = document.createElement("p");


//             // enlace = document.createElement("a"),
//             // caja = document.createElement("span")
//             // chkbox = document.createElement('input'),
//             // contenido = document.createTextNode(tarea);
//             // removeButton = document.createElement('button');

//         // if (tarea === "") {
//             msjInput.setAttribute("placeholder", "Agrega una tarea valida");

//         //     return false;
//         // }


//         total++;
//         caja.id ='item' + total;
//         enlace.setAttribute("href", "#");
//         enlace.appendChild(chkbox);
//         enlace.appendChild(caja);
//         caja.appendChild(contenido);
//         nuevaTarea.appendChild(removeButton);
        
//         chkbox.type = 'checkbox';

//         removeButton.className = 'removeMe'; // CSS
//         removeButton.innerHTML = "<i class='fa fa-times right'></i>";
//         removeButton.onclick = eliminartarea;
//         // checkbox intento
//         chkbox.onclick = actualizar;
//         chkbox.id = 'cb' + total;

//         caja.innertext = "itemtext";
//         //li
//         nuevaTarea.appendChild(enlace);
    
//         lista.appendChild(nuevaTarea);

//         tareaInput.value = "";

//     };
//     var comprobarInput = function(){
//         tareaInput.className = "";
//         tareaInput.setAttribute("placeholder", "Agrega tu tarea");
//     };

//     var eliminartarea = function(){
//         var parent = this.parentElement;
//         parent.parentElement.removeChild(parent);
//     };
//     // tachado
//     function actualizar() {
//         var cbid = this.id.replace("cb", "");
//         var itemtext = document.getElementById("item"+ cbid);
//         if(this.checked){
//             itemtext.className="tachar";
//         }
//         else{
//             itemtext.className="none";
//         }
//     }
//     // variable para contador del ciclo de tachar
//     var total = 0;

//     // Agregar Tarea
//     btnNuevaTarea.addEventListener("click", agregarTarea);

//     // Comprobar Input
//     tareaInput.addEventListener("click", comprobarInput);

// }());

