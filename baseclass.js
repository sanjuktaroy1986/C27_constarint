class BaseClass{

    constructor(x,y,width,height,angle){

        var options={
            restitution:0.8,
            friction:1
        }
        this.width=width;
        this.height=height;
        this.image=loadImage("sprites/base.png");
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(myworld,this.body);
    }

    display(){
        
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();

}
}