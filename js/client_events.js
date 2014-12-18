/**
 * Created by dlarchikov on 18.12.14.
 */
var CEvents = function (socket) {
    return {
        authSuccess: function () {
            console.log('auth_success>>>>>>>>>>>>>>>>>>');
        },
        moveLeft: function () {
            NuPogodi.game.state.states.Game.actionButtonRightUp()
            NuPogodi.Wolf.moveWolfLeft();
        }
    };
};