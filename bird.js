class bird extends BaseClass{

    constructor(x,y){
        super(x,y,50,50);
        this.image = loadImage("sprite/bird.png");
    }
    display(){
        super.display();
    }
}