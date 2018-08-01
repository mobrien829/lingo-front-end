// MAKE A GAME OVER CONDITION FOR TIMER

let timerSeconds = document.getElementById("timer-text")
let time = 10
const answerForm = document.getElementById("answer-form")
let inputOptions = answerForm.querySelectorAll(".inputGroup")
let timerInterval

answerForm.addEventListener("click", function(event){
    
    switch (event.target.dataset.action){
        case "answer":
            clearInterval(timerInterval)
            time = 10
            timerSeconds.innerHTML = `${time} seconds`
            startTimer()
            break
        case "start-game":
            event.preventDefault();
            startTimer()
            console.log(`start button pressed`)
            break
    }
})
function timerIncrement(){
    if (time === 0){
        clearInterval(timerInterval)
        inputOptions.forEach(node => node.firstElementChild.setAttribute("data-action", ""))
        // answerForm.id = "game-over"
        alert(`Out of time! Game over!`)
    } else {
    timerSeconds.innerText = `${--time} seconds`
    }
}

function startTimer(){
    timerInterval = setInterval(timerIncrement, 1000)
}