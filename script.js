const gameChoices = ["rock","paper","scissors"];

function getComputerChoice(){    
    return gameChoices.at(Math.floor(Math.random() * gameChoices.length))
};

function losePhrase(playerA, playerB){
    let result = "You Lose!";
    return result.concat(" ", playerA, " beats ", playerB);
}

function compare(player1, player2){
    
    if (player1 == player2)
        return 'tie'
    
    switch (gameChoices.indexOf(player1)){
        case 0:
            if (player2 == gameChoices[1]){
                return 1;
            }
            return 2;
        case 1:
            if (player2 == gameChoices[2]){
                return 1;
            }
            return 2;
        case 2:
            if (player2 == gameChoices[0]){
                return 1;
            }
        default:
             return 2;
    }

}

function playRound(playerSelection, computerSelection){

    let result = compare(playerSelection.toLowerCase(), computerSelection)

    if (result == 'tie') {
        return 0;
    } else
    {
        return result;
    }

};

function game(){

    // console.log("Let's play best of 5")
    let n=0
    let wins = 0
    let rock = document.getElementById('rock');
    let paper = document.getElementById('paper');
    let scissors = document.getElementById('scissors');
    let resultContainer = document.getElementById('result');
    let text = document.createElement('p');
    let score = document.createElement('p');
    resultContainer.appendChild(text);
    resultContainer.appendChild(score);
    [rock, paper, scissors].forEach(playerChoice => {
        playerChoice.addEventListener('click', (e) => {

                let computerSelection = getComputerChoice();
                let player = e.target.id;
                let result = playRound(player, computerSelection);
                    if (result === 0)
                        {
                            text.textContent =  "A tie! redo the round!"
                        } else if (result === 1) {
                            text.textContent =  losePhrase(computerSelection,player);
                        } else
                        {
                            text.textContent = "You win! " + player + " beats " +computerSelection;
                            wins++;
                            
                        }
                score.textContent = "Wins: " + wins;
                if (wins > 4) {
                    setTimeout(() => {
                        wins = 0;
                        alert("Congratulations you win the game!");
                        text.textContent = "";
                        score.textContent = "";
                    }, 20)
                    
                }
        });
    });
}

game();
