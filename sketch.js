var dog,happyDog,foodS,foodStock,dogI;
var fedTime,lastFed;
function preload()
{
dogI=loadImage("images/dogImg.png");
happyDog=loadImage("images/dogImg2.png");


function setup() {
  createCanvas(500, 500);
  foodObj=new Food(200,200);
  foodStock=database.ref("food");
  foodStock.on(value,readStock);
  dog.addImage(dogI);
  feed=createButton("feed The Dog")
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("add food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}
}


function draw() {  
background (46,139,87);
  drawSprites();
  dogFood.display();
 
  fedTime=database.ref("feed time");
  fedTime.on("value",Funtion(data){
    lastFed=data.val()
  });
}





function readStock(data){
foodS=data.val();
if(x<0){
  x=0;
}else{
  x=x-1;
}
}


function writeStock(){
  database.ref("/").update({
    food:x
  })
}

function feedDog(){
  dog.addImage(happyDog);


foodObj.updateFoodStock(foodObj.getFoodStock()-1)
database.ref("/").update({
  food:foodObj.getFoodStock(),
  fedTime:hour()
})
}


function addFoods(){
  foodS++;
  database.ref("/").update({
    Food:foodS
  })
}