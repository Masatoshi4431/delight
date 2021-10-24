$(function(){
/* ==================================================

	スムーススクロール

=================================================== */

	$('a[href^="#"]').on('click', function(){
    	var speed    = 400;
	    var href     = $(this).attr("href");
 		var target   = $(href == "#" || href == "" ? 'html' : href);
	    var position = target.offset().top;

		$('body, html').animate({ scrollTop: position }, speed, 'swing');
		return false;
	});

/* ==================================================

	ヘッダー固定

=================================================== */

	var beforePos       = 0;
	var $headerFixed    = $(".js-headerFixed");
	var $headerTarget   = $(".js-headerTarget");
	var $spHeaderFixed  = $(".js-spHeaderFixed");
    var $spHeaderToggle = $(".js-spHeaderToggle");

	function ScrollAnime() {
    	var elemTop = $headerTarget.offset().top;
		var scroll  = $(window).scrollTop();

	    if(scroll == beforePos) {
	
	    } else if(elemTop > scroll || 0 > scroll - beforePos) {
			$headerFixed.removeClass("is-upMove");
			$headerFixed.addClass("is-downMove");
			$spHeaderFixed.removeClass("is-upMove");
			$spHeaderFixed.addClass("is-downMove");
	    } else {
        	$headerFixed.removeClass("is-downMove");
			$headerFixed.addClass("is-upMove");
        	$spHeaderFixed.removeClass("is-downMove");
        	$spHeaderFixed.removeClass("is-open");
        	$spHeaderToggle.removeClass("is-active");
			$spHeaderFixed.addClass("is-upMove");
    	}

	    beforePos = scroll;
	}

	$(window).scroll(function () {
		ScrollAnime();
	});

	$(window).on('load', function () {
		ScrollAnime();
	});

/*=================================================================

    スマホメニュー

================================================================= */
    var $spHeaderMenu_toggle = $(".js-headerToggle");
    var $spHeaderMenu        = $(".js-headerToggleMenu");
    
    $spHeaderMenu_toggle.on('click',function(){
        $spHeaderMenu_toggle.toggleClass('is-active');
        $spHeaderMenu.toggleClass("is-open");
    });

    var $spHeaderMenuList = $(".js-spHeaderMenuList");

    $spHeaderMenuList.on('click', function(event){

        if($spHeaderMenu_toggle.hasClass('is-active')) {
            $spHeaderMenu_toggle.removeClass("is-active");
        }

        if($spHeaderMenu.hasClass('is-open')) {
            $spHeaderMenu.removeClass("is-open");
        }
    });

});
