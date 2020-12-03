class Milk{
    constructor(){
    
        this.some
       
this.image=loadImage('images/milk.png')
    }

 //add this        
        
        
   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }

   getFedTime(lastFed){
     this.lastFed=lastFed;
   }

   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }

    getFoodStock(){
      return this.foodStock;
        
    }
    display(){
        var x=80
        var y=100
        imageMode(CENTER)
        image(this.image,80,100,7,7)
        
        
        
if(this.foodstock!=0){
for(i=0;i<this.foodstock;i++){
if(i%10===0){
x=80;
y=y+50
}
image(this.image,x,y,7,7)
x=x+30
}
}
    }
}
