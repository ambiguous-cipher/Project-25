
class TrashSides {
    constructor(x, y){
        var options = {
            isStatic: true

        }
        
        this.body1 = Bodies.rectangle(x, y - 46 , 1, 180, options);
            World.add(world, this.body1);
        
        this.body2 = Bodies.rectangle(x + 80, y + 45, 180, 1, options);
            World.add(world, this.body2);
        
        this.body3 = Bodies.rectangle(x + 160, y - 46, 1, 180, options);
            World.add(world, this.body3);
        
        this.image = loadImage("sprites/dustbingreen.png");
    }

    display(){
        rectMode(CENTER);
        
        imageMode(CENTER);
        
        fill(255);
        
        image(this.image, 1080, 510, 210, 210);
    }

}