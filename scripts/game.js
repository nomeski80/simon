let game = {
    score: 0,
    currentGame:[],
    playerMoves:[],
    choices:["button 1", "button 2","button 3", "button 4"],
}


function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    showScore();
    addTurn();
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random()* 4))]);
    // showTurns();
}

function showScore () {
    document.getElementById("score").innerText = game.score;
}

function lightsOn(circ) {
    document.getElementById(circ).classList.add("light");
    setTimeout(()=> {
        document.getElementById(circ).classList.remove("light")
    }, 400);
}


module.exports = { game, newGame, showScore, lightsOn };


