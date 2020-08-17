var canvas, database;
var backgroundImg,database,playerCount,form,player,game;
var gameState=0;
var allPlayers;
var distance = 0;
var cars,car1,car2,car3,car4;
var car1image,car2image,car3image,car4image,groundimage,trackimage;

function preload(){
car1image=loadImage("images/car1.png");
car2image=loadImage("images/car2.png");
car3image=loadImage("images/car3.png");
car4image=loadImage("images/car4.png");
groundimage=loadImage("images/ground.png");
trackimage=loadImage("images/track.jpg");
}

function setup(){
  database = firebase.database();
  createCanvas(displayWidth-30,displayHeight-30);
  game=new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}


