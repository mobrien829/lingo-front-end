const backEndURL= "http://localhost:3000/api/v1/languages"
const apiURL = "https://www.googleapis.com/language/translate/v2"
const question = 'left,doctor,beer,korea,rice,police'

const target = 'target=ko'

const koreanWords = []
const koreanEmojis = [⬅️,👩‍,🍺,🇰🇷,🍚,👮]

function index(){
  fetch(backEndURL).then(r => r.json()).then(json => getApi(json.apiKey))
}

function getApi(apiKey){
  return fetch(`${apiURL}/?key=${apiKey}&q=${question}&${target}`).then(r=> r.json()).then(r => storeWordsinArr(r))
}

index()

function storeWordsinArr(gtObj){
  splitArr = gtObj.data.translations[0].translatedText.split(",")
  splitArr.forEach(wordEl => koreanWords.push(wordEl))
}

const emojiContainer = document.getElementById("emoji")

function renderImageForQuestion(){
  const emojiHTML = koreanEmojis.map(gt => `<div id="emoji-image">⬅️</div>
  <div id="en-word" style="font-size:40px;color:#4A9CD5;">Left</div>`).join("")
  emojiContainer.innerHTML = emojiHTML
}
