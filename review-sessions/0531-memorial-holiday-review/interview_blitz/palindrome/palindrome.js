function isPalindrome(target){

	//Walk through the word
	for(var i = 0; i < target.length; i++){
		//console.log('target: ' + target[i] + ' index: ' + i);
		//console.log('target2: ' +target[target.length - i -1] + " index: " +[target.length - i -1]);
		//If it doesn't mirror; get out
		if( target[i] !== target[target.length - i - 1] ){
			return false;
		}
	}
	//The word matches and we have a palimdrome
	return true;
	//console.log(target.length);
}

$(document).ready(function(){
	$('#test').on('click',function(){
		word = $('#word').val();
		if(isPalindrome(word)){
			$('#result').text('Yes, ' + word + ' is a Palindrome!');
		} else {
			$('#result').text('No, ' + word + ' is not a Palindrome!');
		}
	});
});
