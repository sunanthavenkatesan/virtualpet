class Milk{
    constructor(){
        this.some=rectangle(80,100,7,7)
this.image=loadImage('images/milk.png')
this.foodstock=foodstock.val()
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