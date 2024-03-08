let num = 0;
const progressBar = document.getElementById('progress-bar');
const numberDisplay = document.getElementById('number');
const body = document.getElementById('body');

function updateProgressBar() {
  const progress = (num / 150) * 100;
  progressBar.style.width = progress + '%';
}

function updateNumberDisplay() {
  numberDisplay.textContent = num;
  updateProgressBar();
}

document.getElementById('subtract-btn').addEventListener('click', function() {
  if (num > 0) {
    num--;
    updateNumberDisplay();
    body.classList.remove('adding');
    body.classList.add('subtracting');
    setTimeout(() => body.classList.remove('subtracting'), 500);
  }
});

document.getElementById('add-btn').addEventListener('click', function() {
  if (num < 150) {
    num++;
    updateNumberDisplay();
    body.classList.remove('subtracting');
    body.classList.add('adding');
    setTimeout(() => body.classList.remove('adding'), 500);
  }
});

updateNumberDisplay(); // Ensure progress bar reflects initial number
