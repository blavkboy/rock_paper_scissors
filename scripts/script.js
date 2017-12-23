const gameOptions = ['rock', 'paper', 'scissors'];
const playerScore = document.querySelector('#player_points');
const computerScore = document.querySelector('#computer_points');
let user = '', scores = [0, 0];
playerScore.textContent += ' 0';
computerScore.textContent += ' 0';

const decideWinner = function(pc, user){
    switch(user)
    {
        case 'rock':
            if(pc === 'rock')
                return 'draw';
            else if(pc === 'paper')
                return 1;
            else
                return 0;
            break;
        case 'paper':
            if(pc === 'paper')
                return 'draw';
            else if(pc === 'scissors')
                return 1;
            else
                return 0;
            break;
        case 'scissor':
            if(pc === 'scissors')
                return 'draw';
            else if(pc === 'rock')
                return 1;
            else
                return 0;
    }
}

const computerChoice = function(gameOptions){
    let index = Math.floor(Math.random() * 3);
    return gameOptions[index];
}

const gamePlay = function(user){
    //console.log("started");
    const prefix = ['Player: ', 'Computer: '];
    let iteration = 0, pc;
    pc = computerChoice(gameOptions);
    //console.log('PC: ' + pc);
    winner = decideWinner(pc, user);
    //alert(winner);
    //console.log(winner);
    if(winner !== 'draw')
    {
        console.log('find answer');
        scores[winner]++;
        if(winner === 0)
        {
            playerScore.textContent = prefix[0] + scores[0];
            computerScore.textContent = prefix[1] + scores[1];
        }
        else
            playerScore.textContent = prefix[0] + scores[0];
            computerScore.textContent = prefix[1] + scores[1];
    }
}

/********************************************
 * Variable:    userChoice
 * Purpose:     to represent the choices that
 *              the player has when playing
 *              rock, paper, scissors.
 ********************************************/
const userChoice = function(){
    let choices = document.querySelectorAll('a');
    for(i = 0; i < choices.length; i++)
    {
        choices[i].onclick = function(i){
            // 'i.target.alt' returns a string with
            // our choice between rock, paper, scissors.
            user = i.target.alt;
            gamePlay(user);
            //return user;
        }
    }
}

//gamePlay(user);
userChoice();