 function scrollTo(id) {
		 
		 if($(id).length) {
			 
			 let getOffset = $(id).offset().top;
			 
			 let targetDistance = 50;
			 
			 $('html,body').animate({
				 
				 srcollTop: getOffset - targetDistance
			 }, 500);
		 }
		 
	 }
	 
	 $('.scrollTo').click(function() {
		 
		 let getElement = $(this).attr('href');
		 
		 if($(getElement).length) {
			 
			 let getOffset = $(getElement).offset().top;
			 
			 let targetDistance = 0;
			 
			 $('html,body').animate({
				 
				 scrollTop: getOffset - targetDistance
				 
			 }, 1200);
		 }
		 
		 return false;
	 });