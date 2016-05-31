//when a button is clicked, run addTask
$('button').click(addTask);


//adds a listener to the document looking for a click event on something with an id of "delete" - can't use .click, because the element is dynamically created
$(document).on('click', '#delete', removeTask);


//when theres a keypress in the input
$("input").keypress(function(event) {

  //listens to see if it was the enter key, and if it was, run addTask
  if (event.which == 13) {
    addTask();
  }
});

function addTask(){
  //get the content (value) of the input box
  var task = $('#newtask').val();

  //append that content to the #tasks div in another div with a span containg an X for deleting
  $('#tasks').append('<div>' + task + '<span id="delete">X</span></div>');

  //clears the content of the input box
  $('#newtask').val("");
}

function removeTask(){
  //grabs the closest div to the element that was clicked (which is the one it is in) and removes it.
  $(this).closest('div').remove();
}
