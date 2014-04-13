// JavaScript Document
document.createElement('header');
document.createElement('nav');






//instagram code
jQuery(document).ready(function() {
	//fancybox
    $("#video1").click(function () {
			$.fancybox({
				'padding': 0,
				'autoScale': false,
				'transitionIn': 'none',
				'transitionOut': 'none',
				'title': this.title,
				'width': 1067,
				'height': 600,
				'href': this.href,
				'type': 'iframe'
			});
        	return false;
    }); 
	
	$("#video2").click(function () {
			$.fancybox({
				'padding': 0,
				'autoScale': false,
				'transitionIn': 'none',
				'transitionOut': 'none',
				'title': this.title,
				'width': 1067,
				'height': 600,
				'href': this.href,
				'type': 'iframe'
			});
        	return false;
    }); 
	
	$("#video3").click(function () {
			$.fancybox({
				'padding': 0,
				'autoScale': false,
				'transitionIn': 'none',
				'transitionOut': 'none',
				'title': this.title,
				'width': 1067,
				'height': 600,
				'href': this.href,
				'type': 'iframe'
			});
        	return false;
    }); 
	
	$("#video4").click(function () {
			$.fancybox({
				'padding': 0,
				'autoScale': false,
				'transitionIn': 'none',
				'transitionOut': 'none',
				'title': this.title,
				'width': 1067,
				'height': 600,
				'href': this.href,
				'type': 'iframe'
			});
        	return false;
    }); 
	$("#video5").click(function () {
			$.fancybox({
				'padding': 0,
				'autoScale': false,
				'transitionIn': 'none',
				'transitionOut': 'none',
				'title': this.title,
				'width': 1067,
				'height': 600,
				'href': this.href,
				'type': 'iframe'
			});
        	return false;
    }); 
	
		
	
 
	
	$.getJSON("http://api.twitter.com/1/statuses/user_timeline/turtle_media.json?count=1&include_rts=1&callback=?", function(data) {
		
		
    	$("#twitter").html(data[0].text + " - " + $.timeago(data[0].created_at));		
	});

	$(function() {
		$(".instagram").instagram({
		 //userId: '9809338' 
		 userId: '236482990'
		 ,accessToken: '26251887.a523d3d.fef66c0a42a0486c94e5260aa2a91b41'
		 ,clientId: 'a523d3d5e9754be996a1c5a728867e3d'
		 ,image_size: 'standard_resolution'
		 //,image_size: 'thumbnail'
		});
	});
	
	
	$(function() {
		$(".instagram1").instagram({
		 //userId: '9809338' 
		 hash: 'beach'
		 ,accessToken: '26251887.a523d3d.fef66c0a42a0486c94e5260aa2a91b41'
		 ,clientId: 'a523d3d5e9754be996a1c5a728867e3d'
		 ,image_size: 'standard_resolution'
		 ,show: '5'
		 //,image_size: 'thumbnail'
		});
	});
	

 
	/*
  // Vimeo API nonsense
  var player = document.getElementById('player_1');
  $f(player).addEvent('ready', ready);
 
  function addEvent(element, eventName, callback) {
    if (element.addEventListener) {
      element.addEventListener(eventName, callback, false)
    } else {
      element.attachEvent(eventName, callback, false);
    }
  }
 
  function ready(player_id) {
    var froogaloop = $f(player_id);
    froogaloop.addEvent('play', function(data) {
      $('.flexslider').flexslider("pause");
    });
    froogaloop.addEvent('pause', function(data) {
      $('.flexslider').flexslider("play");
    });
  }
 
   
  // Call fitVid before FlexSlider initializes, so the proper initial height can be retrieved.
  $(".flexslider")
    .fitVids()
    .flexslider({
      animation: "slide",
      useCSS: false,
      animationLoop: false,
      smoothHeight: true,
      before: function(slider){
        $f(player).api('pause');
      }
  });*/
  
  
    var vimeoPlayers = jQuery('.flexslider').find('iframe'), player;
 
    for (var i = 0, length = vimeoPlayers.length; i < length; i++) {
            player = vimeoPlayers[i];
            $f(player).addEvent('ready', ready);
    }
 
    function addEvent(element, eventName, callback) {
        if (element.addEventListener) {
            element.addEventListener(eventName, callback, false)
        } else {
            element.attachEvent(eventName, callback, false);
        }
    }
 
    function ready(player_id) {
        var froogaloop = $f(player_id);
        froogaloop.addEvent('play', function(data) {
            jQuery('.flexslider').flexslider("pause");
        });
        froogaloop.addEvent('pause', function(data) {
            jQuery('.flexslider').flexslider("play");
        });
    }
 
    jQuery(".flexslider")
    .fitVids()
    .flexslider({
        animation: "slide",
        animationLoop: true,
        smoothHeight: true,
        useCSS: false,
        before: function(slider){
            if (slider.slides.eq(slider.currentSlide).find('iframe').length !== 0)
                  $f( slider.slides.eq(slider.currentSlide).find('iframe').attr('id') ).api('pause');
        }
    });
  
  
  

	
			
});



 
