window.onload = function(){
  //click events are done for you:
  $('#lap').click(stopwatch.recordLap);
  $('#stop').click(stopwatch.stop);
  $('#reset').click(stopwatch.reset);
  $('#start').click(stopwatch.start);
};

var stopwatch = {
  time:0,
  lap:1,
  reset:function(){
    stopwatch.time = 0;
    stopwatch.lap = 1;
    //change the "display" div to "00:00"

    //empty the "laps" div
  },
  start: function(){
    //Use setInterval to start the count here


  },
  stop: function(){
    //Use clearInterval to stop the count here


  },
  recordLap: function(){
    //Get the current time, pass that into the stopwatch.timeConverter function, and save the result in a variable

    //Add the current lap and time to the "laps" div

    //increment lap by 1, remember we cant use "this" here

  },
  count: function(){
    //increment time by 1, remember we cant use "this" here

    //Get the current time, pass that into the stopwatch.timeConverter function, and save the result in a variable

    //Use the variable you just created to show the converted time in the "display" div
  },
  timeConverter: function(t){
    //This function is done. You do not need to touch it. It takes the current time in seconds and converts it to minutes and seconds (mm:ss).
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
