function Character(name, profession, gender, age, strength, hitpoints){
	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.strength = strength;
	this.hitpoints = hitpoints;
	this.printStats = function(){
		for(var property in this){
			if(typeof this[property] != 'function'){
				console.log(property + ": "+ this[property]);
			}
		}
		//console.log('Name :' + this.name);
	};
	this.isAlive = function(){
		if(this.hitpoints > 0)
		{
			//console.log('You are alive!');
			return true;
		} else {
		 return false;
		}
	};
}


var spongeBob = new Character('SpongeBob','Fry Cook', 'male', 9, 57, 200, true);