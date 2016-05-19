
var images = ["images/bootstrap.png", "images/github-logo.jpg", "images/logo_JavaScript.png"];

var count = 0;


$('#start').click(startSlideshow);
$('#stop').click(stopSlideshow);



function displayImage (){
  $('#image-holder').html('<img src='+images[count]+ ' width="400px">');
}

function nextImage (){
  count++;
  $('#image-holder').html('<img src="images/loading.gif" width="200px"/>');
  setTimeout(displayImage, 1000);
  if (count==images.length){
    count = 0;
  }
}
function startSlideshow (){
  showImage = setInterval(nextImage, 3000);
}
function stopSlideshow () {
  clearInterval(showImage);
}

displayImage();
