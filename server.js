console.log('Server started');

var io = require('socket.io')();

io.on('connection', function (socket) {
  socket.user = { 'username': 'guest_person' + parseInt(Math.random() * 1000), 'guest': true };

  console.log('Someone connected and given the username', socket.user.username);

  io.sockets.emit('users', []);
  socket.on('auth', function (msg) {
    // TODO: Authenticate client with server. in msg there should be a username and password
    socket.user = { 'username': 'auth_person' + parseInt(Math.random() * 1000), 'guest': false };
  });
  socket.on('send message', function (msg) {
    // TODO: Check if user is logged in
    console.log(socket.user.username, 'said', msg);
    io.sockets.emit('new message', [{ 'username': socket.user.username, 'time': Date.now(), 'content': msg, 'seen': false }]);
  });
  socket.on('connection', function (user) {
    user.on('join', function(name){
      users[user.id] = name;
      user.emit('update', 'you have connected');
      io.sockets.emit('update', name + ' has joined the server.')
      io.sockets.emit('update-users', users);
    })
  });
  socket.on('disconnect', function(){
        io.sockets.emit('update', users[user.id] + ' has left the server.');
        delete users[user.id];
        io.sockets.emit('update-users', users);
    });
});

io.listen(8081);
