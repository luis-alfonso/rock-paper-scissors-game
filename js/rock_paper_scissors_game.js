let computerScore = 0;
let playerScore = 0;
console.log("New game");      
game();

function game()
{
    for(let i = 1; i < 6; i++)
    {
        const playerSelection = prompt('Take your pick: rock, paper o scissors');
        const computerSelection = computerPlay();
        console.log('ROUND ' + i);
        console.log('Player: ' + playerSelection + ' Computer: ' + computerSelection);
        console.log(playRound(playerSelection.toLowerCase(), computerSelection));
        console.log('Player: ' + playerScore + ' Computer: ' + computerScore);
    }

        if(playerScore > computerScore)
          console.log('Player Won');
        else if(playerScore < computerScore)
          console.log('Computer Won');
        else
          console.log('Tie');
        console.log('Game Over!!')
      }

      function playRound(playerSelection, computerSelection)
      {
        if(playerSelection == 'rock')
          if(computerSelection == 'scissors')
          {
            playerScore++;
            return('Player Win! Rock beats Scissors');
          }
          else if(computerSelection == 'paper')
          {
            computerScore++;
            return('Computer Win! Paper beats rock');
          }
          else 
          {
            return('Tie!');
          }
        else if(playerSelection == 'paper')
          if(computerSelection == 'scissors')
          {
            computerScore++;
            return('Computer Win! Scissors beats Paper');
          }
          else if(computerSelection == 'paper')
          {
            return('Tie!');
          }
          else
          {
            playerScore++;
            return('Player Win! Paper beats Rock');
          }
        else if(playerSelection == 'scissors')
          if(computerSelection == 'scissors')
          {
            return('Tie!');
          }
          else if(computerSelection == 'paper')
          {
            playerScore++;
            return('Player Win! Scissors beats paper');
          }
          else
          {
            computerScore++;
            return('Computer Win! Rock beats Scissors');
          }
        else
            return('Player: Invalid option!');
      }

      function computerPlay()
      {
        const computerSelection = Math.floor(Math.random() * 3); 
        if(computerSelection === 0)
          return 'rock';
        else if(computerSelection === 1)
          return 'paper';
        else if(computerSelection === 2)
          return 'scissors';
      }