const ninjaboi = document.getElementById('ninja-boi');
const board = document.getElementById('border');
var speed = 100;
var acc = 5;
var sword = 0;
var myMusic = document.getElementById('sound')
var back = document.getElementById('border');
let isUsingSword = false;

function shipControlHold(event) {    
    
    if(event.keyCode == 37) {
        moveLeft();
        leftview()
    } 
    if(event.keyCode == 39) {
        moveRight();
        rightview() 
    }
    if(event.keyCode == 32) {
        fire();
        sword++;
        Music()
    }
    if(event.keyCode == 71) {
        skin1()
    }
    
}
function Music() {
    myMusic.play();
}

window.addEventListener('keydown', shipControlHold);

function shipControlUp(event) {
    speed = 10;
    frontview()
}
window.addEventListener('keyup', shipControlUp);
function moveLeft() {
    let Lpos = window.getComputedStyle(ninjaboi).getPropertyValue('left');
    if(parseInt(ninjaboi.style.left) < 100) {
            
        return

    } else {
        
        let pos = parseInt(Lpos)
        speed += acc 
        pos -= speed 
        ninjaboi.style.left = pos - 25 + "px"
    }
}
function moveRight() {
    let Lpos = window.getComputedStyle(ninjaboi).getPropertyValue('left')
    let W = window.getComputedStyle(board).getPropertyValue('width')
    
    if (parseInt(ninjaboi.style.left) > parseInt(W) - 180) {

        return

    } else {
        
        let pos = parseInt(Lpos)
        console.log(pos);
        speed += acc
        pos += speed 
        ninjaboi.style.left = pos + 25 +'px'
    }   
}
function createShurikenElement() {
    // On 10th shuriken laser wave come.
    
    if(sword == 10) {
        UsingSword()
        var xPos = parseInt(window.getComputedStyle(ninjaboi).getPropertyValue('left'))
        var newShuriken = document.createElement('img')
        newShuriken.className = "wave"
        newShuriken.src = './src/sword wave.png'; 
        newShuriken.style.position = 'absolute'
        newShuriken.style.left = (xPos + -195) + "px"
        newShuriken.style.bottom = '90px'
        sword = 0;
        let DATpos = parseInt(window.getComputedStyle(newShuriken).getPropertyValue('bottom'))
        if(DAtpos.bottom == 1800) {
            console.log(newShuriken)
            newShuriken.removeChild(newShuriken.childNodes[0])
        }
        return newShuriken;
    } else {
        var xPos = parseInt(window.getComputedStyle(ninjaboi).getPropertyValue('left'))
        var newShuriken = document.createElement('img')
        newShuriken.className = "laser"
        newShuriken.src = './src/Shuriken.png';
        newShuriken.style.position = 'absolute'
        newShuriken.style.left = (xPos + 95) + "px"
        newShuriken.style.bottom = '90px'
        newShuriken.classList.add("outer");
        return newShuriken;
    }
}
function moveUp (l) {
    var bpos = parseInt(l.style.bottom);
    bpos += 10
    l.style.bottom = bpos + "px";
}
function fire() {

    const laser = createShurikenElement(); 
    board.appendChild(laser);
    setInterval(function() {
        moveUp(laser);
    }, 1000  /60);

}
function leftview() {
    const view = document.getElementById('ninja-boi')
    view.src="./src/Right View 1.png"
}
function rightview() {
    const view = document.getElementById('ninja-boi')
    view.src="./src/L View v1.png"
}
function frontview() {
    const view = document.getElementById('ninja-boi')
    if (isUsingSword === false) {
        view.src="./src/ninja v1.png"
        document.getElementById('ninja-boi').style.height = "169px";
        document.getElementById('ninja-boi').style.width = "123px";
    }
}
function skin1() {
    const view = document.getElementById('ninja-boi')
    view.src ="./src/MInecraft Skin 1 .png"   
}
function UsingSword() {
    const view = document.getElementById('ninja-boi');
    isUsingSword = true;

    setTimeout(() => {
        isUsingSword = false;
    }, 500);
    view.src ="./src/Fixed Using Sword.png"
    document.getElementById('ninja-boi').style.height = "185px";
    document.getElementById('ninja-boi').style.width = "119px";
}