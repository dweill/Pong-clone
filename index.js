const animate = window.requestAnimationFrame;

const canvas = document.createElement('canvas');
const width = 1300;
const height = 500;
canvas.width = width;
canvas.height = height;
const context = canvas.getContext('2d');

const startSpeed = 3;

let paused = false;
let playerPaused = false;
const ballState = {
  y_speed: startSpeed,
  x_speed: startSpeed
}

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
  checkPaused();
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
  if (paused) {
    context.font = '50px ZCOOL QingKe HuangYou';
    context.fillText(`PAUSED`, 550, 200)
    context.fillStyle = '#FFF';
  }

};


const keysDown = {};

window.addEventListener("keydown", function(event) {
  if (event.keyCode !== 32) {
    keysDown[event.keyCode] = true;
  }
});

window.addEventListener("keyup", function(event) {
  if (event.keyCode === 32) {
    paused = !paused;
    playerPaused = paused;
  } else if (event.keyCode === 27) {
    playerPaused = false;
  } else {
    delete keysDown[event.keyCode];
  }
});

const checkPaused = function() {
  if (paused) {
    ball.x_speed = 0;
    ball.y_speed = 0;
  } else {
    ball.y_speed = ballState.y_speed
    ball.x_speed = ballState.x_speed
  }
}

//TODO: STOP PLAYER PADDLE, SHOW PAUSED TITLE
