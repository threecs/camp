function DigitalPal()
{
	this.hungry = false;
	this.sleepy = false;
	this.bored = true;
	this.age = 0;

	this.feed = function(){
		if(this.hungry == true)
		{
			console.log('That was yummy!');
			this.sleepy = true;
			this.hungry = false;
		} else {
			console.log('No thanks! I\'m full');
		}
	};

	this.sleep = function(){
		if(this.sleepy){
			console.log('Zzzzzzzz');
			this.sleepy = false;
			this.bored = true;
			this.increaseAge();
		} else {
			console.log('No way I\'m not tired');
		}
	};

		this.play = function(){
			if(this.bored){
				console.log('Yay! Let\'s play');
				this.bored = false;
				this.hungry = true;
			} else {
				console.log('Not right now. Maybe later?');
			}
		};

		this.increaseAge = function(){
			this.age += 1;
			// Alternatives
			//this.age++;
			//this.age = this.age + 1;
		};
	}

this.dog = new DigitalPal();
//console.log(dog.feed());

//node digital-class-write-along.js dog feed
var animal = process.argv[2];
var method = process.argv[3];

this[animal][method]();