import "./style.css";
import Phaser from "phaser";

class MyGame extends Phaser.Scene {
  constructor() {
    super("game");
  }

  preload() {
    this.load.image("logo", "/assets/logo.png");
  }

  create() {
    const logo = this.add.image(400, 150, "logo");

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: "Power2",
      yoyo: true,
      loop: -1,
    });
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "phaser-game-container",
  width: 800,
  height: 450,
  scene: MyGame,
};

new Phaser.Game(config);
