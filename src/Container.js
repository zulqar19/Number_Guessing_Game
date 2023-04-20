import { useState } from 'react';
import './Container.css'

let rndnum = Math.floor(Math.random() * 100);
console.log(rndnum);
function Container() {
    const [prevGuess,setPrevGuess] = useState();
    const [guess, setGuesses] = useState(10);
    const [randomnum,setRandomnum] = useState(rndnum);
    const [disabled, setDisabled] = useState(false);

    const guessNumber = () => {
        
        setGuesses(guess - 1);
        let userGuess = document.getElementById('input').value;
        let btn = document.getElementById('btn');
        userGuess = parseInt(userGuess);
        if (userGuess === randomnum) {
        let results = document.getElementById('update-results');
            results.innerHTML = "Congratulations! you guessed the right number"
            console.log("Congrats!");
            setDisabled(true);
            btn.classList.add('top');
            if (userGuess === randomnum) {
                setPrevGuess(`You previously guessed the number in ${11 - guess} guesses`);            
            }else{
                setPrevGuess(`You are not able to guess the right number`)
            }
            // setPrevGuess(11 - guess)
            results.classList.remove('color')
            results.classList.add('color2')
        }else if((userGuess > randomnum)&& (guess!==1)){
            console.log("number is higher");
        let results = document.getElementById('update-results');
            results.innerHTML = "Nope! Your number is higher"
            results.classList.remove('color2')
            results.classList.add('color')
        }
        else if ((userGuess < randomnum)&& (guess!==1)) {
            console.log('Number is lower');
        let results = document.getElementById('update-results');
            results.innerHTML = "Nope! Your number is lower"
            results.classList.remove('color2')
            results.classList.add('color');
        }
        else if (guess <= 1) {
            let results = document.getElementById('update-results');
            results.innerHTML = "You are out of guesses"
            results.classList.remove('color2')
            results.classList.add('color');
            setDisabled(true);
        }
    }
    const restart = ()=>{
        let userGuess = document.getElementById('input')
        let btn = document.getElementById('btn');
        userGuess.value = '';
        let results = document.getElementById('update-results');
        setDisabled(false);
        setRandomnum(Math.floor(Math.random() * 100));
        setGuesses(10);
        btn.classList.remove('top');
        results.innerHTML = "";
    }

    return (
        <div className="container">
            <h1>Guess a Number</h1>
            <input disabled={disabled} type="number" placeholder="Guess your number" id="input" autoFocus></input><br />
            <button id="btn" disabled={disabled} onClick={guessNumber}>Submit guess</button>
            {disabled &&
            <button id = "btn2" onClick={restart}>Start Game</button>}
            <p>Previous Guesses: {prevGuess} </p>
            <p>Guesses Remaining: {guess}</p>
            <p id="update-results"></p>
        </div>
    )
}

export default Container;
