// import Phaser from node_modules
import Phaser from 'phaser';

// import scenes
import MainScene from './scenes/MainScene'; //New: Importong mainScene

// Game configurations
const config = {
  // choosing the best render for device
  type: Phaser.AUTO,

  //canvas
  width: 800,
  height: 600,

  //background color
  backgroundColor: '#2d2d2d',

  //DOM element ID
  parent: 'game-container',

  //scale manager config
  scale: {
    // center on X and Y
    autoCenter: Phaser.Scale.CENTER_BOTH,

    //mode
    mode: Phaser.Scale.FIT,
  },

  //physics
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        //no gravity (top-down gane)
        y: 0,
      },

      debug: true
    }
  },
  // allow pixels
  pixelArt: true,

  // anti-aliasing
  antialias: false,

  // Changed: here goes the scenes
  scene: [MainScene]
};

//creating instances
new Phaser.Game(config);