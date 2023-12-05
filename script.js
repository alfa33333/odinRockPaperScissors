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

    console.log("Let's play best of 5")
    let n=0
    let wins = 0
    while (n < 5) {
        let player = prompt("What do you play?")
        let computerSelection = getComputerChoice();
        let result = playRound(player, computerSelection)
        if (result === 0)
        {
            console.log("A tie! redo the round!")
            continue;
        } else if (result === 1) {
            console.log(losePhrase(computerSelection,player));
        } else
        {
            console.log("You win! " + player + " beats " +computerSelection);
            wins++;
        }
        n++;
    }
    if (wins >= 3){
        console.log("Congratulations you win the game!")
    } else
    {
        console.log("You lost the game.")
    }
}

game();