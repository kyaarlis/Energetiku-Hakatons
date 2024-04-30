// const dgram = require('dgram');

// const serverPort = 5000;

// // Create a UDP server
// const server = dgram.createSocket('udp4');

// // TODO: Dekodet message uz utf-8 formatu

// server.on('message', (message, remote) => {
//   console.log(`Received message from ${remote.address}:${remote.port}: ${message}`);
//   if (message === 123) {
//     let IP = ''
//     IP = (remote.address).toString()
//     server.send('CONNECTION ACCEPTED', remote.port, remote.address);
//   }
//   console.log(`IP is ${remote.address}`);
//   // You can process the received message here
// });

// // Handle errors
// server.on('error', (err) => {
//   console.error('UDP server error:', err);
//   server.close();
// });

// // Start listening on the specified port
// server.bind(serverPort, () => {
//   console.log(`UDP server is listening on port ${serverPort}`);
// });
