$(document).on("ready",inicio);
/*$(document).off("ready",inicio);*/
function inicio ()
{
	//alert("Ya se programar!");
	$("#perzonalizar").on("click",transicion);
}
function transicion(){
	//Json
	var cambiosCSS = {	
		width:"0",
		overflow: "hidden",
		margin:0,
		padding:0
		};
	var cambiosperson = {
		opacity: 1,
		height: "auto",
		width: "40%"
	};
	$("#historia").css(cambiosCSS);
	$("#personalizacion").css(cambiosperson);
	$("#color div").on("click",cambiarcolor);
}
function cambiarcolor(datos)
{
	var col = datos.currentTarget.id;
	$("#cochecito img").attr("src","imagenes/c" + col + ".jpg");
}