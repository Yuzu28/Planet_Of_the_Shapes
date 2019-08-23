var socket;
let canvas = document.getElementById('Server_view');
consoel
let context = canvas.getContext('2d');
canvas.width = 5000;
canvas.height = 4000;

console.log('it loaded')
var init = function() {

    socket = SocketClient();
    socket
}
$(document).ready(init);