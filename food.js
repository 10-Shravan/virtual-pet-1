class Food{
    constructor(){
        this.foodStock=0;
        this.lastFed=0;
    }
    display(){
        if(this.lastFed>=12){
            text ("last feed:"+lastFed%12+"PM",350,30);

        }else if(lastFed==0){
 text("last feed:12 AM",350,30)
        }else{
    text("last feed:"+lastFed+"AM",350,30);
        }

        var x=80,y=100;

        imageMode (CENTER);
        image(this.image,720,220,70,70);


        if(this.foodStock!==0){
            for (var i=0;i<this.foodStock;i++){
            if(i%10==0)
            x=80;
            y=y+50;
            }
            image(this.image,x,y,50,50);
            x=x+30;
        }
    }

}