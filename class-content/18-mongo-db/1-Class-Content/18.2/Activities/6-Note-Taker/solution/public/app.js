/* Note Taker (18.2.6)
 * front-end
 * ==================== */ 

// Loads results onto the page
function getResults(){
  // empty any results currently on the page
  $('#results').empty();
  // grab all of the current notes
  $.getJSON('/all', function(data) {
    // for each note...
    for (var i = 0; i<data.length; i++){
      // ...populate #results with a p-tag that includes the note's title
      // and object id.
      $('#results').prepend('<p class="dataentry" data-id=' +data[i]._id+ '><span class="dataTitle" data-id=' +data[i]._id+ '>' + data[i].title + '</span><span class=deleter>X</span></p>');
    }
  });
}

// runs the getResults function as soons as the script is executed
getResults();

// when the #makenew button is clicked
$(document).on('click', "#makenew", function(){
  // AJAX POST call to the submit route on the server. 
  // This will take the data from the form and send it
  // to the server. 
  $.ajax({
    type: "POST",
    dataType: "json",
    url: '/submit',
    data: {
      title: $('#title').val(),
      note: $('#note').val(),
      created: Date.now()
    }
  })
  // If that API call succeeds, 
  // add the title and a delete button for the note to the page
  .done(function(data){
    // add the title and delete button to the #results section
    $('#results').prepend('<p class="dataentry" data-id=' + data._id + '><span class="dataTitle" data-id=' +data._id+ '>' + data.title + '</span><span class=deleter>X</span></p>');
    // clear the note and title inputs on the page
    $('#note').val("");
    $('#title').val("");
  }
  );
});

// when the #clearall button is pressed
$('#clearall').on('click', function(){
  // make an AJAX GET request to delete the notes from the db
  $.ajax({
    type: "GET",
    dataType: "json",
    url: '/clearall',
    // on a successful call, clear the #results section
    success: function(response){
      $('#results').empty();
    }
  });
});


// when user clicks the deleter button for a note
$(document).on('click', '.deleter', function(){
  // save the p tag that encloses the button
  var selected = $(this).parent();
  // make an AJAX GET request to delete the specific note 
  // this uses the data-id of the p-tag, which is linked to the specific note
  $.ajax({
    type: "GET",
    url: '/delete/' + selected.data('id'), 

    // on successful call
    success: function(response){
      // remove the p-tag from the DOM
      selected.remove();
      // clear the note and title inputs
      $('#note').val("");
      $('#title').val("");
      // make sure the #actionbutton is submit (in case it's update)
      $('#actionbutton').html('<button id="makenew">Submit</button>');
    }
  });
});

// when user click's on note title, show the note, and allow for updates
$(document).on('click', '.dataTitle', function(){
  // grab the element
  var selected = $(this);
  // make an ajax call to find the note
  // this uses the data-id of the p-tag, which is linked to the specific note
  $.ajax({
    type: "GET",
    url: '/find/' + selected.data('id'),
    success: function(data){
      // fill the inputs with the data that the ajax call collected
      $('#note').val(data.note);
      $('#title').val(data.title);
      // make the #actionbutton an update button, so user can
      // update the note s/he chooses
      $('#actionbutton').html('<button id="updater" data-id="'+ data._id +'">Update</button>');
    }
  });
});

// when user click's update button, update the specific note
$(document).on('click', '#updater', function(){
  // save the selected element
  var selected = $(this);
  // Make an AJAX POST request.
  // This uses the data-id of the update button, 
  // which is linked to the specific note title 
  // that the user clicked before
  $.ajax({
    type: "POST",
    url: '/update/' + selected.data('id'),
    dataType:"json",
    data: {
      title: $('#title').val(),
      note: $('#note').val()
    },
    // on successful call
    success: function(data){
      // clear the inputs
      $('#note').val("");
      $('#title').val("");
      // revert action button to submit
      $('#actionbutton').html('<button id="makenew">Submit</button>');
      // grab the results from the db again, to populate the DOM.
      getResults();
    }
  });
});
