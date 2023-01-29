const { Server } = require("socket.io");

const CChatServer = new Server({ /* options */ });

CChatServer.on("connection", (socket) => {
  console.log('got a new connection!');
  socket.emit('connection-gotten');
});

CChatServer.listen(3000);
