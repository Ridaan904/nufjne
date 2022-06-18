canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 1;
ctx.rect (x = 150, y = 143, width = 430, height = 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(x = 250, y = 210, r = 40, startAngle = 0, endAngle = 2 * Math.PI);   
ctx.stroke();

// Similarly, create a black circle with position 350 and 210

// Similarly, create a red circle with position 210 and 40

// Similarly, create an orange circle with position 300 and 250

// Similarly, create a green circle with position 400 and 250
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(x = 350, y = 210, r = 40, startAngle = 0, endAngle =  2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(x = 450, y = 210, r = 40, startAngle = 0, endAngle =  2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "orange"
ctx.lineWidth = 5;
ctx.arc(x = 300, y = 250, r = 40, startAngle = 0, endAngle =  2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(x = 400, y = 250, r = 40, startAngle = 0, endAngle = 2 * Math.PI);
ctx.stroke();