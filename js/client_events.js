/**
 * Created by dlarchikov on 18.12.14.
 */
var CEvents = function () {
    return {
        reload: function () {
            window.location.reload();
        },

        start: function () {
            NuPogodi.game.state.states.Menu.beginGame();
        },

        move: function (action) {
            switch (action) {
                case 'left':
                    NuPogodi.game.state.states.Game.wolf.moveWolfLeft();
                    break;
                case 'right':
                    NuPogodi.game.state.states.Game.wolf.moveWolfRight();
                    break;
                case 'top':
                    NuPogodi.game.state.states.Game.wolf.moveBasketUp();
                    break;
                case 'bottom':
                    NuPogodi.game.state.states.Game.wolf.moveBasketDown();
                    break;
                default:
                    console.log('Нет такого action ' + action);
            }
        }
    };
};