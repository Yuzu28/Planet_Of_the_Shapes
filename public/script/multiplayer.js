var socket;
console.log('it loaded')
var init = function() {
    socket = SocketClient();
    socket
}
$(document).ready(init);