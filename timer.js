
let timerSeconds = document.getElementById("timer-text")
let time = 10
const loginForm = document.getElementById("login-form")
// let inputOptions = answerForm.querySelectorAll(".inputGroup")
let timerInterval

// loginForm.addEventListener("click", function(event){
//     switch (event.target.dataset.action){
//         case "login-start":
//             clearInterval(timerInterval)
//             time = 10
//             timerSeconds.innerHTML = `${time} seconds`
//             // startTimer()
//             break
//         case "start-game":
//             event.preventDefault();
//             startTimer()
//             console.log(`start button pressed`)
//             break
//     }
// })
function timerIncrement(){
    if (time === 0){
        clearInterval(timerInterval)
        // inputOptions.forEach(node => node.firstElementChild.setAttribute("data-action", ""))
        alert(`Out of time!`)
    } else {
    timerSeconds.innerText = `${--time} seconds`
    }
}

function startTimer(){
    timerInterval = setInterval(timerIncrement, 1000)
}
