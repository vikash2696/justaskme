$(document).on("click", '#addBtn', function() {
	var formData = $('#addQuestion').serializeArray();
	console.log(formData); 
	$.ajax({
		url: "/addQuestion",
		data: formData,
		method: "POST",
		success: function(result){
			return true;
		}
	});
});

$(document).on("keyup", '.question_area', function() {
  var question = {"search":this.value};
  if(question.search.length==0) {
  	$('#pop-up').hide();
  }else {
		$.ajax({
			url: "/searchQuestion",
			data: question,
			method: "POST",
			success: function(result){
				$('#pop-up').html('');
				if(result.title.length>0){
					var table = "<table class='table'>";
					for(var i=0;i< result.title.length;i++) {
						table+="<tr><td>"
						table+=result.title[i].question;
						table+="</td></tr>"
					}
					table+="</table>";
					$('#pop-up').html(table);
				$('div#pop-up').show();
				} else {
					$('#pop-up').hide();
				}
			}
		});
	}
});
$( window ).load(function() {
  $('[id*=cke_ansEditor]').hide();
  // $('[id*=saveBtn').hide();
});

$(document).on("click", '.ansBtn', function() {
	var id = $(this).attr('id');
	$('#cke_ansEditor-'+id).toggle();
	// $('#saveBtn'+id).show();
});

$(document).on("click", '.saveBtn', function() {
	// alert($(this).attr('id'));
var id = "editor-"+$(this).attr('id');

	
	// var formData = $(this).parent('#ansQuesForm'+id).serializeArray();
	// console.log(formData); 
	return;
	$.ajax({
		url: "/addQuestion",
		data: formData,
		method: "POST",
		success: function(result){
			return true;
		}
	});
});

