window.onload = function() {
    //declaring the necessary variables
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let x = 250;
    let y = 250;
    let radius = 100;
    
    //initiating reusable core variables
    var t = Date.now();
    let speed = 200;
    let dirX = 1;
    let dirY = 1;
    let velocity = 0;
    let speedUp = document.getElementById('speedUp');
    let speedDown = document.getElementById('speedDown');

    speedUp.onmousedown = function() { velocity='increase';}
    speedDown.onmousedown = function() { velocity='decrease';}

    speedUp.ontouchstart = function() { velocity='increase';}
    speedDown.ontouchstart = function() { velocity='decrease';}

    speedUp.onmouseup = function() { velocity='constant';}
    speedDown.onmouseup = function() { velocity='constant';}

    speedUp.ontouchend = function() { velocity='constant';}
    speedDown.ontouchend = function() { velocity='constant';}

    
    //Defining Game frame
    function draw() {
        var timePassed = (Date.now() - t) / 1000;
        t = Date.now();

        context.clearRect(0, 0, 1800, 1200);
        
        context.font = '25px Arial';
        context.fillStyle = 'brown';
        context.fillText("Created by: Mr. Pankaj Kumar Panda", 20, 30);

        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.fillStyle="brown";
        context.fill();

        if (velocity=='increase') {
            speed += 10;
        }
        else if(velocity=='decrease') {
            speed -= 10;
        }

        x += dirX*(speed * timePassed);
        y += dirY*(speed * timePassed); 

        if (x >= 1200 - radius || x <= radius) {
            dirX *= -1;
            
        }
        if (y >= 600 - radius || y <= radius) {
            dirY *= - 1;
            
        }
        window.requestAnimationFrame(draw);
    }
    draw();
}
