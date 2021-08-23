import PlayerBase from "./PlayerBase.js";
class Scorpion extends PlayerBase{
    constructor(config){
        super({
            ...config,
            spriteName: "scorpion",
            actualAnimation: "scorpion_idle"
        });
        this.flipX = true;

        this.cursor = this.scene.input.keyboard.createCursorKeys();
    }

    update(){
        if (this.cursor.right.isDown){
            this.actualAnimation = "scorpion_walk";
            this.moveRight();
        }else if(this.cursor.left.isDown) {
            this.actualAnimation = "scorpion_walk";
            this.moveLeft();
        }else if(this.cursor.down.isDown){
            this.actualAnimation = "scorpion_down";
            this.moveDown();
        }else{
            this.actualAnimation = "scorpion_idle";
            this.moveIdle();
        }
        if (Phaser.Input.Keyboard.JustDown(this.cursor.up) && !this.jumping){
            this.actualAnimation = "scorpion_jump";
            this.moveJump();
            
        }else if (this.body.blocked.down){
            this.jumping = false;
            this.body.setVelocityY(0);
            this.body.setOffset(5, 6);
        }
    }
}

export default Scorpion;