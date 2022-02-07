let x = 255;
let y = 255;
let z = 255;

let bg = `rgb(255, 255, 255)`


document.onmousemove = handleMouseMove;
document.onmousedown = mouseClicked;
document.onmouseup = mouseUnClicked;


function handleMouseMove(event) {

        event = event || window.event;
        const widthCof = window.innerWidth / 256;
        const heightCof = window.innerHeight / 256;
        let X = (event.pageX / widthCof);
        let Y = (event.pageY / heightCof);
        document.querySelector('body').style.backgroundColor = `rgb(${X}, ${Y}, ${(Y/2) + (X/2)})`;
        document.querySelector('#hiddenText').style.color = `rgb(${X}, ${Y}, ${(Y/2) + (X/2)})`;

        // Use event.pageX / event.pageY here
    }

function mouseClicked(){
    console.log(document.querySelector('h1'))
    document.querySelector('h1').style.color = "red";
    document.querySelector('#hiddenText').style.color = `RED`;
}
function mouseUnClicked(){
    document.querySelector('h1').style.color = "black";
    document.querySelector('#hiddenText').style.color = document.querySelector('body').style.backgroundColor;
}