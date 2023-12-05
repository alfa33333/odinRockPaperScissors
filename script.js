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
                return losePhrase(player2,player1);
            }
        case 1:
            if (player2 == gameChoices[2]){
                return losePhrase(player2,player1);
            }
        case 2:
            if (player2 == gameChoices[0]){
                return losePhrase(player2,player1);
            }
        default:
             return "You win! " + player1 + " beats " + player2;
    }

}

function playRound(playerSelection, computerSelection){

    let result = compare(playerSelection.toLowerCase(), computerSelection)

    if (result == 'tie') {
        return ""
    } else
    {
        return result;
    }

};

console.log(getComputerChoice());
console.log(compare("rock","paper"));

// function game(){

//     let n=0
//     while (n < 5) {
//         prompt()
//         n++;
//     }
// }