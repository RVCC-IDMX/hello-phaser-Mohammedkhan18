// import Phaser from node_modules
import Phaser from 'phaser';

/**
 * MainScene - First game scene
 * this class handles all the main game logic, rendering and interactions
 */
export default class MainScene extends Phaser.Scene {
  constructor() {
    // scene key
    super('MainScene');

    //initialize properties here
    this.score = 0;
  }


  /**
   * Preload - called before the scene creation
   * Used to load assets (images, sounds, etc)
   * ? to use this.load (image, audio)
   * ? ('function', 'location')
   */
  preload() {
    // Load Phaser Logo
    this.load.image('logo', 'assets/images/phaser-logo-200x150.png');

    //load second entity
    this.load.image('juan', 'assets/images/New Piskel.gif');

    //load a sound effect for click
    this.load.audio('click', 'assets/sounds/mixkit-sci-fi-click-900.wav');
  }
  /**
   * create = load after preload is complete
   * used to create objects and set up scene
   */
  create() {
    // title
    this.add.text(400, 100, 'Hello Phaser!', {
      font: '64px Arial',
      fill: '#ffffff'
    }).setOrigin(0.5);

    // Background details/instructions
    this.add.text(400, 180, 'My First Phaser Game', {
      font: '24px Arial',
      fill: '#ffffff'
    }).setOrigin(0.5);

    // add intecractive logo
    const logo = this.add.image(400, 300, 'logo');
    logo.setInteractive();
    // click Handler
    logo.on('pointerdown', () => {
      console.log('Logo Clicked!');

      // play sound @ click
      this.sound.play('click');

      // update score
      this.score += 10;
      this.scoreText.setText(`Score: ${this.score}`);
    });
    // efects
    logo.on('pointerover', () => {
      logo.setScale(1.1);
    });
    logo.on('pointerout', () => {
      logo.setScale(1.0);
    });


    // add interactive object
    const entity = this.add.image(400, 740, 'juan');
    entity.setInteractive();
    //click Handler
    entity.on('pointerdown', () => {
      console.log('Hola Juan');

      //sound @ click
      this.sound.play('click');
      this.sound.play('click');

      //score
      this.score += 25;
      this.scoreText.setText(`Score: ${this.score}`);

      // animation
      this.tweens.add({
        targets: entity,
        y: 300,
        duration: 1500,
        ease: 'Sine.inOut',
        yoyo: true,
        repeat: 0
      });
    });

    // score
    this.scoreText = this.add.text(16, 16, 'score: 0', {
      font: '32px Arial',
      fill: '#ffffff'
    });

    // instructions
    this.add.text(400, 500, 'Click the logo to increase your score!', {
      font: '18px Arial',
      fill: '#ffffff'
    }).setOrigin(0.5);

    // Adding an animation to the logo
    this.tweens.add({
      targets: logo,
      y: 320,
      duration: 1500,
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1
    });
    // Adding the timer
    this.timeLeft = 30; // 30 seconds
    this.timeText = this.add.text(16, 60, 'Time: 30', {
      font: '32px Arial',
      fill: '#ffffff'
    });

    // Create a timer event
    this.time.addEvent({
      delay: 1000, // 1000ms = 1 second
      callback: this.updateTimer,
      callbackScope: this,
      loop: true
    });

    updateTimer() {
      this.timeLeft--;
      this.timeText.setText(`Time: ${this.timeLeft}`);

      if (this.timeLeft <= 0) {
        // Game over logic
        this.add.text(400, 300, 'GAME OVER', {
          font: '64px Arial',
          fill: '#ff0000'
        }).setOrigin(0.5);

        // Stop the timer
        this.time.removeAllEvents();
      }
  }

  /**
   * Update - called frame by frame
   * game, logic, movement, etc.
   * @param {number} time - current time
   * @param {number} delta - Time since last frame
   */
  // eslint-disable-next-line no-unused-vars
  update(time, delta)
  {
    // time = total elapsed time (ms)
    // delta = time elapsed since last frame


  }
}
}