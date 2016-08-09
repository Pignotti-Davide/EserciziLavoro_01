var users=[];
var selectedDate;


function digit_limit_5() {
	var cap = $("#cap");
	if (cap.value.length > 5) {
		cap.value = obj.value.slice(0,5); 
	}
};

function isNumberKey(evt){
	var charCode = (evt.which) ? evt.which : event.keyCode
			if (charCode > 31 && (charCode < 48 || charCode > 57)) {
				return false;
			}
	return true;
}

function confirm() {
	var user=new Object();
	user.nome=$("#nome").val();
	user.cognome=$("#cognome").val();
	user.eta=calcAge($("#data").val());
	if($('#laurea').prop('checked')){
		user.laurea="Si";
	}
	else user.laurea="No";
	users.push(user);
	$('#form').trigger("reset");
};


function addRows(){
	var table=$("#table_panel");
	if (users.length!=0) {
		table.removeClass("hide");
		table.addClass("show");
		var tbody = $("#table-body");
		tbody.empty();
		var colonne = $("#thead").length; 
		var tr = document.createElement('tr');
		for(var j=0; j<users.length; j++){
			var user=users[j];
			var td = document.createElement('td');
			tbody.append(
					"<tr>" +
					"<td>"+user.nome+"</td>" +
					"<td>"+user.cognome+"</td>" +
					"<td>"+user.eta+"</td>" +
					"<td>"+user.laurea+"</td>" +
					"<td>" +
					"<button class='btn btn-danger' onclick='deleteRow("+j+")'> Delete" +
					"</button>" +
					" </td>" +
					"</tr>"
			);
		};
	}

	else {
		table.removeClass("show");
		table.addClass("hide");
	}
};

function valueChanged()
{
	if($('#laurea').is(":checked"))   {
		$("#tipo_laurea").addClass("show");
		$("#tipo_laurea").removeClass("hide");
	}
	else
		$("#tipo_laurea").addClass("hide");{
			$("#tipo_laurea").removeClass("show");
		}
}

function deleteRow(j){
	users.splice(j,1);
	addRows();
};

$(function () {
	$('#data').datetimepicker({
		format: 'DD/MM/YYYY'
	});

});

function calcAge () {
	birthday= new Date($('#data').datepicker('getDate'));
	today     = new Date();
	var years = (today.getFullYear() - birthday.getFullYear());
	if (today.getMonth() < birthday.getMonth() || 
			today.getMonth() == birthday.getMonth() && today.getDate() < birthday.getDate()) {
	}
	return years;
};
