$("document").ready(inicio);

function inicio(){
    $("body").html("<div class='caja'>HOLA</div><button>Saludar</button>");
    $("button").click(saluda);
}
function saluda(){
    if ($(".div_que_no_existe").length > 0) {
        $(".caja").html("HOLA"); // Elimina el contenido del div caja
    } else {
        $(".caja").html("<div class='div_que_no_existe'>Hola Mundo</div>");
    }
// ternario
// function saluda(){
//     $(".caja").html($(".div_que_no_existe").length > 0 ? "" : "<div class='div_que_no_existe'>Hola Mundo</div>");
// }
// 
// function saluda(){
//     $(".caja").html("<div class='div_que_no_existe'>Hola Mundo</div>");

// }
}