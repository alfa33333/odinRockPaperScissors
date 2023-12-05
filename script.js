const gameChoices = ["rock","paper","scissors"];

function getComputerChoice(){    
    return gameChoices.at(Math.floor(Math.random() * gameChoices.length))
};

console.log(getComputerChoice());