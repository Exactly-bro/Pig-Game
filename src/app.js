/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer,dice,gamePlaying ;

init();
/*
document.querySelector("#current-" + activePlayer).textContent = dice;

document.querySelector("#current-1").innerHTML = '<em>' + dice + '</em>';

document.querySelector('.dice').style.display =  'none'; // hiding the dice
*/
document.querySelector('.dice').style.display =  'none'; // hiding the dice

///////////////
/*function btn(){
    console.log('Call back Function');
}

document.querySelector('.btn-roll').addEventListener('click',btn);

document.querySelector('.btn-hold').addEventListener('click',function btn(){
    console.log('Anonymous Function');
});*/
//




document.querySelector('.btn-roll').addEventListener('click',function() {
    // Random number
    if(gamePlaying) {
        var dice = 1 + Math.floor(Math.random() * 6);
        // Display Result
        var diceDom = document.querySelector('.dice')
        diceDom.style.display = 'block';
        diceDom.src = 'images/dice-' + dice + '.png';
        //Update round score if dice != 1
        if (dice !== 1) {
            // Add Player
            roundScore += dice;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        } else {
            //Next Player
            nextPlayer();
        }
    }
});


document.querySelector('.btn-hold').addEventListener('click',function() {
    if(gamePlaying) {
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        // if player Won
        if (scores[activePlayer] >= 10) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!!!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});



function nextPlayer() {
    roundScore = 0;
    activePlayer = activePlayer ^ 1;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', init);



function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0' ;
    document.getElementById('score-1').textContent = '0' ;
    document.getElementById('current-0').textContent = '0' ;
    document.getElementById('current-1').textContent = '0' ;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}