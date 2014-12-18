/**
 * Created by dlarchikov on 18.12.14.
 */

//window.onload = function () {
    var socket = io.connect('http://' + window.location.host + ':3110');
    var cEvents = new CEvents(socket);

    socket.on('connect', function () {
        socket.send({
            'event': 'auth',
            'role': 'server'
        });
        //

        socket.on('message', function (msg) {
            switch (msg.event) {
                case 'auth_success':
                    cEvents.authSuccess();
            }
        });
    });
//};