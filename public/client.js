var socket = io.connect('http://localhost:8000');
socket.on('connect', function(data) {
    socket.emit('join', 'Hello server from client');
});

socket.on('thread', function(data) {
    //$('#thread').append('<li>' + data + '</li>');
    // Replace jQuery code
    var element = document.querySelector('#thread');
    var child = document.createElement('li');
    child.innerHTML = data;
    element.appendChild(child);
});

/*function myFunction ()
{
    document.getElementsByTagName('form').submit();
    var x = document.getElementById("message");
    var message = x.value;
    socket.emit('messages', message);
    document.getElementsByTagName('form').reset();

    return false;
}*/


$('form').submit(function() {   // Need to replace this jQuery
    // var message = $('message').val();
    // Replace jQuery code
    var message = document.getElementById("message").value;
    
    socket.emit('messages', message);
    this.reset();

    return false;
});