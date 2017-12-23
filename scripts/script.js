const gameOptions = ['rock', 'paper', 'scissors'];
const playerScore = document.querySelector('#player_points');
const computerScore = document.querySelector('#computer_points');
let user = '', scores = [0, 0], itr = 0, done = 0;
const computerCenter = document.querySelector('#computer').querySelector('center');
const removePcImage = function(){ computerCenter.removeChild(computerCenter.childNodes[3]); }
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
        case 'scissors':
            if(pc === 'scissors')
                return 'draw';
            else if(pc === 'rock')
                return 1;
            else
                return 0;
            break;
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
    if(winner !== 'draw')
        pcImage(pc);
    //alert(winner);
    //console.log(winner);
    if(itr != 0 && winner !== 'draw')
        removePcImage();
    if(winner !== 'draw')
    {
        itr++;
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
            if(itr < 5)
                gamePlay(user);
            else
                announceWinner();
            //return user;
        }
    }
}

const restartGame = function(){
    let button = document.querySelector('button');
    button.onclick = function(){
        itr = 0;
        playerScore.textContent = 'Player: 0';
        computerScore.textContent = 'Computer: 0';
        scores[0] = 0;
        scores[1] = 0;
        done = 0;
        if(computerCenter.childNodes.length === 4)
            removePcImage();
    }
}

const pcImage = function(pc)
{
    let image = document.createElement('img');
    image.alt = pc;
    image.src = `images/${pc}.jpg`;
    computerCenter.appendChild(image);
}

const announceWinner = function(){
    if(itr === 5 && done === 0)
    {
        if(scores[0] > scores[1])
            playerScore.textContent += ' Winner';
        else
            computerScore.textContent += ' Winner';
        done++;
    }
}

restartGame();
userChoice();