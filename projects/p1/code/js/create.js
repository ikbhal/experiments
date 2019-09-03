i = 0;
$(document).ready(function(){
	console.log("I am ready");


	$('#command').keypress(function(event){
	
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
			var command = $("#command").val();
			alert('Command:' + $("#command").val());
			
			
		}
	
	});
});

