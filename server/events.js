/**
 * Created by dlarchikov on 18.12.14.
 */
var Events = function () {
    return {
        auth: function (socket, role, users) {
            if (role != 'user' && role != 'server') {
                socket.send({event: 'error', msg: 'Role not valid!'});
                return;
            }
            users[role] = socket;
            socket.send({event: 'auth_success'});
        }
    };
};

module.exports = Events;