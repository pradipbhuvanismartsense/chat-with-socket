var socket = io();

socket.on("connect", function () {
  console.info("connected to socket.io server!");
});

socket.on("message", function (data) {
  console.log("Received new message ");
  console.log(data.text);
});

/** handles submitting of new message */
var $form = jQuery("#message-form");

$form.on("submit", function (event) {
  event.preventDefault();
  console.log("form submitted", $form.find("input[name=message]").val());
  var $message = $form.find("input[name=message]");

  socket.emit("message", {
    text: $message.val(),
  });

  $message.val("");
});
