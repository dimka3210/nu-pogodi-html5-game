/**
 * Created by dlarchikov on 18.12.14.
 */
var CEvents = function (socket) {
    return {
        authSuccess: function () {
            setTimeout(function () {
                NuPogodi.game.input.keyboard.key(Phaser.Keyboard.ENTER);
                console.log(123);
            }, 4000);
        },
        moveLeft: function () {
            NuPogodi.game.state.states.Game.actionButtonRightUp()
            NuPogodi.Wolf.moveWolfLeft();
        }
    };
};