 function scrollTo(id) {
		 
		 if($(id).length) {
			 
			 var getOffset = $(id).offset().top;
			 
			 var targetDistance = 50;
			 
			 $('html,body').animate({
				 
				 srcollTop: getOffset - targetDistance
			 }, 500);
		 }
		 
	 }
	 
	 $('.scrollTo').click(function() {
		 
		 var getElement = $(this).attr('href');
		 
		 if($(getElement).length) {
			 
			 var getOffset = $(getElement).offset().top;
			 
			 var targetDistance = 0;
			 
			 $('html,body').animate({
				 
				 scrollTop: getOffset - targetDistance
				 
			 }, 1200);
		 }
		 
		 return false;
	 });