(function ($, Drupal) {
  Drupal.behaviors.simple = {
    attach: function (context, settings) {
	    
		$('.newsletter .block-simplenews form .form-item-message').insertBefore('.newsletter .block-simplenews form .field--name-mail');
		$('.newsletter .block-simplenews form .form-actions').insertAfter('.newsletter .block-simplenews form .field--name-mail');
		
		var banner = $("#header_top_banner").height();
		if(banner){
			var scrollTop = parseInt(banner);
		}else{
			var scrollTop = parseInt(55);
		}
	    $(window).scroll(function() {
			
			if ($(this).scrollTop() > scrollTop ){
				$('body').addClass("fixed_header");
			} else {
				$('body').removeClass("fixed_header");
			}
			
		});
	    function windowSize() {
		    var width = $(window).width();
			if ( document.getElementById('testimonials_area') ) {
			
	          $('.view-testimonials .views_slideshow_cycle_teaser_section .views_slideshow_slide').each(function () {		
				var img_height = $(this).find('.views-field-field-image').height();
				var description_height = $(this).find('.views-field-field-short-description').height();
				var name_height = $(this).find('.views-field-field-name').height();
				var total_height = parseInt(img_height) + parseInt(description_height) + parseInt(name_height) + parseInt(50);
				if (img_height !== 0) {
					$('.view-testimonials .views_slideshow_cycle_teaser_section,.view-testimonials .views_slideshow_cycle_teaser_section .views_slideshow_slide').height(total_height);
					 return false;
			    }
			  });
			}
			
			if($('.paragraph').hasClass('carousel-mini-image')){
			
	          $('.carousel-mini-image .views_slideshow_cycle_teaser_section .views_slideshow_slide').each(function () {		
				var img_height = $(this).find('.views-field-field-carousel-mini-image img').height();
				if (img_height !== 0) {
					$('.carousel-mini-image .views_slideshow_cycle_teaser_section,.carousel-mini-image .views_slideshow_cycle_teaser_section .views_slideshow_slide').height(img_height);
					 return false;
			    }
			  });
			}
			
	    }
		windowSize();
			$(window).resize(function(){
			windowSize();
		});
		
     }
  };
})(jQuery, Drupal);