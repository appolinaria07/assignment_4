
let userChoice;
let again;


do {
    userChoice = prompt('Choose rock, paper, scissors').toLowerCase();
    again = 'n';
    
    while(userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
        userChoice = prompt('Choose rock, paper, scissors.')
        continue
    }

    let computerChoice = Math.floor(Math.random() * 3 +1);

    // console.log(`Computer's choice: ${computerChoice}`)

    if (computerChoice === 1) {
        computerChoice = 'rock';
    } else if (computerChoice === 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    if (computerChoice === 'rock'){
        if(userChoice === 'paper'){
            alert(`You won! You chose ${userChoice} and computer chose ${computerChoice}.`)
        } else if (userChoice === 'scissors') {
            alert(`The computer won! You chose ${userChoice} and computer chose ${computerChoice}.`);
        } else {
             alert(`There's a tie. You chose ${userChoice} and computer chose ${computerChoice}.`) 
             again = prompt(`Whould you like to play again? (y/n)`).toLowerCase();
        }
    }

    if (computerChoice === 'paper'){
        if(userChoice === 'paper'){
            alert(`There is a tie! You chose ${userChoice} and computer chose ${computerChoice}`);
            again = prompt(`Whould you like to play again? (y/n)`).toLowerCase();
        } else if (userChoice === 'scissors') {
            alert(`You won! You chose ${userChoice} and computer chose ${computerChoice}`);
        } else {
            alert(`The computer won. You chose ${userChoice} and computer chose ${computerChoice}.`)
        }
    }

    if (computerChoice === 'scissors'){
        if(userChoice === 'paper'){
            alert(`The computer won! You chose ${userChoice} and computer chose ${computerChoice}.`);
        } else if (userChoice === 'scissors') {
            alert(`There's a tie! You chose ${userChoice} and computer chose ${computerChoice}.`);
            again = prompt(`Whould you like to play again? (y/n)`).toLowerCase();
        } else {
            alert(`You won! You chose ${userChoice} and computer chose ${computerChoice}.`)
        }
    }
    
} while (again !== 'n') 

alert('Thank for playing the game! Bye.')
