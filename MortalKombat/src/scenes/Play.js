import Scorpion from "../Players/Scorpion.js";
import SubZero from "../Players/SubZero.js";

class Play extends Phaser.Scene{
    constructor(){
        super({
            key: "Play"
        });
    }

    init(){
        console.log("Play!");
    }

    create(){
        this.add.image(0, 0, "background").setOrigin(0, 0);

        // add walls, creo un grupo de fisicas estaticas
        this.walls = this.physics.add.staticGroup();
        this.walls.create(400, this.scale.height - 40, "floor");
        this.walls.refresh();

        this.subZero = new SubZero({
            scene: this,
            x: 100,
            y: this.scale.height - 290,
        }, this.input);

        this.scorpion = new Scorpion({
            scene: this,
            x: 600,
            y: this.scale.height - 290,
        })

        // colliders
        this.physics.add.collider([this.subZero, this.scorpion], this.walls);
        this.physics.add.collider(this.subZero, this.scorpion);
    }

    update(){
        this.subZero.update();
        this.scorpion.update();
    }
}

export default Play;