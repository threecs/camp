//solution if you put the whole thing in an object:
window.onload = function(){
  $('#lap').on('click', stopwatch.recordLap);
  $('#stop').on('click', stopwatch.stop);
  $('#reset').on('click', stopwatch.reset);
  $('#start').on('click', stopwatch.start);
};

var stopwatch = {
  time:0,
  lap:1,
  reset: function(){
    stopwatch.time = 0;
    stopwatch.lap = 1;
    $('#display').html('00:00');
    $('#laps').html('');
  },
  start: function(){
    counter = setInterval(stopwatch.count, 1000);
  },
  stop: function(){
    clearInterval(counter);
  },
  recordLap: function(){
    //if you use "this" here, it will point to the lap button, not this object.
    var converted = stopwatch.timeConverter(stopwatch.time);
    $('#laps').append('<p>Lap ' + stopwatch.lap + ' : ' + converted + '</p>');
    stopwatch.lap++;
  },
  count: function(){
    stopwatch.time++;
    var converted = stopwatch.timeConverter(stopwatch.time);
    $('#display').html(converted);
  },
  timeConverter: function(t){
    var minutes = Math.floor(t/60);
    var seconds = t - (minutes * 60);
    if (seconds < 10){
      seconds = "0" + seconds;
    }
    if (minutes === 0){
      minutes = "00";
    } else if (minutes < 10){
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }

};

// Solution if you choose not to put it in an object
//
// var time = 0;
// var lap = 1;
//
// function reset(){
//   time = 0;
//   lap = 1;
//   $('#display').html('00:00');
//   $('#laps').html('');
//
// }
//
// function start(){
//   counter = setInterval(count, 1000);
// }
//
// function stop(){
//   console.log('stopping');
//   clearInterval(counter);
// }
//
// function recordLap(){
//   var converted = timeConverter(time);
//   $('#laps').append('<p>Lap ' + lap + ' : ' + converted + '</p>');
//   lap++;
// }
//
// function count(){
//   time++;
//   var converted = timeConverter(time);
//   $('#display').html(converted);
// }
//
// function timeConverter(t){
//   var minutes = Math.floor(t/60);
//   var seconds = t - (minutes * 60);
//   if (seconds < 10){
//     seconds = "0" + seconds;
//   }
//   if (minutes === 0){
//     minutes = "00";
//   } else if (minutes < 10){
//     minutes = "0" + minutes;
//   }
//   return minutes + ":" + seconds;
// }
