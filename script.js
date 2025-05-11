const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

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
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("game over")
    }
}, 10)  

// Инициализация счетчика
let score = 0;
let scoreDisplay = document.getElementById('score'); // Предполагается, что у вас есть HTML-элемент с id="score" для отображения счета

// Функция для обновления счета
function updateScore(points) {
  score += points;
  scoreDisplay.textContent = `Счет: ${score}`;
}

// Пример использования:
// Вызовите updateScore(10) при успешном прыжке
// Вызовите updateScore(50) при успешном прохождении препятствия

// Также можно добавить таймер для автоматического увеличения счета со временем
let scoreTimer = setInterval(() => {
  updateScore(1); // Увеличиваем счет на 1 каждую секунду
}, 1000);

// При окончании игры можно остановить таймер
// clearInterval(scoreTimer);