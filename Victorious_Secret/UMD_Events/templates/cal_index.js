'use strict';
$(document).ready(function(){

	$('.calendar-header').animate({'color':'#20c4c8'});
	var t = $('.header-current-month').text();
		$('.header-current-month').text(t.replace(',',''));
		$('.header-prev-month, .header-next-month, .header-prev-year, .header-next-year').animate({'width':'12px'},400, 'easeInOutBack');
		$('.header-current-day-number').animate({'right':'6px'});
		$('.month-wrapper').animate({'margin-right':'50px'},400, 'easeInOutBack', function(){
		$('.small-wrapper').slideDown(250, function(){
       	});
       	$('.header-current-day-number').animate({'top':'60px'});
		var res = $dayNumber.text().replace(',','');
		findItem(parseInt(res));		
		});
		$('.calendar-header').off('click');

	var $dayNumber = $('.header-current-day-number');
	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
         $dayNumber.text(', ' + $('.gotcha').text());
			$('.gotcha').animate({'top':'-50px', 'opacity': '0'},300, function(){});
			$('.small-wrapper').slideUp(300);
			$('.header-current-day-number').animate({'top':'0'}, 500, 'easeInOutBack', function(){
			$(this).animate({'right':'0'});
			$('.calendar-header').animate({'color':'black'});
			$('.month-wrapper').animate({'margin-right':'0'}, 500, 'easeInOutBack');
			$('.header-prev-month, .header-next-month, .header-prev-year, .header-next-year').animate({'width':'0'});
			$('.gotcha').parent().animate({'color':'#808080'});
			$('.gotcha').remove();
		});
			$('.gotcha').animate({});
			$('.calendar-header').on('click',function(e){
				clickCalendar(e);
				$dayNumber.text(', ' + getRandomArbitrary(1,30));//
			});		
		};
	});
	
	

	/*function clickCalendar(e){
		e.stopPropagation();
		$('.calendar-header').animate({'color':'#20c4c8'});
		var t = $('.header-current-month').text();
		$('.header-current-month').text(t.replace(',',''));
		$('.header-prev-month, .header-next-month, .header-prev-year, .header-next-year').animate({'width':'12px'},400, 'easeInOutBack');
		$('.header-current-day-number').animate({'right':'6px'});
		$('.month-wrapper').animate({'margin-right':'50px'},400, 'easeInOutBack', function(){
		$('.small-wrapper').slideDown(250, function(){
         
       });
       $('.header-current-day-number').animate({'top':'60px'});
		var res = $dayNumber.text().replace(',','');
		findItem(parseInt(res));		
		});
		$('.calendar-header').off('click');
	};	*/
	function getRandomArbitrary(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}	
		


		
    function findItem(val){
				$('.gotcha').remove();
		    $('.column-item').not('.weekday, .prev-month, .next-month').each( function() {
		        if($(this).text() == val){
								$(this).append('<div class="gotcha"></div>');
								$(this).animate({'color':'white'},250);
								var pos = $(this).position();
								 var block = $(this).find('.gotcha').first();
				block.text($(this).text());
        var pos = $(this).position();
        block.css({'top': '-50px', 
									 'left': pos.left, 
									 'opacity': 0})
						 .animate({'top':pos.top,
											'opacity': '1'}, 400, 'easeInOutBack');
            }
        });
    }
	
		$('.calendar-header').on('click',function(e){
			clickCalendar(e);
		});	
	

    $('.column-item').not('.weekday').on('click', function(){
/*        $('.gotcha').fadeOut(300,function(){
						$(this).remove();
				});*/
			  //$(this).find('.gotcha').remove();
				$(this).css({'color':'white'});
				$('.gotcha').parent().animate({'color':'#808080'}, 250);
			  $('.gotcha').remove();
        $(this).prepend('<div class="gotcha"></div>');
        var block = $(this).find('.gotcha').first();
				block.text($(this).text());
        var pos = $(this).position();
        block.css({'top': 0, 
									 'left': pos.left, 
									 'opacity': 0})
						 .animate({'top':pos.top,
											'opacity': '1'}, 350, 'easeInOutBack');
    });
  
  	$('.calendar-base').on('click', function(e){
      e.stopPropogation();
    });
		
});