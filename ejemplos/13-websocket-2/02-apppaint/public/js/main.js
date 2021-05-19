var socket = io.connect();

//load socket.io-client and connect to the host that serves the page
var theField = document.getElementById("playingfield");
var ctx = theField.getContext("2d");
theField.addEventListener('touchstart', onTouchStart, false);
theField.addEventListener('touchmove', onTouchMove, false);
var bMouseDown = false;

function Coords(x, y, r, g, b) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
}
var coords = new Coords(0, 0, 0, 0, 0)

window.addEventListener("load", function () { //when page loads
    document.getElementById("blackCheck").checked = true;

    socket.emit('refresh', 'rectlist');
    document.getElementById("blackCheck").addEventListener("change", function () { //add event listener for when checkbox changes
        coords.r = 0
        coords.g = 0
        coords.b = 0
    });
    document.getElementById("blueCheck").addEventListener("change", function () { //add event listener for when checkbox changes
        coords.r = 0
        coords.g = 0
        coords.b = 255
    });
    document.getElementById("redCheck").addEventListener("change", function () { //add event listener for when checkbox changes
        coords.r = 255
        coords.g = 0
        coords.b = 0
    });
    document.getElementById("greenCheck").addEventListener("change", function () { //add event listener for when checkbox changes
        coords.r = 0
        coords.g = 255
        coords.b = 0
    });
});

socket.on('info', function (data) {
    document.getElementById("information").innerHTML = data;
})

socket.on('rect', function (data) {
    document.getElementById("information").innerHTML = 'x: ' + data.x + " - y: " + data.y;
    ctx.fillStyle = "rgb(" + data.r + ", " + data.g + ", " + data.b + ")";
    ctx.fillRect(data.x - data.w / 2, data.y - data.h / 2, data.w, data.h);
})

socket.on('rectlistdata', function (data) {
    document.getElementById("information").innerHTML = "Received UpTo Date Data from Server";
    ctx.clearRect(0, 0, 1280, 768);
    for (var k in data) {
        var r = data[k];
        if (r != null) {
            ctx.fillStyle = "rgb(" + r.r + ", " + r.g + ", " + r.b + ")";
            ctx.fillRect(r.x - r.w / 2, r.y - r.h / 2, r.w, r.h);
        }
    }
})
socket.on('address', function (data) {
    document.getElementById("address").innerHTML = data;
})

function onMouseMove(e) {
    if (bMouseDown) {
        var box = theField.getBoundingClientRect();
        //var r = new Coords();
        var X = e.clientX - box.left;
        var Y = e.clientY - box.top;
        coords.x = X;
        coords.y = Y;
        var R = coords.r
        var G = coords.g
        var B = coords.b

        socket.emit('rect', coords);
        document.getElementById("information").innerHTML =
            'x: ' + parseInt(X) + " - y:" + parseInt(Y) + ' @ ' +
            'R: ' + parseInt(R) + " - G:" + parseInt(G) + " - B:" + parseInt(B);
    }
}
function onMouseUp(e) {
    bMouseDown = false;
}
function onMouseLeave(e) {
    bMouseDown = false;
}

function onMouseDown(e) {
    bMouseDown = true;
    var box = theField.getBoundingClientRect();
    var X = e.clientX - box.left;
    var Y = e.clientY - box.top;
    coords.x = X;
    coords.y = Y;
    var R = coords.r
    var G = coords.g
    var B = coords.b

    socket.emit('rect', coords);
    document.getElementById("information").innerHTML =
        'x: ' + parseInt(X) + " - y:" + parseInt(Y) + ' @ ' +
        'R: ' + parseInt(R) + " - G:" + parseInt(G) + " - B:" + parseInt(B);
}

function onTouchStart(e) {
    e.preventDefault();
    if (e.touches) {
        //One finger
        if (e.touches.length >= 1) {
            var t = e.touches[0];

            var box = theField.getBoundingClientRect();
            var X = t.pageX - box.left;
            var Y = t.pageY - box.top;

            coords.x = X;
            coords.y = Y;
            socket.emit('rect', coords);
        }
    }
}
function onTouchMove(e) {
    e.preventDefault();
    if (e.touches) {
        //One finger
        if (e.touches.length >= 1) {
            var t = e.touches[0];

            var box = theField.getBoundingClientRect();
            var X = t.pageX - box.left;
            var Y = t.pageY - box.top;

            coords.x = X;
            coords.y = Y;
            socket.emit('rect', coords);
        }
    }
}