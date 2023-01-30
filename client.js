const { io } = require("socket.io-client");
const socket = io("ws://localhost:3000");

socket.on('connection-gotten', () => {
  console.log('yay we connected!');
})

socket.on('got-message', message => {
  console.log(message);
})

const readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function promptToSendMessage() {
  rl.question('message> ', input => {
    if( input == 'exit' )
      return rl.close();

    socket.emit('send-message', input);


    promptToSendMessage();
  });
}

promptToSendMessage();
/*
const prompt = require('prompt-sync')({sigint: true});

while(true){ // unfortunatley the while loop screwed us up, might be worth reimplementing it the way we do 'readLine' as an exercise for the user
    const message = prompt('');
    socket.emit('send-message', message)
}

// TODO: when the user enters a message string and clicks "enter" do this to send the message:
// socket.emit('send-message', message);


*/
