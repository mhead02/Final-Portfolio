$( document ).ready(function() {

/* $("").click(function(){
	$("nav").fadeToggle("slow");
}); */

$("#controlNav").click(openNav);

function openNav() {
    $("sideNav").style.width = "250px";
}

});