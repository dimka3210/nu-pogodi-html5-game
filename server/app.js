/**
 * Created by dlarchikov on 18.12.14.
 */
var config = require('./config.json');
var io = require('socket.io').listen(8080);
var Events = require('./events');
var events = new Events();

var users = {};

io.sockets.on('connection', function (socket) {
    console.log('User connect ' + socket.id);

    socket.on('message', function (msg) {
        if (!msg.event) {
            console.error('Field "event" required!')
            return;
        }

        switch (msg.event) {
            case 'auth': events.auth(socket, msg.role, users);
        }
    });
    socket.on('disconnect', function() {
        console.log('User disconnect ' + socket.id);
    });
});