class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        this.load.setPath('./assets/');
        this.load.image([
            "background",
            "floor"
        ]);
        
        this.load.atlas("subzero", "subZero/subZero.png", "subZero/subzero_atlas.json");
        this.load.animation("subzeroAnim", "subZero/subzero_anims.json");

        this.load.atlas("scorpion", "scorpion/scorpion.png", "scorpion/scorpion_atlas.json");
        this.load.animation("scorpionAnim", "scorpion/scorpion_anims.json");

        this.load.on("complete", () => {
            this.scene.start("Play");
        })
    }

    create() {
    }
}
export default Bootloader;