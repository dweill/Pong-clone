class Score {
  constructor(x, y) {
    this.score = 0;
    this.x = x;
    this.y = y;
  }

  render() {
    context.font = '50px ZCOOL QingKe HuangYou';
    context.fillText(`${this.score}`, this.x, this.y)
    context.fillStyle = '#FFF';
  }

  update() {
    this.score += 1;
  }
}