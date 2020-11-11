var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('Conectado');
    socket.on('disconnect', () => {
    console.log('Ido');
    });
});

io.on("connection", (socket) =>{
    socket.on("repintado", (valores) =>{
      console.log(valores);
      io.emit("repintado", valores);
    });

});

http.listen(8080, () => {
  console.log('Corriendo en *:8080');
});