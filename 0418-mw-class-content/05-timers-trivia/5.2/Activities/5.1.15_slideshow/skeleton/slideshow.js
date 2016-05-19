//Your array of images goes here
var images = [];

//Count will keep track of the index of the currently displaying picture
var count = 0;

//Use jQuery to run "startSlideshow" when you click the "start" button

//Use jQuery to run "stopSlideshow" when you click the "stop" button




function displayImage (){
  $('#image-holder').html('<img src='+images[count]+ ' width="400px">');
}

function nextImage (){
  //increment the count by 1


  //show the loading gif in the "image-holder" div


  //Use a setTimeout to run displayImage after 1 second


  //if the count is the same as the length of the image array, reset the count to 0

}
function startSlideshow (){
  //use a setInterval to run nextImage

}
function stopSlideshow () {
  //put your clearInterval here:

}


displayImage();
