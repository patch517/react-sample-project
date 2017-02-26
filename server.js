console.log('Server started');

var io = require('socket.io')();

var users = [];

io.on('connection', function (socket) {
  socket.user = { 'username': 'guest_person' + parseInt(Math.random() * 1000), 'guest': true };

  console.log('Someone connected and given the username', socket.user.username);

  socket.on('update', function (msg) { 
    alert(msg) 
  });

  io.sockets.emit('update-users', users);
  socket.on('send message', function (msg) {
    // TODO: Check if user is logged in
    console.log(socket.user.username, 'said', msg);
    io.sockets.emit('new message', [{ 'username': socket.user.username, 'time': Date.now(), 'content': msg, 'seen': false }]);
  });
  socket.on('join', function (username) {
    if (users.indexOf(username) !== -1) {
      // username is already in the users array, let user know that his username is taken
      return;
    }
    users.push(username);

    socket.user.username = username;
    socket.user.guest = false;

    socket.emit('update', 'you have connected');
    socket.emit('gotochat');

    io.sockets.emit('update', username + ' has joined the server.')
    io.sockets.emit('update-users', users);
  });
  socket.on('disconnect', function () {
    if (socket.user.guest && users.indexOf(socket.user.username) === -1) {
      // user was never logged in
      return;
    }
    io.sockets.emit('update', socket.user.username + ' has left the server.');

    users.splice(users.indexOf(socket.user.username), 1); // remove from users array

    io.sockets.emit('update-users', users);
  });
});

io.listen(8081);
