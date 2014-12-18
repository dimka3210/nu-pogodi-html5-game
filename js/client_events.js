/**
 * Created by dlarchikov on 18.12.14.
 */
var CEvents = function (socket) {
    return {
        authSuccess: function () {
            console.log('Привет!!!');
        },
        moveLeft: function () {
            NuPogodi.Wolf.moveWolfLeft();
        }
    };
};