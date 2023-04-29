/* import image bg, import music (play at start), import sound (play upon mouse-click), add visual sfx upon mouseclick
*/

var img
var audioFile
var sfx
var particles = [];
var gravity = 0.03

function preload(){
  img = loadImage("bg.png");
  audioFile = loadSound('music.mp3');
  sfx = loadSound('moktak.mp3');
}



function setup() {
  createCanvas(img.width, img.height);
  
  colorMode(HSB, 360, 255, 255);
  noStroke();
  
  audioFile.setLoop(true);
  audioFile.play();
  
  print("LanWang_FinalProject_CyberMoktak")
  
}


//add visual efx
function draw(){
  image(img,0,0);
  for (let i = particles.length - 1; i>=0; i--) {
    let p = particles[i];
    let size = map(p.age, 0, p.lifespan, p.size, 0);
    fill(p.color);
    ellipse(p.x, p.y, size);
    
    p.x += p.directionX * p.speed;
    p.y += p.directionY * p.speed;
    
    p.directionY += gravity;
    
    p.age++
    
    if (p.age > p.lifespan) {
      particles.splice(i, 1);
    }
  }
}

function mousePressed() {
  let randomColor = color(random(360), 255, 255);
  for (let i = 0; i < 10; i++) {
    createParticle(mouseX, mouseY, randomColor);
     togglePlay();
  }
}

function createParticle(pX, pY, pColor) {
  
  let p = {
    x: pX,
    y: pY,
    directionX: random(-1, 1),
    directionY: random(-1, 1),
    speed: random(2, 6),
    size: random(12, 24),
    lifespan: random(10, 20),
    age: 0,
    color: pColor
  }
  
  particles.push(p);
}

//add sfx upon mouseclick
function togglePlay(){
  sfx.play();
}
