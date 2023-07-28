console.log("Shania Claire");
let playerWinTally = 0;
let compWinTally = 0;
let toggle = true;

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
    else
    {
        return 3;
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

function updateResult() {
    // if either of the tally reaches 5 then return the result and reset the scoreboard
    if (playerWinTally === 5)
    {
        document.querySelector('.result').textContent = 'You win!!!';
        resetGame();
        return;
    }
    if (compWinTally === 5)
    {
        document.querySelector('.result').textContent = 'You lose!!!';
        resetGame();
        return;
    }
    return;
}

function resetGame() {
    // let resetButton = document.createElement('button');
    // resetButton.textContent = 'Reset Game';
    // let footer = document.querySelector('.footer');
    // resetButton.setAttribute('type', 'button');
    // resetButton.setAttribute('class', 'btn btn-secondary');
    // footer.appendChild(resetButton);

    let resetButton = document.querySelector('.reset');
    resetButton.addEventListener('click', () => {
        playerWinTally = 0;
        compWinTally = 0;
        document.querySelector('.score1').textContent = '0';
        document.querySelector('.score2').textContent = '0';
        document.querySelector('.description').textContent = '';
        document.querySelector('.result').textContent = '';
        toggle = true;
    });
}

function updateScore() {
    document.querySelector('.score1').textContent = playerWinTally;
    document.querySelector('.score2').textContent = compWinTally;
    if(playerWinTally === 5 || compWinTally === 5)
    {
        toggle = false;
    }
}

function updateDescription(description) {
    document.querySelector('.description').textContent = description;
}

function game(playerChoice) {
    let choice = getPlayerChoice(playerChoice);
    let description = playRound(choice, getComputerChoice());
    updateDescription(description);
    updateScore();
    updateResult();
}

function test() {
    let choices = document.querySelectorAll('.choice');
    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            if (toggle) {
                game(choice.textContent);
            }
        });
    });
}

test();