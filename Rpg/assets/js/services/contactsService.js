var app = angular.module("myApp");
var contactsService=app.service("contactsService", function(){
	
	this.saveContact=function(jsonToPersist){
		var url = "http://localhost:8080/RubricaService/rest/addContact";
		$.post(url,jsonToPersist);
	};
	
	this.updateContact=function(contact){
	
	};
	
	this.deleteContact=function(contact){
		
	};
	
	this.getContacts=function(){
		
	};
	
	
	
});