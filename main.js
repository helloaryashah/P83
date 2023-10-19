var mouseEvent = "empty";
var lastPositionOf_x, lastPositionOf_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "purple";
width_of_line = 2;
canvas.addEventListener("mousedown", md);
function md(e)
{
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup", mu);
function mu(e)
{
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave", ml);
function ml(e)
{
    mouseEvent = "mouseLeave";
}
canvas.addEventListener("mousemove", mm);
function mm(e)
{
    currentPositionOf_x = e.clientX - canvas.offsetLeft;
    currentPositionOf_y = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(lastPositionOf_x, lastPositionOf_y);
        ctx.lineTo(currentPositionOf_x, currentPositionOf_y);
        ctx.stroke();
    }
    lastPositionOf_x = currentPositionOf_x;
    lastPositionOf_y = currentPositionOf_y;
}
var last_position_of_x, last_position_of_y;
width = screen.width - 70;
height = screen.height - 300;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    if(width < 992)
    {
        document.getElementById("myCanvas").width = width;
        document.getElementById("myCanvas").height = height;
        document.body.style.overflow = "hidden";
    }
    canvas.addEventListener("touchstart", ts);
    
    function ts(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends
        last_position_of_x = e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY-canvas.offsetTop;
    }
    canvas.addEventListener("touchmove", tm);
    function tm(e)
    {

         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }