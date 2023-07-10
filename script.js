var score = 0;
var target = document.getElementById('target');
var scoreElement = document.getElementById('score');

function updateScore() {
  scoreElement.textContent = 'Pontos: ' + score;
}

function generateRandomPosition() {
  var containerWidth = target.parentElement.offsetWidth;
  var containerHeight = target.parentElement.offsetHeight;
  var targetWidth = target.offsetWidth;
  var targetHeight = target.offsetHeight;
  var maxX = containerWidth - targetWidth;
  var maxY = containerHeight - targetHeight;

  var randomX = Math.floor(Math.random() * maxX);
  var randomY = Math.floor(Math.random() * maxY);

  target.style.left = randomX + 'px';
  target.style.top = randomY + 'px';
}

function increaseScore() {
  score++;
  updateScore();
  generateRandomPosition();
}

target.addEventListener('click', increaseScore);

updateScore();
generateRandomPosition();
