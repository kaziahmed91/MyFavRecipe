$(document).ready(function(){ 
 	$('.nav-pills a').click(function()	{
    $(this).tab('show');
	});

//Click handlers for instructions//
	$('.first').click(function() { 
		$(this).html('next').addClass('pull-right').css("margin-top" ,"30px");
		$(this).parent().addClass('inst-wrap');
		$('.instructions').css("margin-top","80px");
	  	$(".instructions > ol:first").show();
		   	if ($(".instructions > li:visible").next().length != 0) {
		        $(".instructions > li:visible").next().show().prev().hide(); }
		   	else {
	            $(".instructions > li:visible").hide();
	            $(".instructions > li:first").show();
		        }
		        return false;
		    })

	$('.second').click(function() { 
		$(this).parent().addClass('inst-wrap');
		$(this).html('next').addClass('pull-right').css("margin-top" ,"30px");
		$('.instructions').css("margin-top","80px");
	  	$(".instructions2 > ol:first").show();

		   	if ($(".instructions2 > li:visible").next().length != 0) {
		        $(".instructions2 > li:visible").next().show().prev().hide(); }
		  else {
		        $(".instructions2 > li:visible").hide();
		        $(".instructions2 > li:first").show();
		        }
		        return false;
			});

   	$('.third').click(function() { 
   	   	$(this).parent().addClass('inst-wrap');
		$(this).html('next').addClass('pull-right');
		$('.instructions').css("margin-top","80px");
   		$(".instructions3 > ol:first").show();

   			if ($(".instructions3 > li:visible").next().length != 0) {
            	$(".instructions3 > li:visible").next().show().prev().hide(); }
   		else {
	            $(".instructions3 > li:visible").hide();
            	$(".instructions3 > li:first").show();
        }
        return false;
	});

//Click handlers for ingredients
	$('.checkbox').click(function(){
        var checkbox = $(this).children('input[type=checkbox]');
        
        if (checkbox.is(':checked')) {
            $(this).parent('li').addClass('selected');
    } else {
            $(this).parent('li').removeClass('selected');
        }
    });


    $('.btn-submit').click(function() {
    	$('.grocery-list p').remove();
     	var values = $('input:checkbox:checked').map(function () {
  			return this.value;
		}).get();
 		var gList = $('ul.mylist');
 		$.each(values, function(i) {
    	var li = $('<li></li>').addClass('grocery-basket');
			li.appendTo(gList).text(values[i]);
        });

    });
        $('body').on('click', 'li.grocery-basket',function() { 
        	$(this).remove();
        });




    });
       

		






 



		
