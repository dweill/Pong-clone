class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.startSpeed = 2
    this.x_speed = this.startSpeed;
    this.y_speed = this.startSpeed;
    this.radius = 5;
  }

  render() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
    context.fillStyle = "#FFF";
    context.fill();
  }

  update(paddle1, paddle2, player, computer) {
    this.x += this.x_speed;
    this.y += this.y_speed;
    let top_x = this.x - 5;
    let top_y = this.y - 5;
    let bottom_x = this.x + 5;
    let bottom_y = this.y + 5;

    //top and bottom
    if(this.y - 5 < 0) {
      this.y = 5;
      this.y_speed = -this.y_speed;
    } else if(this.y + 5 > 500) {
      this.y = 495;
      this.y_speed = -this.y_speed;
    }

    if(this.x < 0) {
      this.x_speed = this.startSpeed;
      this.y_speed = this.startSpeed;
      this.x = 600;
      this.y = 300;
      computer.score.update();
    } else if(this.x > 1300) {
      this.x_speed = -this.startSpeed;
      this.y_speed = -this.startSpeed;
      this.x = 600;
      this.y = 300;
      player.score.update();
    }

    if(top_x < 100) {
      if(top_x < (paddle1.x + paddle1.width) && bottom_x > paddle1.x && top_y < (paddle1.y + paddle1.height) && bottom_y > paddle1.y) {
        // hit the player's paddle
        this.y_speed += -(paddle1.y_speed / 2);
        this.x_speed = -this.x_speed + 1 
        this.x += this.x_speed;
      }
    } else {
      if(top_x < (paddle2.x + paddle2.width) && bottom_x > paddle2.x && top_y < (paddle2.y + paddle2.height) && bottom_y > paddle2.y) {
        // hit the computer's paddle
        this.y_speed += -(paddle2.y_speed / 2);
        this.x_speed = -this.x_speed - 1
        this.x += this.x_speed;
      }
    }
  }
}