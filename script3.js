var person = new Object();
person name = "Petro";
person.age = 20;
person.job = "Senior Software Engineer";
person.sayName = function(){
	console.log ( this.name);
};