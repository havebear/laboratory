var toggleAnim = document.querySelector('.toggleAnim');
var balls = document.getElementsByClassName('ball');
var animating = false;

toggleAnim.addEventListener('click', function(e) {
  animating = !animating;
  toggleAnim.textContent = animating ? 'Stop Animation' : 'Start Animation';

  Array.prototype.forEach.call(balls, function(ball) {
    ball.className = animating ? 'ball ball-running' : 'ball';
  });
});