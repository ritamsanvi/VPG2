//Create variables here
var food,happydog
var database
var FoodS,FoodStock
var lastFed, Fedtime

function preload()
{
  dogImage= loadImage("images/dogImg.png");
  dog2Image= loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  dog= createSprite(250,250,10,10);
  database=firebase.database();

  var foodStock=database.ref('food')
  foodStock.on("value",readStock);

  dog.addImage(dogImage);
  dog.scale=0.5

  FoodObj= new Food();
  var fedbut= lastFed;
  var eattime= Fedtime

  feed= createButton("Feed The Dog");
  feed.position(700,95)
  feed.mousePressed(feedDog);

}

function draw() { 
  background("green"); 

  FoodObj.display();

  if(keyWentDown(UP_ARROW)){
    
  }
 
  Fedtime.database.ref("Fedtime")
    Fedtime.on("value", function(data){
      lastFed= data.val();
    })

  textSize(30)
  fill("yellow")
  text("Virtual Pet",200,20)

  if(lastFed>=12){
    text("LastFed:"+ lastFed%12+ "PM",350,30)
}else if(lastFed==0){
    text("LastFed: 12AM",350,30)
}else{
    text("LastFed:"+Lastfed+"AM",350,30)
}

  drawSprites();
  //add styles here

}

function readStock(data){
  FoodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

function feedDog(){
  dog.addImage(dogImage)
  FoodObj.updateFoodStock(FoodObj.getFoodStock()-1);
  database.ref('/').update({
   Food: FoodObj.getFoodStock(),
   eattime: hour,
  })
}

function addFoods(){
  FoodS++;
  database,ref('/').update({
    Food:FoodS
  })
}
