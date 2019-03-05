const animate = window.requestAnimationFrame;

const canvas = document.createElement('canvas');
const width = 1300;
const height = 500;
canvas.width = width;
canvas.height = height;
const context = canvas.getContext('2d');

const player = new Player();
const computer = new Computer();
const ball = new Ball(600, 300);

window.onload = function() {
  document.body.appendChild(canvas);
  animate(step);
};

const step = function() {
  update();
  render();
  animate(step);
};


const update = function() {
  ball.update(player.paddle, computer.paddle, player, computer);
  computer.update(ball);
  player.update();
};

const render = function() {
  context.fillStyle = "#000";
  context.fillRect(0, 0, width, height);
  player.render();
  computer.render();
  ball.render();
};


const keysDown = {};

window.addEventListener("keydown", function(event) {
  keysDown[event.keyCode] = true;
});

window.addEventListener("keyup", function(event) {
  delete keysDown[event.keyCode];
});