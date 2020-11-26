var express = require("express");
var app = express();

app.listen(8888);

app.get("/", function (req, res) {
  // mediante res.send() podemos devolver una cadena:
  // res.send("Hola mundo desde res.send()");

  // sendFile devuelve un fichero.
  // __dirname es una buena práctica, indica el directorio actual (de app.js en este caso)
  // y después simplemente añadimos el resto de la ruta ("/views/index.html")
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
