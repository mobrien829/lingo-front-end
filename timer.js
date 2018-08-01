let timerSeconds = document.getElementById("timer-text")
let time = 11
let timerInterval

document.addEventListener("click", function(event){
    
    switch (event.target.dataset.action){
        case "answer":
            clearInterval(timerInterval)
            time = 11
            timerSeconds.innerHTML = `${time} seconds`
            startTimer()
            console.log(`answer button pressed`)
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
        alert(`Out of time! Game over!`)
    } else {
    timerSeconds.innerText = `${--time} seconds`
    console.log(`timer running`)
    }
}

function startTimer(){
    timerInterval = setInterval(timerIncrement, 1000)
}