var database;
var gameState =  0;
var playerCount;
var form,player,game;
var name;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new Game();
  game.getState();
  game.start();
  
  
}

function draw(){
  

  if(playerCount===2){
    game.update(1)
  }

  if(gameState===1){
    clear();
    game.play();

  }
    
    
  
}



