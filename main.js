const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const sizeEl = document.querySelector('#size');
const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');
const colorEl = document.querySelector('#color');
const clear = document.querySelector('#clear');

let size = 5;
let isPressed = false;
let color = colorEl.value
let x;
let y;

setSize(size);

canvas.addEventListener('mousedown', (e)=> {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup', (e)=> {
    isPressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e)=> {
    color = colorEl.value;
    if (isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2)

        x = x2;
        y = y2;
    }
})

function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size *2;
    ctx.stroke();
}

increase.addEventListener('click', ()=> {
    size ++;
    setSize(size);
})
decrease.addEventListener('click', ()=> {
    if (size > 1) size --;
    else return 1;
    setSize(size);
})

function setSize(){
    sizeEl.innerText = size;
}

colorEl.addEventListener('click', (e)=> {
    color = colorEl.value;
})

clear.addEventListener('click', (e)=> {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
})
