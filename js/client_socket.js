/**
 * Created by dlarchikov on 18.12.14.
 */
var socket = io.connect(window.location.host, {'transports': ['websocket']});
var cEvents = new CEvents();

socket.on('connect', function () {
    socket.send({
        'event': 'auth',
        'role': 'server'
    });
});

socket.on('message', function (msg) {
    switch (msg.event) {
        case 'auth_success':
            break;
        case 'reload':
            cEvents.reload();
            break;
        case 'start':
            cEvents.start();
            break;
        case 'move':
            cEvents.move(msg.action);
    }
});