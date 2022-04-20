'use strict';

var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
const colors = document.querySelectorAll('aside div');
let pointY = 0;
let pointX = 0;
let drawing = false;

//defining the line color and width
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 5;

colors.forEach((button) => button.addEventListener('click', (e) => {
    console.log(e.target.className);
    ctx.strokeStyle = `${e.target.className}`;
}));

function draw(e) {
    if (!drawing) return;
    ctx.beginPath();
    ctx.moveTo(pointX, pointY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [pointX, pointY] = [e.offsetX, e.offsetY];
}
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    console.log(e);
    pointX = e.offsetX;
    pointY = e.offsetY;
    console.log(pointX, pointY);
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => {
    drawing = false;
});
canvas.addEventListener('mouseout', () => {
    drawing = false;
});