class Stone{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.image=loadImage("images/stone.png")
        this.body= Bodies.circle(x,y,15,options)
        World.add(world,this.body)
    
    }
display(){
    ellipseMode(CENTER)
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,25,25)
}



}