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
                case 'lefttop':
                    NuPogodi.game.state.states.Game.actionButtonLeftUp();
                    break;
                case 'leftbottom':
                    NuPogodi.game.state.states.Game.actionButtonLeftDown();
                    break;
                case 'righttop':
                    NuPogodi.game.state.states.Game.actionButtonRightUp();
                    break;
                case 'rightbottom':
                    NuPogodi.game.state.states.Game.actionButtonRightDown();
                    break;
                default:
                    console.log('Нет такого action '+ action);
            }
        }
    };
};