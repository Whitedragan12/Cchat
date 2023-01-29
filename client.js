const { io } = require("socket.io-client");
const socket = io("ws://localhost:3000");

socket.on('connection-gotten', () => {
  console.log('yay we connected!');
})

socket.on('got-message', message => {
  console.log(message);
})

// TODO: when the user enters a message string and clicks "enter" do this to send the message:
// socket.emit('send-message', message);



