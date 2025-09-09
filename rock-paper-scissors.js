let score = JSON.parse(localStorage.getItem('score'))|| {
        wins: 0,
        losses: 0,
        ties: 0
    };

stats();

function pickMove(){
    const num = (Math.random() * 3);
    if(num >=0 && num < 1){
        return 'rock'
    }
    else if(num >= 1 && num < 2){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

function playGame(computerChoice, playerChoice){
    if(computerChoice === playerChoice){
        score.ties++;
        results('tie', playerChoice, computerChoice);
    }

    else if((computerChoice === 'rock' && playerChoice === 'paper') ||  ((computerChoice === 'paper' && playerChoice === 'scissors') || (computerChoice === 'scissors' && playerChoice === 'rock'))){
        score.wins++;
        results('win', playerChoice, computerChoice);
    }
    
    else if((computerChoice === 'paper' && playerChoice === 'rock') || ((computerChoice === 'scissors' && playerChoice === 'paper') || (computerChoice === 'rock' && playerChoice === 'scissors'))){
        score.losses++;
        results('lose', playerChoice, computerChoice);
    }

localStorage.setItem('score', JSON.stringify(score));
stats();
}

function resetScore(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    console.log('Score reset')
    stats();
}

function results(gameResult, usrChoice, cmpChoice){
    const result = document.querySelector('.js-result');
    const matchup = document.querySelector('.js-matchup');
    if(gameResult === 'win')
        result.innerHTML = 'You win.'
    else if(gameResult === 'lose')
        result.innerHTML = 'You lose.'
    else if(gameResult === 'tie')
        result.innerHTML = 'Tie.'
    matchup.innerHTML = 'You <img class="move-icon" src="icons/'+usrChoice+'-emoji.png"> <img class="move-icon" src="icons/'+cmpChoice+'-emoji.png">  Computer';
}

function stats(){
    const stat = document.querySelector('.js-stats');
    stat.innerHTML= 'Wins: '+score.wins+', Losses: '+score.losses+', Ties: '+score.ties;
}
