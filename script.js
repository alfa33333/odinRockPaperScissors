console.log("hello world");

const gameChoices = ["rock","paper","scissors"];

function getComputerChoice(){    
    return gameChoices.at(Math.floor(Math.random() * length(gameChoices)))
};

console.log(getComputerChoice());