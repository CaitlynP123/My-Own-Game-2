class Rocket{
    constructor(x,y){
    
        this.sprite = createSprite(x,y)
        this.sprite.addAnimation("r1", rocketImg1)
        this.sprite.scale = 0.5

    }  

    move(){
        if(keyDown("right")){
            this.sprite.x +=10
        }
        if(keyDown("left")){
            this.sprite.x -=10
        }
    }

    
}