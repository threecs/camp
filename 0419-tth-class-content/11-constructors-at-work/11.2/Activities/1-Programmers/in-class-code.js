function Programmer(name, title, age, language)
{
	this.name = name;
	this.title = title;
	this.age = age;
	this.language = language;
	this.printStats = function(){
		console.log(this.name + "\n" + this.title +
			"\n" + this.age + "\n" + this.language);
	};
}

var programmer1 = new Programmer('Josh', 'Boss Programmer', 30, 'Node.js');
programmer1.printStats();