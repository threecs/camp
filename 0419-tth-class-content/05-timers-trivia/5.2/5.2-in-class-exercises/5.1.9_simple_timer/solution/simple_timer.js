var audio = new Audio('https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90');

setTimeout(fiveSeconds, 1000 * 5);
setTimeout(tenSeconds, 1000 * 10);
setTimeout(timeUp, 1000 * 15);

function fiveSeconds() {
  $('#time-left').html('<h2>About 10 Seconds Left!</h2>');
  alert('10 seconds left');
}

function tenSeconds() {
  $('#time-left').html('<h2>About 5 Seconds Left!</h2>');
  alert('5 seconds left');
}

function timeUp(){
  audio.play();
  $('#time-left').html('<h2>Time\'s Up!</h2>');
  alert('time is up');
}
