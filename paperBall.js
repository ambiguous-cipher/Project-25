class Paper{
    constructor(){
        var options = {
            isStatic: false,
            restituition: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(100, 200, 50, options);
            World.add(world, this.body)
            this.image = loadImage("sprites/paper.png");
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        fill(255);
        strokeWeight(20);
        stroke(255);
        ellipse(pos.x, pos.y, 15, 13);
        image(this.image, pos.x, pos.y, 50, 50);
        
    }
}