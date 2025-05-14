const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
// Инициализация счетчика
let score = 0;
let scoreDisplay = document.getElementById('score'); // Предполагается, что у вас есть HTML-элемент с id="score" для отображения счета
let maxScore = localStorage.getItem('maxScore') || 0;
const maxScoreDisplay = document.getElementById('maxScore');
maxScoreDisplay.textContent = `Максимальный счет: ${maxScore}`;
let isGameOver = false; // флаг, чтобы перезагрузку делать один раз
let gameOverTimeout;

cactus.style.animationPlayState = 'running';
document.addEventListener("keydown", function(event) {
  console.log("fsfsfs")  
  jump();
});

function jump () {
    if (dino.classList != "jump") {
    dino.classList.add("jump")
    }
    setTimeout(function() {
    dino.classList.remove("jump")
    }, 300)
}
 
let isAlive = setInterval (function() {
    if (isGameOver) return; // чтобы не выполнять повторно после окончания игры
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
      // При окончании игры можно остановить таймер
        
        isGameOver = true;
        document.getElementById("game-over").innerHTML="game-over😔"
         // Остановить анимацию кактуса
        cactus.style.animationPlayState = 'paused';

        clearInterval(scoreTimer);
        clearInterval(isAlive);
        gameOverTimeout = setTimeout(() => {
            location.reload();
        }, 3000);
    }
    
}, 10)  



// Функция для обновления счета
function updateScore(points) {
  score += points;
  scoreDisplay.textContent = `Счет: ${score}`;
   if (score > maxScore) {
    maxScore = score;
    localStorage.setItem('maxScore', maxScore);
    maxScoreDisplay.textContent = `Максимальный счет: ${maxScore}`;
  }
}

// Пример использования:
// Вызовите updateScore(10) при успешном прыжке
// Вызовите updateScore(50) при успешном прохождении препятствия

// Также можно добавить таймер для автоматического увеличения счета со временем
let scoreTimer = setInterval(() => {
  updateScore(1); // Увеличиваем счет на 1 каждую секунду
}, 1000);
