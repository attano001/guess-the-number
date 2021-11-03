'use strict';

let max = 5;
let min = 1;
let score = 20;
let highScore = 0;
let number = Math.floor(Math.random() * (max - min) + min)

document.querySelector('.check').addEventListener('click', function() {

        const guess = Number(document.querySelector('.guess').value)

        
        function wrong() {score = score - 1; document.querySelector('.score').textContent = score}
        function lost() {if (score <= 0) {document.querySelector('.message').textContent = "💥 You lost the game"}}

        // user typed zero
        if(!guess) {
            document.querySelector('.message').textContent = "⛔ Invalid Number!"

        // correct
        }else if(number === guess) {
            document.querySelector('.message').textContent = "🏆 You Win"
            document.querySelector('body').style.backgroundColor = '#60b347'
            document.querySelector('.number').textContent = number
            document.querySelector('.number').style.width = '30rem'

            if(score >= highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore
            }
        // Lower
        }else if(guess > number) {
            document.querySelector('.message').textContent = "👇 Lower!"
            wrong()
            lost()

        // higher
        }else if(guess < number) {
            document.querySelector('.message').textContent = "👆 Higher!"
            wrong()
            lost()
        }

        // reset
        document.querySelector('.again').addEventListener('click', function() {
            score = 20;
            number = Math.floor(Math.random() * (max - min) + min)
            document.querySelector('body').style.backgroundColor= '#323437';
            document.querySelector('.number').textContent= '?';
            document.querySelector('.number').style.width = '18rem'
            document.querySelector('.message').textContent = "Start guessing..."
            document.querySelector('.score').textContent = "20"
            document.querySelector('.guess').value = ""
        })
    }
)