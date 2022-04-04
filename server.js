let PORT = process.env["PORT"] || 3000;
let express = require("express");
let app = express();
let http = require("http").Server(app);
let io = require("socket.io")(http);

app.use(express.static(__dirname + "/public"));

io.on("connection", function (client) {
  console.log(`New user connected via socket.io`);
});

http.listen(PORT, function () {
  console.info(`server is running on port ${PORT}`);
});
