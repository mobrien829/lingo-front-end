document.addEventListener("DOMContentLoaded", function(event) {

// Korean audio files
  const leftKoreanAudio = document.getElementById('left-k');
  const doctorKoreanAudio = document.getElementById('doctor-k');
  const beerKoreanAudio = document.getElementById('beer-k');
  const koreaKoreanAudio = document.getElementById('korea-k');
  const riceKoreanAudio = document.getElementById('rice-k');
  const audioContainer = document.getElementById('audio');

// Korean audio array
  const koreanAudioList = [leftKoreanAudio, doctorKoreanAudio, beerKoreanAudio, koreaKoreanAudio, riceKoreanAudio];

//Speaker event listener

let audioTries = 0

audioContainer.addEventListener('click', function audioClick(event){
    event.preventDefault();
      if(audioTries > 3){
        alert("You've exceeded audio plays allowed. Give it your best shot!")
      } else {
        playAudio(doctorKoreanAudio);
        audioTries++;
      }
  });

  function playAudio(file) {
    file.play();
  }

})
