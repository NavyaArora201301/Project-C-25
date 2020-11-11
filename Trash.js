class Trash {
    constructor (x,y,width,height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = 115;
        this.height = 150;
        this.trash = loadImage("dustbingreen.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.trash,pos.x,pos.y, this.width, this.height);
    }
};