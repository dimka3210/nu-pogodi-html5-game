/**
 * Created by dlarchikov on 18.12.14.
 */
var Events = function () {
    return {
        users: null,
        auth: function (socket, role, users) {
            if (role != 'user' && role != 'server') {
                socket.send({event: 'error', msg: 'Role not valid!'});
                return;
            }
            users[role] = socket;
            socket.send({event: 'auth_success'});
            this.users = users;
        },
        move: function (action) {
            console.log('Move: ' + action);
        },
        reload: function () {
            this.users.server.send({event: 'reload'});
        }
    };
};

module.exports = Events;