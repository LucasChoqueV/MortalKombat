import Bootloader from './Bootloader.js';
import Play from './scenes/Play.js';

const config = {
    title: "MortalKombat",
    version: "0.0.1",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 800,
        height: 600,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#f9ca24",
    pixelArt: true,
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 500
            },
            debug: true,

        }
    },
    scene: [
        Bootloader,
        Play,
    ]
};

new Phaser.Game(config);