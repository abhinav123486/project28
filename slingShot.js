class slingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        Constraint.create(options);
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
        var bodyA = this.sling.bodyA.position;
        var bodyB = this.pointB;
        push()
        strokeWeight(5);
        line(bodyA.x,bodyA.y,bodyB.x,bodyB.y);
        pop()
        }

    }
    
}