     var parts = document.location.search.substr(1).split("&");
	     var pcode;
	     for (i = 0; i < parts.length; i++) {
	         if (parts[i].indexOf("pcode=") !== -1) {

	             pcode = parts[i].split('=')[1];

	         }

if (parts[i].indexOf("yclid=") !== -1) pcode='yandex';
	     }

	     if (pcode && pcode != 'undefined') {
	         var expired_date = new Date();
	         expired_date.setDate(expired_date.getDate() + 30);
	         document.cookie = 'pcode=' + pcode + '; expires=' + expired_date + '; path=/';
	     }