var utenti=[];
var numClick=0;


function digit_limit_5() {
	var cap = document.getElementById("cap");
	if (cap.value.length > 5) {
		 cap.value = obj.value.slice(0,5); 
	 }
};

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function confermato() {
	var utente=new Object();
	utente.nome=$("#nome").val();
	utente.cognome=$("#cognome").val();
//	utente.eta=calcAge($("#data").val());
	if($('#laurea').prop('checked'))
	utente.laurea="Si";
	else utente.laurea="No";
	utenti.push(utente);
	$('#form').trigger("reset");
};


function aggiungiRighe(){
	var tabella=document.getElementById("tabella");
	if (utenti.length!=0) {
		tabella.style.visibility="visible";
	     var tbody = $("#table-body");
	     tbody.empty();
	     var colonne = $("#thead").length; 
	     var tr = document.createElement('tr');
	     for(var j=0; j<utenti.length; j++){
	    	 var utente=utenti[j];
	          var td = document.createElement('td');
	       tbody.append("<tr>" +
	       		"<td>"+utente.nome+"</td>" +
	       			"<td>"+utente.cognome+"</td>" +
	       			"<td>"+utente.eta+"</td>" +
	       			"<td>"+utente.laurea+"</td>" +
	       			"<td>" +
	       				"<button onclick='canc("+j+")'>" +
	       					" <span class='glyphicon glyphicon-remove'></span></td>" +
	       					"</button>" +
	       		"</tr>");
	     };
	}
	else tabella.style.visibility="hidden";
};

$('#laurea').click(function() {
    $("#tipo_laurea").toggle(this.checked);
});

function canc(j){
	utenti.splice(j,1);
	aggiungiRighe();
};

$(function () {
    $('#data').datetimepicker();
});
//
//function calcAge (birthday) {
//	
//    da = new Date(birthday);
//    birthday=$("#birthday").getDate();
//    today     = new Date();
//    var years = (today.getFullYear() - birthday.getFullYear());
//    if (today.getMonth() < birthday.getMonth() || 
//        today.getMonth() == birthday.getMonth() && today.getDate() < birthday.getDate()) {
//        years--;
//    }
//    return years;
//};
