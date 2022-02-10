
import './App.css';
import React,{ useEffect, useState } from 'react';
import { render } from '@testing-library/react';


  


 function App() {
     useEffect(init)

    var finalScore = document.querySelector(".final-score");
    var dice = document.querySelector('.dice');

        
    
    var score, currentScore, activePlayer, gameStatus, activePlayerPanel;

   function init(){
        score = [0,0];
        currentScore = 0;
        activePlayer = 0;
        gameStatus = false;
        var dice = document.querySelector('.dice');
        var finalScore = document.querySelector(".final-score");
        console.log(dice)
        activePlayerPanel = document.querySelector('.player-' + activePlayer + '-panel');
    
        dice.style.display = 'none';
        document.querySelector('.player-0-panel .player-score').textContent = '0';
        document.querySelector('.player-0-panel .player-current-score').textContent = '0';
        document.querySelector('.player-1-panel .player-score').textContent = '0';
        document.querySelector('.player-1-panel .player-current-score').textContent = '0';
        document.querySelector('.player-0-panel .player-name').textContent = 'Player 1';
        document.querySelector('.player-1-panel .player-name').textContent = 'Player 2';
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
        finalScore.disabled = false;
        finalScore.placeholder = 'Winner Score';
        finalScore.value = '';
    };
    
function next(){
    var dice = document.querySelector('.dice');
    activePlayerPanel.querySelector('.player-current-score').textContent = 0;
    activePlayerPanel.classList.remove('active');
    activePlayer = activePlayer == 0 ? 1 : 0;
    activePlayerPanel = document.querySelector('.player-' + activePlayer + '-panel');
    activePlayerPanel.classList.add('active');
    currentScore = 0;
    dice.style.display = 'none';
};
 function roll (){
    var finalScore = document.querySelector(".final-score");
    var dice = document.querySelector('.dice');
    console.log(document.querySelector('.player-' +  activePlayer+ '-panel'.className)) 
  console.log()
         if (finalScore.value) {
            var randomNumber = Math.floor((Math.random() * 6) + 1);
            currentScore += randomNumber;
            dice.src = 'img/dice-' + randomNumber + '.png';
            gameStatus = true;
            dice.style.display = 'block';
            finalScore.disabled = true;
    
            if (randomNumber !== 1) {    
                activePlayerPanel.querySelector('.player-current-score').textContent = currentScore;
            } else {
                next();
            }   
        }else{
            finalScore.focus();
            finalScore.placeholder = 'Please Insert Winner Score';
        }
    
    
}

function hold (){
    if (gameStatus) {
        var endGameScore = document.querySelector('.final-score').value;

        score[activePlayer] += currentScore;
        activePlayerPanel.querySelector('.player-score').textContent = score[activePlayer];
        
        activePlayerPanel.querySelector('.player-current-score').textContent = 0;
    
        if (score[activePlayer] >= +endGameScore) {
            activePlayerPanel.classList.remove('active');
            activePlayerPanel.classList.add('winner');
            dice.style.display = 'none';
            gameStatus = false;
            finalScore.placeholder = 'Winner Score';
            finalScore.value = '';
        } else {
            next();
        } 
    }
}

    
  
  return (

     
    <div className="container h-screen p-10 flex items-center justify-center left-14 relative w-full container ">
    <div className="player-0-panel active flex flex-col justify-center h-full w-full bg-white" >
        <div className="player-name text-4xl text-center uppercase tracking-wide font-thin top-5 bottom-2.5 relative">Player 1</div>
        <div className="player-score text-red-500 text-center text-7xl font-thin bottom-full mt-10 pb-10">0</div>
        <div className="player-current-box bg-red-500 text-white w-2/5 text-center ml-36">
            <div className="player-current-label ">Current</div>
            <div className="player-current-score">0</div>
        </div>
    </div>
    <div  className="center flex flex-col justify-end ml--10 absolute left-1/2 h-4/5 translate-x-1/2 translate-y-1/2">
        <button onClick={init} className="btn-new absolute left-1/2 top-2.5 w-52 text-red-900  uppercase cursor-pointer font-light ml--20 hover:font-semibold focus:outline-none"><ion-icon name="add-circle-outline" className="small-icon"></ion-icon>New Game</button>
        <img src="./img/dice-1.png"alt="Dice" className="dice absolute left-1/2 bottom-40 h-20 shadow-2xl"/>
        <div className='relative h-1/6 ml-16'>
        <button onClick={roll} className="btn-roll  absolute top-3 -right-2 w-52 text-red-900 uppercase cursor-pointer font-light  hover:font-semibold focus:outline-none m-2.5"><ion-icon name="repeat-outline" className="small-icon"></ion-icon>Roll Dice</button>
        <button onClick={hold}  className="btn-hold absolute top-11 -right-2 pt--32 w-52 text-red-900  uppercase cursor-pointer font-light  hover:font-semibold focus:outline-none m-2.5"><ion-icon name="download-outline" className="small-icon"></ion-icon>Hold</button>
         </div>
        <input type="text" name="" id="" placeholder="Winner Score" className="final-score w-min m-2.5 top-2   text-center focus:bg-yellow-200 outline-none border-2 border-red-500"/>
   
    </div>
    <div className="player-1-panel  flex flex-col justify-center h-full w-full bg-white" >
        <div className="player-name text-4xl text-center uppercase tracking-wide font-thin top-5 bottom-2.5 relative">Player 0</div>
        <div className="player-score text-red-500 text-center text-7xl font-thin bottom-full mt-10 pb-10">0</div>
        <div className="player-current-box bg-red-500 text-white w-2/5 text-center ml-36">
            <div className="player-current-label ">Current</div>
            <div className="player-current-score">0</div>
        </div>
    </div>
</div>



    
  );

 }
export default App;
