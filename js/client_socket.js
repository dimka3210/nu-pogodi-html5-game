/**
 * Created by dlarchikov on 18.12.14.
 */
var socket = io.connect(window.location.host, {'transports':['websocket']});
var cEvents = new CEvents(socket);

socket.on('connect', function () {
    socket.send({
        'event': 'auth',
        'role': 'server'
    });
});

socket.on('message', function (msg) {
    switch (msg.event) {
        case 'auth_success':
            cEvents.authSuccess();
            break;
        case 'reload':
            window.location.reload();
            break;
    }
});