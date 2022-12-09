let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
   return (Math.floor(Math.random() * 10));
}

/*

function compareGuesses(hum, comp, secret) {
  const humDiff = Math.abs(secret - hum);
  const compDiff = Math.abs(secret - comp);
  if (humDiff <= compDiff) {
    return true;
    }  
      return false
  }
  
  */

function getAbsoluteDistance(a, b) {
    return Math.abs(a-b);
}

function compareGuesses(hum, comp, secret) {
  if (hum < 0 ||  hum > 9 ) {
    alert ('you are out of 0-9 range. Try again!');
  }
  return (getAbsoluteDistance(hum, secret) < getAbsoluteDistance(comp, secret)) || (getAbsoluteDistance(hum, secret) === getAbsoluteDistance(comp, secret)) ? true : false;
  }

function updateScore(winner)  {
if (winner === 'human')  {
humanScore++;
} else if (winner === 'computer') {
  computerScore++;
}
}

/*

function updateScore(winner)  {
switch (winner) {
  case 'human':
    humanScore++;
      break
  case 'computer':
    computerScore++;
      break
  }
}

-------------------------

const updateScore = winner => {
  winner === 'human' ? humanScore++ :
  winner === 'computer' ? computerScore++; 
}

 */

function advanceRound() {
  currentRoundNumber++;
}
