 $('.scrollMe').click(function() {
		 
		 let getElement = $(this).attr('href');
		 
		 if($(getElement).length) {
			 
			 let getOffset = $(getElement).offset().top;
			 
			 let targetDistance = 0;
			 
			 $('html,body').animate({
				 
				 scrollTop: getOffset - targetDistance
				 
			 }, 300);
		 }
		 
		 return false;
	 });