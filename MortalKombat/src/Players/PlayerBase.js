class PlayerBase extends Phaser.GameObjects.Sprite{
    constructor(config){
        super(config.scene, config.x, config.y, config.spriteName);
        // agregamos el personaje a la scene
        this.scene = config.scene;
        // habilitamos las physicas
        this.scene.physics.world.enable(this);
        // agregamos el personaje a la escena 
        this.scene.add.existing(this);
        this.prevMov = "idle";
        this.jumping = false;
        this.setScale(2);
        this.body.setSize(25, 95);
        this.body.setOffset(5, 6);
        this.actualAnimation = config.actualAnimation;
        this.anims.play(this.actualAnimation);
    }

    moveRight(){
        this.body.setVelocityX(200);
        this.flipX = false;
        // esta condicion se hace para ejecutar el play 1 sola vez.
        if (this.prevMov !== "right" && !this.jumping){
            this.prevMov = "right";
            this.anims.play(this.actualAnimation);
        }
    }

    moveLeft(){
        this.body.setVelocityX(-200);
        this.flipX = true;
        // esta condicion se hace para ejecutar el play 1 sola vez.
        if (this.prevMov !== "left" && !this.jumping){
            this.prevMov = "left";
            this.anims.play(this.actualAnimation);
        }
    }

    moveIdle(){
        this.body.setVelocityX(0);
        if (this.prevMov !== "idle" && !this.jumping){
            this.prevMov = "idle";
            this.anims.play(this.actualAnimation);
        }
    }

    moveJump(){
        this.jumping = true;
        this.body.setVelocityY(-500);
        this.prevMov = "jump";
        this.anims.play(this.actualAnimation);
        this.body.setOffset(5, -16);
    }

    moveDown(){

        this.body.setVelocityX(0);
        // modificamos el colider
        this.body.setSize(14, 15);
        this.body.setOffset(20, 66);
        if (this.prevMov !== "down" && !this.jumping){
            this.prevMov = "down";
            this.anims.play(this.actualAnimation);
        }
    }

    
}

export default PlayerBase