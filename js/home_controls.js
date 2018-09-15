/*
********************************************************************************
          NAVBAR FIXED & SCROLL CONTROL
********************************************************************************
*/
/*
$(document).scroll(function() 
	{
		var documentScrollTop = $(document).scrollTop();
		if (documentScrollTop > $('#slide1').height()) 
		{
			$('.navbar').addClass('fixedattop');
			var shiftContent = $('.navbar').height();
		}
		else 
			if ($('.navbar').hasClass('fixedattop')) 
			{
				$('.navbar').removeClass('fixedattop');
			}
	}	
);
*/
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#navbar');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-inverse").css('background-color', '#381a56');
       } else {
          $(".navbar-inverse").css('background-color', 'rgba(255,255,255,0)');
       }
   });
    }
});