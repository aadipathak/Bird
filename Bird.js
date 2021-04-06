class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
    this.tragectary = []
    
  }

  display() {
    
   // this.body.position.x = mouseX;
  //  this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var pos = [this.body.position.x,this.body.position.y];
      this.tragectary.push(pos);
    }
    
    for(var i = 0; i<this.tragectary.length;i=i+1){
    image(this.image1,this.tragectary[i][0],this.tragectary[i][1])
    }
    
  }
}
