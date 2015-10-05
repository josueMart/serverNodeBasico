
var pepito ="Madrid"
var basededatos ={
	usuario: "fredier",
	password: "mejorandola"
};
console.log ("Arrancando server de node... :)");
//variables obligatorias
var express =require("express");
var parcero =require("body-parser");
var web = express();
web.use( parcero.urlencoded() );
var servidor;

servidor =web.listen(8081, function (){
	console.log("Servidor arrancado ");
});

web.get("/", function (req, res){
	res.sendfile("formulario.html");

});
web.post("/entrar", function (req, res){
	if(req.body.usuario == basededatos.usuario && req.body.clave == basededatos.password)
	{
		res.send("Bienvenido al area secreta~~~~~~~")
	}
	else
	{
		res.send("Shuu, shuu, fuera de aqui!!!");
	}

});

web.get("/hola/mama-es-linda", function (req, res){
	res.send("Hola <strong>mama</strong> estoy triunfandop");
});
//formulario de login ver