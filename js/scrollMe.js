 $('.scrollMe').click(function() {
		 
		 var getElement = $(this).attr('href');
		 
		 if($(getElement).length) {
			 
			 var getOffset = $(getElement).offset().top;
			 
			 var targetDistance = 0;
			 
			 $('html,body').animate({
				 
				 scrollTop: getOffset - targetDistance
				 
			 }, 300);
		 }
		 
		 return false;
	 });