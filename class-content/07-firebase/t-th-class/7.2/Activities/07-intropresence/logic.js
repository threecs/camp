// Link to Firebase
var clickData = new Firebase("https://rcb-cntdown-presence.firebaseio.com/");

// Link to Specific subset of database for tracking users ******** (CRITICAL)
var connectedData 	= new Firebase("https://rcb-codersbay-viewer.firebaseio.com/viewers");	

// Link to userData ******** (CRITICAL)
var userData 		= connectedData.push(); 

// Set Initial Counter 
var initialValue = 100;
var clickCounter = initialValue;	

// -------------------------------------------------------------- (CRITICAL - BLOCK)

// Add ourselves to presence list when online. ******** 
var presenceRef = new Firebase("https://rcb-codersbay-viewer.firebaseio.com/.info/connected");
presenceRef.on("value", function(snapshot) {
  if (snapshot.val()) {

    // Remove ourselves when we disconnect.
    userData.onDisconnect().remove();
    userData.set(true);
  }
});

// Number of online users is the number of objects in the presence list. ********
connectedData.on("value", function(snapshot) {

	// Display the viewer count in the html
	$("#watchers").html(snapshot.numChildren());
  	console.log("# of online users = " + snapshot.numChildren());

});

// -------------------------------------------------------------- (CRITICAL - BLOCK)


// At the initial load, get a snapshot of the current data.
clickData.on("value", function(snapshot) {

	// Print the initial data to the console.
	console.log(snapshot.val());

	// Change the html to reflect the initial value.
	$("#clickValue").html(snapshot.val().clickCount);

	// Change the clickcounter to match the data in the database
	clickCounter = snapshot.val().clickCount;

	// Log the value of the clickCounter
	console.log(clickCounter);

	// Change the HTML Value
	$('#clickValue').html(clickCounter);

// If any errors are experienced, log them to console. 
}, function (errorObject) {

  	console.log("The read failed: " + errorObject.code);

});

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#clickButton").on("click", function() {

	// Reduce the clickCounter by 1
	clickCounter--;

	// Alert User and reset the counter
	if (clickCounter == 0 ) {
		alert("Phew! You made it! That sure was a lot of clicking.");
		clickCounter = initialValue;
	}

	// Save new value to Firebase
	clickData.set({
		clickCount: clickCounter
	});

	// Log the value of clickCounter
	console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restartButton").on("click", function() {

	// Set the clickCounter back to initialValue
	clickCounter = initialValue;
	
	// Save new value to Firebase
	clickData.set({
		clickCount: clickCounter
	});

	// Log the value of clickCounter
	console.log(clickCounter);

	// Change the HTML Values
	$('#clickValue').html(clickCounter);


});

