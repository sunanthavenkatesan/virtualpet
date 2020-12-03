//Create variables here
var dogHappy,dogSitting,dog,database,foodstock,foods,position,button,hour,button2,milk;
function preload()
{
  //load images here
  dogHappy=loadImage('dogimg1.png')
  dogSitting=loadImage('dogimg.png')
}

function setup() {
	createCanvas(500,500);
database=firebase.database()
foodStock = database.ref('milkbottles');
  foodStock.on("value", readStock, showError)
  dog=createSprite(250,250,40,40)
  dog.addImage(dogSitting)
  dog.scale=0.32
  foods=20
 button=createButton('feed the dog')
 button2=createButton('add food')
 button2.position(150,100)
 button.position(100,100)
 milk=new Milk()
}


function draw(){  
  background(0)
     button.mousePressed(change())
     button2.mousePressed(plusstock(foods))
   

     gethour()

  milk.display()

  drawSprites();
  //add styles here
  /*if(foods>10){
    text(7)
    stroke('green')
      text("milk remaining:"+foods,250,400)
  }else{
    text(7)
    stroke('red')
      text("milk remaining:"+foods,250,400)
  }
  text(7)
    stroke('red')
  text("note:press the key to feed the dog(key went down)",250,40)
  */
}
function readStock(data){
foods=data.val()
}
function writeStock(x){
if(x<=0){
x=0
}else{
  x=x-=1
}
database.ref('/').update({
  foodleft:x
  
})

console.log(x)
}
function plusstock(y){
  if(y>=20){
    y=20
    }else{
      y+=1
    }
    database.ref('/').update({
      foodstock:y
      
    })
    
    console.log(y)
}
function showError(){
  console.log('problems with the database')
}
async function gethour(){
  if( button.mousePressed(change())){
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  
     hour = datetime.slice(11,16);
    var pm=hour.slice(0,3)
    var unit
    var ref=database.ref("lastfed")
ref.on("value",some)
some=hour.val()
    if (pm>00&&pm<12) {
      unit="AM"
      text("last fed:"+hour+unit,50,100)
    }else if(pm>12&&pm<=24)
   unit="pm"
   text("last fed:"+hour+unit,50,100)

  }
  database.ref('/').update({
    lastfed:hour.val()
  })
}
function change(){
dog.changeImage(dogHappy)
writeStock(foods)
if (frameCount===frameCount+200) {
  dog.changeImage(dogSitting)
}
database.ref('/').update({
  
})
}