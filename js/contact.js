$(document).ready(function() {  	
	$(".modalbox").fancybox();
	$("#contact").submit(function() {
	return false;
});

$("#send").on("click", function(){
  	var emailval  = $("#email").val();  	
  	var msgval    = $("#msg").val();  	
  	var msglen    = msgval.length;  	
  	var mailvalid = validateEmail(emailval);    	
  	if(mailvalid == false) {  		
  		$("#email").addClass("error");  	
  	}  	else if(mailvalid == true){  		
  		$("#email").removeClass("error");  	
  	}    	if(msglen < 4) {  	
  		$("#msg").addClass("error");  	
  	}  	else if(msglen >= 4){  		
  		$("#msg").removeClass("error");  	
  	};
  });

if(mailvalid == true && msglen >= 4) {  		
$("#send").replaceWith("<em>sending...</em>");
$.ajax({
  	type: 'POST',
  	url: 'sendemail.php',
  	data: $("#contact").serialize(),
  	success: function(data) {
  		if(data == "true") {
  			$("#contact").fadeOut("fast", function(){  						
  			$(this).before("<strong>Success! Thanks for contacting me. I'll get back to you shortly!</strong>");
  			setTimeout("$.fancybox.close()", 1000);
			});
		}
		}
	});
};
});