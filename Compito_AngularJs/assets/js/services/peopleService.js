var app = angular.module("myApp");
var peopleService=app.service('peopleService', function() {
   
	people=[];
	
	this.savePerson= function(person){
		var aPerson=new Object();
		aPerson.name=person.name;
		aPerson.surname=person.surname;
		aPerson.age="";
		if(person.degree){
			aPerson.degree="Si";
		}
		else aPerson.degree="No";
		people.push(aPerson);
	};
	this.deletePerson=function(index){
		people.splice(index,1);
	};
	
	this.getPeople=function(){
		return people;
	};
});