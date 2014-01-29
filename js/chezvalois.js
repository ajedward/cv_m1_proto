var IMG_MAXHEIGHT = 768;
var IMG_MAXWIDTH = 768;

var gCurrentImageId = 'client01_image01';
var gFirstImgInViewPort = null;

var pos = null;

function contructPosMap2() {
	log.debug("contructPosMap() -> ENTER");
	pos = $(".img").map(function(){
	  var $this = $(this);
	  
	  log.debug("this is " + $this + "this.offset().top is " + $this.offset().top);
	  return {
	    el: $this,
	    id: $this.attr('id'),
	    top: $this.offset().top,
	    left: $this.offset().left
	  };
	}).get();
}

function contructPosMap() {
	return function() {
		log.debug("contructPosMap() -> ENTER");
		pos = $(".img").map(function(){
		  var $this = $(this);
		  
		  log.debug("this is " + $this + "this.offset().top is " + $this.offset().top);
		  return {
		    el: $this,
		    id: $this.attr('id'),
		    top: $this.offset().top,
		    left: $this.offset().left
		  };
		}).get();
	}
}

function givenElementInViewport (el) {
    return function () {
    	log.debug('Inside: givenElementInViewport()');
        if ( isElementInViewport(el) ) {
            //your code here, e.g. log.debug('is ' + el);
        	log.debug('is ' + el);
        }
    }
}

function goUp () {
	log.debug("goUp() -> ENTER");	
}

function goDown () {
	log.debug("goDown() -> ENTER");
}

function doResizeWidth() {
	log.debug("doResize() -> ENTER");
	var newImageWidth = $( window ).width() - 180;
	
	if (newImageWidth > IMG_MAXWIDTH) {
		//$( "body" ).prepend( "<div>" + newImageWidth + "</div>" );		
		newImageWidth = IMG_MAXWIDTH;
	}
	$( ".img" ).height(newImageWidth);
	contructPosMap2();
	//$( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );
}

function doResize() {
	log.debug("doResize() -> ENTER");
	var newImageHeight = $( window ).height() - 60;
	
	if (newImageHeight > IMG_MAXHEIGHT) {
		//$( "body" ).prepend( "<div>" + newImageWidth + "</div>" );		
		newImageHeight = IMG_MAXHEIGHT;
	}
	$( ".img" ).height(newImageHeight);
	contructPosMap2();
	//$( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );
}

$( window ).resize(function() {
	doResizeWidth();
});

function goLeft () {
	log.debug("goLeft() -> ENTER");
	
	if (gFirstImgInViewPort == null) {
		return;
	}
	
	log.debug("goLeft() -> Current element is " + gFirstImgInViewPort.id);
	// Find all the images in our parent, and then find our index with that set of images
	var index = $(document).find(".img").index(gFirstImgInViewPort.el);
	var nextImageIndex = index - 1;
	
	log.debug("goLeft() -> Current element index is " + index);
	
	var newLeftPos = 0;
	var newTopPos = 0;
	if (pos != null) {
		
		log.debug('goLeft() -> gFirstImgInViewPortIdx: ' + gFirstImgInViewPortIdx +
				' ; pos.length is ' + pos.length);
		if (gFirstImgInViewPortIdx <= 0) {
    		newLeftPos = pos[pos.length - 1].left;
    		newTopPos = pos[pos.length - 1].top;
		}
		else {
			newLeftPos = pos[gFirstImgInViewPortIdx - 1].left;
			newTopPos = pos[gFirstImgInViewPortIdx - 1].top;
		}
	}
	
	log.debug('goLeft() -> newLeftPos: ' + newLeftPos + ' ; newTopPos: ' + newTopPos +
			' ; prevPos: ' + pos[gFirstImgInViewPortIdx].left);
	if (newLeftPos > pos[gFirstImgInViewPortIdx].left) {
		log.debug('goLeft() -> nextLine');
        
        $('html, body').animate({
            scrollTop: newTopPos - 10
        }, 800);
    	setTimeout(function(e) {
            $('html, body').animate({
                scrollLeft: newLeftPos - 30
            }, 800);
    	}, 800);

	}
	else {
        $('html, body').animate({
            scrollLeft: newLeftPos - 30
        }, 500);
	}
	doResizeWidth();
}

function goRight () {
	log.debug("goRight() -> ENTER");
	
	if (gFirstImgInViewPort == null) {
		return;
	}
	
	log.debug("Current element is " + gFirstImgInViewPort.id);
	// Find all the images in our parent, and then find our index with that set of images
	var index = $(document).find(".img").index(gFirstImgInViewPort.el);
	var nextImageIndex = index + 1;
	
	log.debug("Current element index is " + index);
	
	var newLeftPos = 0;
	var newTopPos = 0;
	if (pos != null) {
		
		log.debug('goRight() -> gFirstImgInViewPortIdx: ' + gFirstImgInViewPortIdx +
				' ; pos.length is ' + pos.length);
		if (gFirstImgInViewPortIdx >= pos.length - 1) {
    		newLeftPos = 0;
    		newTopPos = 0;
		}
		else {
			newLeftPos = pos[gFirstImgInViewPortIdx + 1].left;
			newTopPos = pos[gFirstImgInViewPortIdx + 1].top;
		}
	}
	
	log.debug('goRight() -> newLeftPos: ' + newLeftPos + ' ; newTopPos: ' + newTopPos +
			' ; prevPos: ' + pos[gFirstImgInViewPortIdx].left);
	if (newLeftPos < pos[gFirstImgInViewPortIdx].left) {
		log.debug('goRight() -> nextLine');
        $('html, body').animate({
            scrollLeft: newLeftPos - 30
        }, 800);
    	setTimeout(function(e) {
            $('html, body').animate({
                scrollTop: newTopPos - 10
            }, 800);
    	}, 800);
	}
	else {
        $('html, body').animate({
            scrollLeft: newLeftPos - 30
        }, 500);
	}
	doResizeWidth();
}

function firstImageInViewport() {
    return function () {
//    	log.debug('Inside: idFirstElementInViewport()');

    	var firstImgInViewPort = null;
    	for (var i = 0; i < pos.length; ++i) {
            //log.debug('firstImageInViewport() -> loop element is ' + i + "; pos[i].el is " + pos[i].el[0]);
    		if ( isElementInViewport(pos[i].el[0]) ) {
				if (firstImgInViewPort == null) {
					firstImgInViewPort = pos[i];
					firstImgInViewPortIdx = i;
				}
				else {
					if (pos[i].left <= firstImgInViewPort.left && pos[i].top <= firstImgInViewPort.top) {
						firstImgInViewPort = pos[i];
						firstImgInViewPortIdx = i;
					}
				}
        	}
    	}
//		if ( isElementInViewport(el) ) {
//            //your code here, e.g. log.debug('is ' + el);
//            log.debug('is ' + el);
//        }

        if (firstImgInViewPort == null) {
            log.debug("firstImageInViewport() -> no first image in viewport");
            gFirstImgInViewPort = null;
            gFirstImgInViewPortIdx = -1;
        } 
        else {
//            log.debug("firstImageInViewport() -> first image in viewport: " + firstImgInViewPort);
//            log.debug("firstImageInViewport() -> first image in viewport element: " + firstImgInViewPort.el);
//            log.debug("firstImageInViewport() -> first image in viewport element id: " + firstImgInViewPort.id);
//            log.debug("firstImageInViewport() -> first image in viewport pos... left: " + firstImgInViewPort.left + 
//                    " ; top: " + firstImgInViewPort.top);
            gFirstImgInViewPort = firstImgInViewPort;
            gFirstImgInViewPortIdx = firstImgInViewPortIdx;
        }
        
    }
//    contructPosMap();
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 //&&
        //rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) && /*or $(window).height() */
        //rect.right <= (window.innerWidth || document. documentElement.clientWidth) /*or $(window).width() */
        );
}

function globalOnClick() {
    return function () {
    	goRight();
    }
}


function cv_onLoad() {
	
	// get top positions and references to all images
	doResizeWidth();
	contructPosMap();

	//el = document.getElementById('client01_image01');
	$(document).on('ready', $('body').removeClass("loading"));
	$(window).on('load resize scroll', firstImageInViewport()); 
	/* TODO: this looks like a very bad code */
	setTimeout(firstImageInViewport(), 60); 
	setTimeout(firstImageInViewport(), 6000);
	
	setTimeout(contructPosMap(), 60); 
	setTimeout(contructPosMap(), 6000);
	
	$(document).keydown(function(e) {
		switch(e.which) {
		case 37: // left
			goLeft();
			break;
		case 38: // up
			goUp();
			break;
		case 39: // right
			goRight();
			break;
		case 40: // down
			goDown();
			break;
			default: return;
		}
		e.preventDefault();
	});
	
//
//	// provide document scrolling
	$(document).on("scroll", function() {

//		doResize();

	}).scroll();
	
	$(document).on( "click", globalOnClick() );
	
}

