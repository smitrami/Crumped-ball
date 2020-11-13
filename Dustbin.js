class Dustbin {
    constructor(x, y, width, height) {
        var options =
        {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.body);
    }
    display() {
        //rectMode(CENTER);
        var pos = this.body.position;
        strokeWeight(1);
        //stroke("brown");
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
    }

}