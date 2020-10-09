class Dustbin{
    constructor(x,y,height,width){
      
      var opt={
        isStatic:true
      }

      this.body= Bodies.rectangle(x,y,width,height,opt);
      this.width=width;
      this.height=height;

      World.add(world,this.body);


    }

    display(){

        rectMode(CENTER);
        fill("green");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);




    }



}