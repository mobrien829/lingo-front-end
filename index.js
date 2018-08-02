const backEndURL= "http://localhost:3000/api/v1/languages"
const apiURL = "https://www.googleapis.com/language/translate/v2"
const question = 'left,doctor,beer,korea,rice,police'

const target = 'target=ko'

const koreanWords = []
const koreanEmojis = ["⬅️","👩‍","🍺","🇰🇷","🍚"]

const leftKoreanAudio = document.getElementById('left-k');
const doctorKoreanAudio = document.getElementById('doctor-k');
const beerKoreanAudio = document.getElementById('beer-k');
const koreaKoreanAudio = document.getElementById('korea-k');
const riceKoreanAudio = document.getElementById('rice-k');
const audioContainer = document.getElementById('audio');

const koreanAudioList = [leftKoreanAudio, doctorKoreanAudio, beerKoreanAudio, koreaKoreanAudio, riceKoreanAudio];

// const answerList = [q1:[""]]
// const gameObj = [korean:[{words:koreanWords, emojis:koreanEmojis, audio:koreanAudioList, answers:answerList}]]


// const q1 = {word: koreanWords[0], emoji: koreanEmojis[0], audio: koreanAudioList[0], answer: 'oenjjog', wrongAnswers:['oenjjog',"oleunjjog", "jjog", "owenjjog"]}
// const q2 = {word: koreanWords[1], emoji: koreanEmojis[1], audio: koreanAudioList[1], answer: 'uisa', wrongAnswers:["elsa", "usa", 'uisa',"uija"]}
// const q3 = {word: koreanWords[2], emoji: koreanEmojis[2], audio: koreanAudioList[2], answer: 'maegju', wrongAnswers:["soju", "maggeolli", "maegjong",'maegju']}
// const q4 = {word: koreanWords[3], emoji: koreanEmojis[3], audio: koreanAudioList[3], answer: 'hangug', wrongAnswers:["hanpan", "hanjan",'hangug', "hangoop"]}
// const q5 = {word: koreanWords[4], emoji: koreanEmojis[4], audio: koreanAudioList[4], answer: 'ssal', wrongAnswers:["seoul", 'ssal', "ssul", "ssalsa"]}
//
// const koreanArr = [q5, q2, q3, q4, q1]
//


// koreanEmojis.forEach(emoji => console.log(emoji))
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
  const q1 = {word: koreanWords[0], emoji: koreanEmojis[0], audio: koreanAudioList[0], answer: 'oenjjog', wrongAnswers:['oenjjog',"oleunjjog", "jjog", "owenjjog"]}
  const q2 = {word: koreanWords[1], emoji: koreanEmojis[1], audio: koreanAudioList[1], answer: 'uisa', wrongAnswers:["elsa", "usa", 'uisa',"uija"]}
  const q3 = {word: koreanWords[2], emoji: koreanEmojis[2], audio: koreanAudioList[2], answer: 'maegju', wrongAnswers:["soju", "maggeolli", "maegjong",'maegju']}
  const q4 = {word: koreanWords[3], emoji: koreanEmojis[3], audio: koreanAudioList[3], answer: 'hangug', wrongAnswers:["hanpan", "hanjan",'hangug', "hangoop"]}
  const q5 = {word: koreanWords[4], emoji: koreanEmojis[4], audio: koreanAudioList[4], answer: 'ssal', wrongAnswers:["seoul", 'ssal', "ssul", "ssalsa"]}

  const koreanArr = [q5, q2, q3, q4, q1]
  console.log(koreanArr)
}

const emojiContainer = document.getElementById("emoji")

function renderImageForQuestion(){
  const emojiHTML = koreanEmojis.map(gt => `<div id="emoji-image">⬅️</div>
  <div id="en-word" style="font-size:40px;color:#4A9CD5;">Left</div>`).join("")
  emojiContainer.innerHTML = emojiHTML
}
let counter = 0
// .then(element => function(element) {
//   counter++
//   q.counter.word = element
// })
