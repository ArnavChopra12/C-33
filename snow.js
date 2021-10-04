class Snow{
    constructor(x,y,r){
        var options={
            restitution:0.4,
            density:0.5,

        }
        this.r=r;
    this.body=Bodies.circle(x,y,this.r,options);
    this.snow1=loadImage('snow4.webp');
    World.add(world,this.body);
    }
display(){
    var pose=this.body.position;
    var angle=this.body.angle;
    push();
    rotate(angle);
    translate(pose.x,pose.y);
    imageMode(CENTER);
    image(this.snow1,0,0,this.r,this.r);
    pop();
}


}