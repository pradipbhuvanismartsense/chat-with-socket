let PORT = process.env["PORT"] || 3000;
let express = require("express");
let app = express();
let http = require("http").Server(app);
let io = require("socket.io")(http);

app.use(express.static(__dirname + "/public"));

io.on("connection", function (server) {
  console.log(`New user connected via socket.io`);

  server.on("message", function (message) {
    console.log(`Message received: ${message.text}`);

    server.broadcast.emit("message", message);
  });

  server.emit("message", {
    text: "welcome to chat application !",
  });
});

http.listen(PORT, function () {
  console.info(`server is running on port ${PORT}`);
});
