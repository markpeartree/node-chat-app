var socket = io();

socket.on('connect', function () {
  console.log('connected to server');
});

var createMessage = function(emailObj) {
  socket.emit('createMessage', emailObj);
}

socket.on('disconnect', function () {
  console.log('disconnected from server');
});

socket.on('newMessage', function (email) {
  console.log('newMessage', email);
  var elem = document.getElementById('par');
  elemTxt = document.getElementById('par').innerHTML;
  elem.innerHTML = `${elemTxt} <br> ${email.text}  ${email.from}  ${email.createdAt}`;
});
