const { io } = require("socket.io-client");
const socket = io("ws://localhost:3000");

socket.on('connection-gotten', () => {
  console.log('yay we connected!');
})




