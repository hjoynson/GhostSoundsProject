function play1() {
var audio = document.getElementById("audio");
audio.play();}

function play2() {
var audio = document.getElementById("audio1");
audio.play();}

function play3() {
var audio = document.getElementById("audio2");
audio.play();}


document.addEventListener('keydown', function(e) {
    if (e.keyCode) {
      document.getElementById('audio').play();
    }
  });
