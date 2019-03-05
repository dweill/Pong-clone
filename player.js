class Player {
  constructor() {
    this.paddle = new Paddle(75, 250, 10, 50);
    this.score = new Score(500,100);
  }

  render() {
    this.paddle.render();
    this.score.render();
  }

  update() {
    for(var key in keysDown) {
      var value = Number(key);
      if(value == 38) {
        this.paddle.move(0, -4);
      } else if (value == 40) {
        this.paddle.move(0, 4);
      } else {
        this.paddle.move(0, 0);
      }
    }
  }
}