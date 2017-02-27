console.log('Server started');

var io = require('socket.io')();

var users = [];

io.on('connection', function (socket) {
  socket.user = { 'username': 'guest_person' + parseInt(Math.random() * 1000), 'guest': true };

  console.log(socket.user.username, 'joined the server');

  socket.emit('user', socket.user);
  socket.emit('goto', '/login');
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
      socket.emit('goto', '/login');
      return;
    }
    var oldUsername = false;

    if (!socket.user.guest) {
      oldUsername = socket.user.username;
      users.splice(users.indexOf(oldUsername), 1);
    }

    users.push(username);

    console.log(socket.user.username, 'connected as', username);

    socket.user.username = username;
    socket.user.guest = false;

    socket.emit('user', socket.user);
    socket.emit('update', 'you have connected');
    socket.emit('goto', '/chat');

    if (oldUsername) {
      io.sockets.emit('update', oldUsername + ' has changed username to ' + username)
    } else {
      io.sockets.emit('update', username + ' has joined the server.')
    }
    io.sockets.emit('update-users', users);
  });
  socket.on('disconnect', function () {
    if (socket.user.guest && users.indexOf(socket.user.username) === -1) {
      // user was never logged in
      return;
    }
    console.log(socket.user.username, 'left the server');

    io.sockets.emit('update', socket.user.username + ' has left the server.');

    users.splice(users.indexOf(socket.user.username), 1); // remove from users array

    io.sockets.emit('update-users', users);
  });
});

io.listen(8081);
