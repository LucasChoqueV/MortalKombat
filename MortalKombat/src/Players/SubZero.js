import PlayerBase from "./PlayerBase.js";

class SubZero extends PlayerBase{
    constructor(config, input){
        super({
            ...config,
            spriteName: "subzero",
            actualAnimation: "subzero_idle"
        });
        this.cursor = input.keyboard.addKeys("w,a,s,d");

    }

    update(){
        if (this.cursor.d.isDown){
            this.actualAnimation = "subzero_walk";
            this.moveRight();
        }else if(this.cursor.a.isDown) {
            this.actualAnimation = "subzero_walk";
            this.moveLeft();
        }
        else{
            this.actualAnimation = "subzero_idle";
            this.moveIdle();
        }
        if (Phaser.Input.Keyboard.JustDown(this.cursor.w) && !this.jumping){
            this.actualAnimation = "subzero_jump";
            this.moveJump();
            
        }else if (this.body.blocked.down){
            this.jumping = false;
            this.body.setVelocityY(0);
            this.body.setOffset(5, 6);
        }
    }

}

export default SubZero;