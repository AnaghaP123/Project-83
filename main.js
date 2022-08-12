var mouseEvent = "empty";
var last_x, last_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "black";
var line_width = 1;
canvas.addEventListener("mousedown", md);
function md(e)
{
    color = document.getElementById("color").value;
    line_width = document.getElementById("width").value;
    mouseEvent = "mouseDown";
};
canvas.addEventListener("mousemove", mm);
function mm(e)
{
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    
    if (mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke()
    }
    last_x = current_x;
    last_y = current_y;
}
canvas.addEventListener("mouseup", mu);
function mu(e)
{
    mouseEvent = "mouseUp";
};
canvas.addEventListener("mouseleave", ml);
function ml(e)
{
    mouseEvent = "mouseLeave";
};
function ClearArea()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

var width = screen.width;
nw = width - 70;
nh = screen.height - 300;


if (width < 992)
{
    document.getElementById("myCanvas").width = nw;
    document.getElementById("myCanvas").height = nh;
    document.body.style.overflow = "hidden";
}



canvas.addEventListener("touchstart", mt);
function mt(e)
{
    last_x = e.touches[0].clientX - canvas.offsetLeft;
    last_y = e.touches[0].clientY - canvas.offsetTop;
    color = document.getElementById("color").value;
    line_width = document.getElementById("width").value;
};
canvas.addEventListener("touchmove", mtm);
function mtm(e)
{
    current_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke()

    last_x = current_x;
    last_y = current_y;
}