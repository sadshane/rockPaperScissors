console.log("Shania Claire");
let playerWinTally = 0;
let compWinTally = 0;

function convertToWord(choice){
    switch (choice)
    {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        default:
            return 'Scissors'
    }
}

function getComputerChoice() {
    // create and index that will reference to rock paper and scissors
    // 1 = rock
    // 2 = paper
    // 3 = scissors
    // create a random generator that will return random numbers 
    // from between 1 to 3
    return Math.floor(Math.random() * 3 + 1);
}

function getPlayerChoice(playerChoice) {
    if (playerChoice.toLowerCase() === 'rock')
    {
        return 1;
    }
    else if (playerChoice.toLowerCase() === 'paper')
    {
        return 2;
    }
    else if (playerChoice.toLowerCase() === 'scissors')
    {
        return 3;
    }
    else 
    {
        console.log('Enter a valid value');
        return 0; 
    }
}


function playRound(playerSelection, computerSelection) {
    // compare values
    // the greater value wins when the difference is 1 or -1 
    // the lesser value wins when the difference is 2 or -2
    if (playerSelection > computerSelection && (playerSelection - computerSelection === 1 || playerSelection - computerSelection === -1))
    {
        playerWinTally++;
        return `You win! ${convertToWord(playerSelection)} beats ${convertToWord(computerSelection)}`;
    }
    else if (playerSelection < computerSelection && (playerSelection - computerSelection === 1 || playerSelection - computerSelection === -1))
    {
        compWinTally++;
        return `You lose! ${convertToWord(computerSelection)} beats ${convertToWord(playerSelection)}`;
    }
    else if (playerSelection === computerSelection)
    {
        return "It's a tie!"
    }
    else 
    {
        (playerSelection > computerSelection) ? compWinTally++ : playerWinTally++;
        return (playerSelection > computerSelection) ? `You lose! ${convertToWord(computerSelection)} beats ${convertToWord(playerSelection)}` : `You win! ${convertToWord(playerSelection)} beats ${convertToWord(computerSelection)}`;
    } 
}

function game() {
    // get the user input
    // loop 5 games and tally the results
    // print out the winner
    let playerChoice = prompt("Rock, Paper, or Scissor?");
    let choice = getPlayerChoice(playerChoice);
    if (choice === 0)
    {
        return;
    }

    for(let i = 0; i < 5; i++)
    {
        console.log(playRound(choice, getComputerChoice()));
    }
    console.log(playerWinTally + " " + compWinTally);
    if (playerWinTally === compWinTally)
    {
        console.log("It's a tie");
        return;
    }
    (playerWinTally > compWinTally) ? console.log("You win!") : console.log("You lose");
}

game();