const player = (name, symbol) => {
    return{name, symbol};
}

let user1;
let user2;
let turnCount;

const userInterfaceModule = (() => {

    const domElements = {
        startButton: document.querySelector("#start-button"),
        player1: document.querySelector("#player-1"),
        player2: document.querySelector("#player-2"),
        restartButton: document.querySelector("#restart-button"),
        box: document.querySelectorAll(".box"),
        announ: document.querySelector("#announcement")
    };

    var currentPlayer;

    function startGame(){

        if(domElements.player1.value=="" || domElements.player1.value=="")    return;

        domElements.box.forEach(element => {
            element.style.cursor = "pointer";
        });

        user1 = player(domElements.player1.value,"X");
        user2 = player(domElements.player2.value,"O");

        currentPlayer = user1;

        domElements.startButton.classList.add("hidden");
        domElements.player1.classList.add("hidden");
        domElements.announ.innerHTML = "Good Luck";
        domElements.player2.classList.add("hidden");
        domElements.restartButton.classList.remove("hidden");
    }

    domElements.box.forEach(element => {
        element.addEventListener('click',clickEvent);
    });

    function clickEvent(){
        if (!(this.innerHTML=="")){
            domElements.announ.innerHTML = "That tile is full";
            return;
        }
        this.innerHTML = currentPlayer.symbol;
        turnCount++;
        nextTurn();
    }

    function nextTurn(){
        checkWinner();
        if (turnCount == 9){
            drawGame();
        }

        if(currentPlayer == user1){
            currentPlayer = user2;
            return;
        }
        currentPlayer = user1;
    }

    function checkWinner(){
        const winCond = [
            [0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
        ]

        winCond.forEach(element => {
            if (!(domElements.box[element[0]].innerHTML == "" && domElements.box[element[2]].innerHTML == "" && domElements.box[element[1]].innerHTML == "")){
                if ( domElements.box[element[1]].innerHTML && domElements.box[element[2]].innerHTML == domElements.box[element[1]].innerHTML){
                    domElements.announ.innerHTML = "Winner is "+currentPlayer.name;
                }
            }
        });

    }

    domElements.startButton.addEventListener('click', startGame);

})();
