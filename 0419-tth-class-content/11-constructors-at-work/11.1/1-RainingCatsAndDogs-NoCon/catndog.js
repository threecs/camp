// Special Thanks to Lisa Watkins for providing this code

var dogObject = {
	raining: true,
	noise: 'Woof',
	makeNoise: function(){if(dogObject.raining == true){
		console.log(dogObject.noise);
	}
	}
};

var catObject = {
	raining: false,
	noise: 'Meow',
	makeNoise: function(){if(catObject.raining == true){
		console.log(catObject.noise);
	}
	}
};

if(process.argv[2] == 'dog'){
	dogObject.makeNoise();
}

if(process.argv[2] == 'cat'){
	catObject.makeNoise();
}


