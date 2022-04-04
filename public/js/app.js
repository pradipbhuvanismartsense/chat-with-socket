var socket = io();

socket.on("connect", function () {
  console.info("connected to socket.io server!");
});
