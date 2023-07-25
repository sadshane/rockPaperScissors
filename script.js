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
        return "It's a tie!";
    }
    else 
    {
        (playerSelection > computerSelection) ? compWinTally++ : playerWinTally++;
        return (playerSelection > computerSelection) ? `You lose! ${convertToWord(computerSelection)} beats ${convertToWord(playerSelection)}` : `You win! ${convertToWord(playerSelection)} beats ${convertToWord(computerSelection)}`;
    } 
}

function game(playerChoice) {
    // get the user input
    // loop 5 games and tally the results
    // print out the winner
    let choice = getPlayerChoice(playerChoice);
    if (choice === 0)
    {
        return;
    }

    document.querySelector('.description').textContent = playRound(choice, getComputerChoice());

    // console.log(playerWinTally + " " + compWinTally);
    
    let result = (playerWinTally > compWinTally) ? "You win!" : "You lose";

    // updates the scoreboard
    document.querySelector('.score1').textContent = playerWinTally;
    document.querySelector('.score2').textContent = compWinTally;

    // if either of the tally reaches 5 then return the result and reset the scoreboard
    if (playerWinTally === 5)
    {
        playerWinTally = 0;
        compWinTally = 0; 
        document.querySelector('.result').textContent = 'You win!!!';
        return;
    }
    if (compWinTally === 5)
    {
        playerWinTally = 0;
        compWinTally = 0; 
        document.querySelector('.result').textContent = 'You lose!!!';
        return;
    }
    document.querySelector('.result').textContent = '';
}

function test() {
    let choices = document.querySelectorAll('.choice');
    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            game(choice.textContent);
        });
    });
}

test();