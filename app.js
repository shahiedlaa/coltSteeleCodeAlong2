
const p1 = {
    display: document.querySelector('#p1Display'),
    point: document.querySelector('#p1Point'),
    score: 0
}

const p2 = {
    display: document.querySelector('#p2Display'),
    point: document.querySelector('#p2Point'),
    score: 0
}

const resetButton = document.querySelector('#reset');
const playTo = document.querySelector('#winScore');
let winningScore = 3;
let gameOver = false;

function updateScores(player, opponent) {
    if (!gameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.point.setAttribute('disabled', true);
            opponent.point.setAttribute('disabled', true);
            gameOver = true;
        }
        player.display.textContent = player.score;
    }
}

p1Point.addEventListener('click', function () {
    updateScores(p1, p2);
})

p2Point.addEventListener('click', function () {
    updateScores(p2, p1);
})

resetButton.addEventListener('click', () => {
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.point.removeAttribute('disabled')
    }
    gameOver = false;
})

playTo.addEventListener('change', () => {
    winningScore = parseInt(playTo.value);
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p.score;
    }
    gameOver = false;
})
