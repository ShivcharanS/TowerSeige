class SlingShot{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stifness : 0.04,
            length : 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options)
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA = null;
    }
    
    display(){
        if(this.sling.bodyA){
            this.pointA = this.sling.bodyA.position
            this.pointB = this.pointB
        }
        push()
        stroke(48,22,8)
        strokeWeight(4)
        if(pointA.x < 220){
            line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
        }
        else{
            strokeWeight(3);
            line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
        }
    }
}