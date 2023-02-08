var net = require('net');
// const os = require('os');
var ip = require('ip');

var host = ip.address();
var port = 1234;
const connect_message =
  'Halo! Berikut adalah list command untuk komunikasi:\n\
1. Vinsensius Liusianto\n\
2. Sehat\n\
3. Bye\n';
var message = '';

var server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log(`Server: Received ${data}`);

    if (data == 'Vinsensius Liusianto') {
      message = 'Sidartha Prastya';
    } else if (data == 'Sehat') {
      message = 'Alhamdulillah Sehat';
    } else if (data == 'Bye') {
      message = 'GoodBye, Have a nice day!';
      // socket.destroy(socket);
    } else {
      message = 'Perintah tidak diketahui!';
    }

    console.log(`Server: Sending ${message}`);
    socket.write(message);
  });
  socket.on('end', () => {
    console.log('Server: Client Disconnected');
  });
});

server.on('connection', (socket) => {
  console.log(
    `Server: ${socket.remoteAddress}:${socket.remotePort} has connected`
  );
  socket.write(connect_message);
});

server.on('error', (err) => {
  throw err;
});

server.on('listening', () => {
  var address = server.address();
  console.log(`Opened server on ${address.address}:${address.port}`);
});

server.listen(port, host);
