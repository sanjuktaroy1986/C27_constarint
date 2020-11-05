class Ground{

    constructor(x,y,width,height){

        var options={

           isStatic:true
        }
        //this.image=loadImage("sprites/ground.png")  
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(myworld,this.body);
        

    }

    display(){
        
       fill("brown")      
       rectMode(CENTER) 
       rect(this.body.position.x,this.body.position.y,this.width,this.height);
       
    }
    
}

