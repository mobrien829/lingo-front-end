const backEndURL= "http://localhost:3000/api/v1/languages"
const apiURL = "https://www.googleapis.com/language/translate/v2"
const question = 'left,doctor,beer,korea,rice,police'
const enWords = question.split(",")

const target = 'target=ko'

const koreanWords = []
const koreanEmojis = ["⬅️","👩‍","🍺","🇰🇷","🍚"]

const leftKoreanAudio = document.getElementById('left-k');
const doctorKoreanAudio = document.getElementById('doctor-k');
const beerKoreanAudio = document.getElementById('beer-k');
const koreaKoreanAudio = document.getElementById('korea-k');
const riceKoreanAudio = document.getElementById('rice-k');
const audioContainer = document.getElementById('audio');

let numTries = 0;
const koreanAudioList = [leftKoreanAudio, doctorKoreanAudio, beerKoreanAudio, koreaKoreanAudio, riceKoreanAudio];

function index(){
  fetch(backEndURL).then(r => r.json()).then(json => getApi(json.apiKey))
}

function getApi(apiKey){
  return fetch(`${apiURL}/?key=${apiKey}&q=${question}&${target}`).then(r=> r.json()).then(r =>storeWordsinArr(r))
  .then(assignKoreanWords)
}

index()

function storeWordsinArr(gtObj){
  splitArr = gtObj.data.translations[0].translatedText.split(",")
  splitArr.forEach(wordEl => koreanWords.push(wordEl))
}

function assignKoreanWords(){
  const q1 = {word: koreanWords[0], enword: enWords[0], emoji: koreanEmojis[0], audio: koreanAudioList[0], answer: 'oenjjog', wrongAnswers:['oenjjog',"oleunjjog", "jjog", "owenjjog"]}
  const q2 = {word: koreanWords[1], enword: enWords[1], emoji: koreanEmojis[1], audio: koreanAudioList[1], answer: 'uisa', wrongAnswers:["elsa", "usa", 'uisa',"uija"]}
  const q3 = {word: koreanWords[2], enword: enWords[2], emoji: koreanEmojis[2], audio: koreanAudioList[2], answer: 'maegju', wrongAnswers:["soju", "maggeolli", "maegjong",'maegju']}
  const q4 = {word: koreanWords[3], enword: enWords[3], emoji: koreanEmojis[3], audio: koreanAudioList[3], answer: 'hangug', wrongAnswers:["hanpan", "hanjan",'hangug', "hangoop"]}
  const q5 = {word: koreanWords[4], enword: enWords[4], emoji: koreanEmojis[4], audio: koreanAudioList[4], answer: 'ssal', wrongAnswers:["seoul", 'ssal', "ssul", "ssalsa"]}
  const koreanArr = [q5, q2, q3, q4, q1]

  let i=0
  loginForm.addEventListener("click", function(event){
    if (event.target.dataset.action === "login-start"){
      event.preventDefault()
      renderImageForQuestion(koreanArr[i])
      // time= 10
    }
  answerFormContainer.addEventListener("click", function(event){
    switch(event.target.dataset.action){
      case "answer":
      event.preventDefault()
      i++
      renderImageForQuestion(koreanArr[i])
      wordMatcher(event.target.value, koreanArr[i])
      break;
    }
  }
)
})}
const heartContainer = document.getElementById('heart-container');
const firstHeart = document.getElementById('heart-one');
const secondHeart = document.getElementById('heart-two');

function wordMatcher(inputWord, wordObj) {
  if(inputWord !== wordObj.answer && numTries <= 2) {
    firstHeart.remove();
    heartContainer.innerHTML += generateEmptyHeart();
    numTries++
  }
}

function generateEmptyHeart() {
  return `<span id="empty-heart">♡</span>`
}

const emojiContainer = document.getElementById("emoji")
const keyWordContainer = document.getElementById("keyword")
const answer1Container = document.getElementById("answer1")
const answerFormContainer = document.getElementById("answer-form")
const resultsContainer = document.getElementById("results")

function renderImageForQuestion(langObj){
  const emojiHTML = `<div id="emoji-image">${langObj.emoji}</div>
  <div id="en-word" style="font-size:40px;color:#4A9CD5;">${langObj.enword}</div>`
  emojiContainer.innerHTML = emojiHTML

  const mcHTML = `${langObj.word}`
  keyWordContainer.innerHTML = mcHTML

  const answerRadioHTML =
    `<div class="inputGroup">
      <input type="radio" id="answer1" data-action="answer" class="radio" name="male" value="${langObj.wrongAnswers[0]}">
      <label for="radio1">${langObj.wrongAnswers[0]}</label>
    </div>
    <div class="inputGroup">
      <input type="radio" id="answer2" data-action="answer" class="radio" name="male" value="${langObj.wrongAnswers[1]}">
      <label for="radio2">${langObj.wrongAnswers[1]}</label>
    </div>
    <div class="inputGroup">
      <input type="radio" id="answer3" data-action="answer" class="radio" name="male" value="${langObj.wrongAnswers[2]}">
      <label for="radio3">${langObj.wrongAnswers[2]}</label>
    </div>
    <div class="inputGroup">
      <input type="radio" id="answer4" data-action="answer" class="radio" name="male" value="${langObj.wrongAnswers[3]}">
      <label for="radio4">${langObj.wrongAnswers[3]}</label>
    </div>`
  answerFormContainer.innerHTML = answerRadioHTML
}

function renderIfCorrect(){
  return `<p style="font-size:100px">⭕</p><button style="padding:15px;font-size:20px;
  border-color:#f1616b;border-radius:40px;background-color:#f1616b" id="next">next question</button>`
}

function renderIfWrong(){
  return `<p style="font-size:100px">❌</p><button style="padding:15px;font-size:20px;
  border-color:#f1616b;border-radius:40px;background-color:#f1616b" id="next">next question</button>`
}

// resultsContainer.innerHTML = renderIfCorrect()

function endGame(){
  let inputOptions = answerForm.querySelectorAll(".inputGroup")
  inputOptions.forEach(node => node.firstElementChild.setAttribute("data-action", ""))
}
