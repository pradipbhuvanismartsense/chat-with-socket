var socket = io();

socket.on("connect", function () {
  console.info("connected to socket.io server!");
});

socket.on("message", function (data) {
  console.log("Received new message ");
  console.log(data.text);
});
