class Poligon{
    constructor(x,y,width,height){
        var options = {
            'restitution' : 0.8,
            'friction' : 1.0,
            'density' : 1.0
        }
        this.height = height
        this.width = width
        this.image = loadImage("poligon.png");
        this.body = Bodies.circle(50,200,20);
        
        World.add(world,this.body)
    }
    displa(){
        var angle = this.body.angle
        push()
        translate(this.position.body.x,this.position.body.y,this.width,this.height)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,poligon.position.x,poligon.position.y,40,40);
        pop()
    }
}