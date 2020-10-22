

	    $(document).ready(function() {
	    $("#responseme").click(function() {
		
		  try {


        $.ajax({
            type: "GET",
            url: "responseme/rme.ashx?phone=" + $('#phone').val(),
            timeout: 55000,
            async: false,
   success : function(text)
         {
             alert(text);
         }

        });


    }
    catch (e) {  }

	        });
	   
	    });
