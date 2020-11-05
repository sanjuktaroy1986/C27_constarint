class Chain{

constructor(BA,BB){
    
    var options={
        bodyA: BA,
        bodyB: BB,
        length:10,
        stiffness:0.05
  
      }

      this.chain=Constraint.create(options);
      World.add(myworld,this.chain)


}

display(){

    strokeWeight(3)
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y, this.chain.bodyB.position.x,this.chain.bodyB.position.y)

}

}