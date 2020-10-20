var mouseEvent="empty";
var last_x,last_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

 color="royalblue";
width_of_line="1";

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
 mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;

        console.log("last position X and Y coordinates= ");
        console.log("X= "+ last_x+"Y = "+last_y);
        ctx.moveTo(last_x,last_y);

        console.log("current position X and Y coordinates= ");
        console.log("X= "+ current_x+"Y = "+current_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();


    }
    last_x=current_x;
    last_y=current_y;



}



