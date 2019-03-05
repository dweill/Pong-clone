class Computer {
  constructor() {
    this.paddle = new Paddle(1225, 250, 10, 50);
    this.score = new Score(750, 100);
  }

  render() {
    this.paddle.render();
    this.score.render();
  }

  update(ball) {
    let y_pos = ball.y;
    let diff = -((this.paddle.y + (this.paddle.height / 2)) - y_pos);
    if(diff < 0 && diff < -4) {
      diff = -5;
    } else if(diff > 0 && diff > 4) {
      diff = 5;
    }
    this.paddle.move(0, diff);    
    if(this.paddle.y < 0) {
      this.paddle.y = 0;
    } else if (this.paddle.y + this.paddle.height > 500) {
      this.paddle.y = 500 - this.paddle.height;
    }
  };
}