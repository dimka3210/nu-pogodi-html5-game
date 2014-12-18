/**
 * Created by dlarchikov on 18.12.14.
 */
var CEvents = function () {
    return {
        reload: function (){
            window.location.reload();
        },

        start: function (){
            NuPogodi.game.state.states.Menu.beginGame();
        },

        move: function (action) {
            switch (action) {
                case 'leftup':
                    NuPogodi.game.state.states.Game.actionButtonLeftUp();
                    break;
                case 'leftdown':
                    NuPogodi.game.state.states.Game.actionButtonLeftDown();
                    break;
                case 'rightup':
                    NuPogodi.game.state.states.Game.actionButtonRightUp();
                    break;
                case 'rightdown':
                    NuPogodi.game.state.states.Game.actionButtonRightDown();
                    break;
            }
        }
    };
};