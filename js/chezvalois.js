var IMG_MAXHEIGHT = 768;
var IMG_MAXWIDTH = 900;

var gCurrentImageId = 'client01_image01';
var gFirstImgInViewPortIdx = 0;
//var gFirstImgInViewPort = null;

var pos = null;

function contructPosMap2() {
	console.log("DEBUG: contructPosMap() -> ENTER");
	pos = $(".img").map(function(){
	  var $this = $(this);
	  
	  console.log("DEBUG: this is " + $this + "this.offset().top is " + $this.offset().top);
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
		console.log("DEBUG: contructPosMap() -> ENTER");
		pos = $(".img").map(function(){
		  var $this = $(this);
		  
		  console.log("DEBUG: this is " + $this + "this.offset().top is " + $this.offset().top);
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
    	console.log('DEBUG: Inside: givenElementInViewport()');
        if ( elementInViewport(el) ) {
            //your code here, e.g. console.log('DEBUG: is ' + el);
        	console.log('DEBUG: is ' + el);
        }
    }
}

function goUp () {
	console.log("DEBUG: goUp() -> ENTER");	
}

function goDown () {
	console.log("DEBUG: goDown() -> ENTER");
}

function doResizeWidth() {
	console.log("DEBUG: doResizeWidth() -> ENTER");
	var newImageWidth = $( window ).width() - 180;
	console.log("DEBUG: doResize() -> newImageWidth set to " + newImageWidth);
	
	if (newImageWidth > IMG_MAXWIDTH) {
		//$( "body" ).prepend( "<div>" + newImageWidth + "</div>" );		
		newImageWidth = IMG_MAXWIDTH;
	}
	
	console.log("DEBUG: doResize() -> resizing width for .img to " + newImageWidth);
	$( ".img" ).width(newImageWidth);

//	var newImageHeight = $( window ).height() - 60;
//
//	if (newImageHeight > IMG_MAXHEIGHT) {
//		//$( "body" ).prepend( "<div>" + newImageWidth + "</div>" );		
//		newImageHeight = IMG_MAXHEIGHT;
//		$( ".img" ).width(newImageWidth - 200);
//	}

	
	contructPosMap2();
	//$( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );
}

function doResize() {
	console.log("DEBUG: doResize() -> ENTER");
	var newImageHeight = $( window ).height() - 60;
	
	console.log("DEBUG: doResize() -> newImageHeight set to " + newImageHeight);
	if (newImageHeight > IMG_MAXHEIGHT) {
		//$( "body" ).prepend( "<div>" + newImageWidth + "</div>" );		
		newImageHeight = IMG_MAXHEIGHT;
	}

	console.log("DEBUG: doResize() -> resizing height for .img to " + newImageHeight);
	$( ".img" ).height(newImageHeight);
	contructPosMap2();
	//$( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );
}

$( window ).resize(function() {
	
	doResizeWidth();
//	
//	
//	var divImg1 = $('#' + pos[0].id).parent();
//	var divImg1Location = divImg1.offset();
//	var divImg2 = $('#' + pos[1].id).parent();
//	var divImg2Location = divImg2.offset();
//	var divImg3 = $('#' + pos[2].id).parent();
//	var divImg3Location = divImg3.offset();
//
//	var currentImgDiv = $('#' + pos[gFirstImgInViewPortIdx].id).parent();
//	var divLocation = currentImgDiv.offset();
//	var portfolioSlider = $('#' + pos[gFirstImgInViewPortIdx].id).parent().parent();
//	var marginLeft = portfolioSlider.css('margin-left').replace('px', '');
//	
//	var marginLeftNewVal = (0 - divLocation.left) + 'px';
//	
//	console.log("DEBUG: $( window ).resize() -> currentImgDiv.attr('id'): " + currentImgDiv.attr('id') +
//			" ; gFirstImgInViewPortIdx: " + gFirstImgInViewPortIdx +
//			" ; marginLeftNewVal: " + marginLeftNewVal +
//			" ; port1div1.left: " + divImg1Location.left +
//			" ; port1div2.left: " + divImg2Location.left +
//			" ; port1div3.left: " + divImg3Location.left +
//			" ; divLocation.left: " + divLocation.left
//			);
//	
//	$('#' + pos[gFirstImgInViewPortIdx].id).parent().parent().css('margin-left', marginLeftNewVal);
//    $('#' + pos[gFirstImgInViewPortIdx].id).parent().parent().animate({
//    	'marginLeft': 0 - divLocation.left
//    }, 0);
});


// Keep a temporary backup of this method to implement goRight()
function goLeftDeprecated () {
	console.log("DEBUG: goLeft() -> ENTER");
	
	// TODO: verify second part of '||' (ignores items that are indexed zero in the DOM).
	if (gFirstImgInViewPortIdx == null || gFirstImgInViewPortIdx <= 0) {
		return;
	}
	
	console.log("DEBUG: goLeft() -> Current element is " + pos[gFirstImgInViewPortIdx].id);
	// Find all the images in our parent, and then find our index with that set of images
	var index = $(document).find(".img").index(pos[gFirstImgInViewPortIdx].el);
//	var nextImageIndex = index - 1;
	
	console.log("DEBUG: goLeft() -> Current element index is " + index);
	
	var newLeftPos = 0;
	var newTopPos = 0;
	if (pos != null) {
		
		console.log('DEBUG: goLeft() -> gFirstImgInViewPortIdx: ' + gFirstImgInViewPortIdx +
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
	
	console.log('DEBUG: goLeft() -> newLeftPos: ' + newLeftPos + ' ; newTopPos: ' + newTopPos +
			' ; prevPos: ' + pos[gFirstImgInViewPortIdx].left);
	if (newLeftPos > pos[gFirstImgInViewPortIdx].left) {
		console.log('DEBUG: goLeft() -> nextLine');
        
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
//	doResizeWidth();
	--gFirstImgInViewPortIdx;
}

function goLeft() {
	console.log("DEBUG: goLeft() -> ENTER");
	
	if (gFirstImgInViewPortIdx == null || gFirstImgInViewPortIdx < 0) {
		return;
	}
	
	console.log("DEBUG: Current element is " + pos[gFirstImgInViewPortIdx].id);
	
	// Find all the images in our parent, and then find our index with that set of images
	var index = $(document).find(".img").index(pos[gFirstImgInViewPortIdx].el);
	
//	var nextImageIndex = (index >= 1) ? (index - 1) : index;
	
	console.log("DEBUG: Current element index is " + index);
	
	var nextItemIdx = ((gFirstImgInViewPortIdx == 0) ? 0 : (gFirstImgInViewPortIdx-1));
	
	if (gFirstImgInViewPortIdx == 0) {
		alert("DEBUG: goLeft() -> (nextItemIdx == 0), Intentionally doing nothing for the end of left nav.");
		console.log('DEBUG: goLeft() -> (nextItemIdx == 0), intentionally doing nothing for the end of left nav');
		return;
	}
	
	console.log("DEBUG: gFirstImgInViewPortIdx is " + gFirstImgInViewPortIdx + 
			   "; nextItemIdx is " + nextItemIdx +
			   "; pos.length is " + pos.length);
	
	var curItemPortfolioContainer = $('#' + pos[gFirstImgInViewPortIdx].id).parent().parent();
	var nextItemPortfolioContainer = $('#' + pos[nextItemIdx].id).parent().parent();
	
	console.log("DEBUG: curItemPortfolioContainer.attr('id') is " + curItemPortfolioContainer.attr('id') +
			   "; nextItemPortfolioContainer.attr('id') is " + nextItemPortfolioContainer.attr('id')
			   );

	// If the parent of the parent (i.e. the portfolio container) 
	// is different from the next...
	if (curItemPortfolioContainer.attr('id') != nextItemPortfolioContainer.attr('id')) {
		// TODO: implement the end of portfolio behaviour.
		alert("DEBUG: goLeft() -> prevLine, Intentionally doing nothing for the end of left nav.");
		console.log('DEBUG: goLeft() -> nextLine, itentionally doing nothing for the end of left nav');
		return;
//        $('#' + pos[gFirstImgInViewPortIdx].id).parent().parent().animate({
//        	'marginLeft': 0 // TODO: replace this with a constant if we want a baseline left margin, same for goRight.
//        }, 500);
//    	setTimeout(function(e) {
//            $('html, body').animate({
//                scrollTop: newTopPos - 10
//            }, 800);
//    	}, 800);
	}
	else {
		
		// This is the most common case, we are not at the end of our 'rope' going left.
		console.log("DEBUG: goLeft() same line, gFirstImgInViewPortIdx is " + gFirstImgInViewPortIdx);
		
		// AE TODO: by M4 or so, remove all unused calculated values.
		// Calculate a variety of values that can be used to calculated left margin animation (for float'ed div).
		var divLocation = $('#' + pos[gFirstImgInViewPortIdx].id).parent().offset();
		var marginLeft = $('#' + pos[gFirstImgInViewPortIdx].id).parent().parent().css('marginLeft').replace('px', '');
		var nextDivLocation = $('#' + pos[gFirstImgInViewPortIdx - 1].id).parent().offset();
		var outerWidth = $('#' + pos[gFirstImgInViewPortIdx].id).offset().left + $('#' + pos[gFirstImgInViewPortIdx].id).offset().left;
		var scrollBack = $('#' + pos[gFirstImgInViewPortIdx - 1].id).parent().position();

		// Log all of these buggers to see what's most useful.
		console.log("DEBUG: goLeft() About to animate left movement, new marginLeft for " +
				pos[gFirstImgInViewPortIdx].id + " : " + 
				$('#' + pos[gFirstImgInViewPortIdx - 1].id).offset().left + 
				" ; outerWidth is " + outerWidth +
				" ; divLocation.left is " + divLocation.left +
				" ; nextDivLocation.left is " + nextDivLocation.left +
				" ; marginLeft is " + marginLeft +
				" ; scrollBack.left is " + scrollBack.left);
		
		// TODO: remove deprecated scroll on html and body, now we are sliding 
		//       the background div by using marginLeft (float'ed div, otherwise, 'left).
//        $('html, body').animate({
//            scrollLeft: newLeftPos - 30
//        }, 800);
        $('#' + pos[gFirstImgInViewPortIdx].id).parent().parent().animate({
        	'marginLeft': marginLeft - $('#' + pos[gFirstImgInViewPortIdx - 1].id).offset().left
        }, 300);
//        $("#source").animate({left: (left + 10), top:(top + 10 + ((current)*60))}, 500, function()
//        		 { //comments });//        $('html, body').animate({
//            left: newLeftPos - 30
//        }, 500);
	}
	// AE TODO: disabled doResizeWidth() and incrementing gFirstImgInViewPortIdx manually.  Something about offsetting the left
	// margin makes the elementInViewport() method fail to retrieve the correct index.
	
//	doResizeWidth();
	--gFirstImgInViewPortIdx;
	//doResizeWidth();
}


function goRight () {
	console.log("DEBUG: goRight() -> ENTER");
	
	if (gFirstImgInViewPortIdx == null || gFirstImgInViewPortIdx < 0) {
		return;
	}
	
	console.log("DEBUG: Current element is " + pos[gFirstImgInViewPortIdx].id);
	// Find all the images in our parent, and then find our index with that set of images
	var index = $(document).find(".img").index(pos[gFirstImgInViewPortIdx].el);
	
		var nextItemIdx = ((gFirstImgInViewPortIdx >= pos.length - 1) ? 0 : (gFirstImgInViewPortIdx+1));
	
	console.log("DEBUG: gFirstImgInViewPortIdx is " + gFirstImgInViewPortIdx + 
			   "; nextItemIdx is " + nextItemIdx +
			   "; pos.length is " + pos.length);
	
	var curItemPortfolioContainer = $('#' + pos[gFirstImgInViewPortIdx].id).parent().parent();
	var nextItemPortfolioContainer = $('#' + pos[nextItemIdx].id).parent().parent();
	
	console.log("DEBUG: curItemPortfolioContainer.attr('id') is " + curItemPortfolioContainer.attr('id') +
			   "; nextItemPortfolioContainer.attr('id') is " + nextItemPortfolioContainer.attr('id')
			   );

	// If the parent of the parent (i.e. the portfolio container) 
	// is different from the next...
	if (curItemPortfolioContainer.attr('id') != nextItemPortfolioContainer.attr('id')) {
		
		console.log('DEBUG: goRight() -> gFirstImgInViewPortIdx: ' + gFirstImgInViewPortIdx +
				' ; pos.length is ' + pos.length);
		if (nextItemIdx == 0) {
    		newLeftPos = 0; // TODO: Check for assigning margin constants.
    		newTopPos = 0; // TODO: Check for assigning margin constants.
		}
		else {
			// TODO: do we still need newLeftPos?
			newLeftPos = $('#' + pos[nextItemIdx].id).offset().left; 
			newTopPos = $('#' + pos[nextItemIdx].id).offset().top;
		}

		console.log('DEBUG: goRight() -> change line');
//    $('html, body').animate({
//        scrollLeft: newLeftPos - 30
//    }, 800);
	    $('#' + pos[gFirstImgInViewPortIdx].id).parent().parent().animate({
	    	'marginLeft': 0 // TODO: replace this with a constant if we want a baseline left margin, same for goRight.
	    }, 500); // TODO: Change this value to a ratio based on the width of the entire portfolio.
		setTimeout(function(e) {
	        $('html, body').animate({
	            scrollTop: newTopPos - 10
	        }, 300);
		}, 700);
	}
	
//	console.log('DEBUG: goRight() -> newLeftPos: ' + newLeftPos + ' ; newTopPos: ' + newTopPos +
//			' ; prevPos: ' + pos[gFirstImgInViewPortIdx].left);
//	if (newLeftPos < pos[gFirstImgInViewPortIdx].left) {
//		console.log('DEBUG: goRight() -> change line');
////        $('html, body').animate({
////            scrollLeft: newLeftPos - 30
////        }, 800);
//        $('#' + pos[gFirstImgInViewPortIdx].id).parent().parent().animate({
//        	'marginLeft': 0 // TODO: replace this with a constant if we want a baseline left margin, same for goRight.
//        }, 500); // TODO: Change this value to a ratio based on the width of the entire portfolio.
//    	setTimeout(function(e) {
//            $('html, body').animate({
//                scrollTop: newTopPos - 10
//            }, 500);
//    	}, 500);
//	}
	else {
		console.log("DEBUG: goRight() same line, gFirstImgInViewPortIdx is " + gFirstImgInViewPortIdx);
		var divLocation = $('#' + pos[gFirstImgInViewPortIdx].id).parent().offset();
		var marginLeft = $('#' + pos[gFirstImgInViewPortIdx].id).parent().parent().css('marginLeft').replace('px', '');
		var nextDivLocation = $('#' + pos[nextItemIdx].id).parent().offset();
		var outerWidth = pos[nextItemIdx].left - pos[gFirstImgInViewPortIdx].left;
		var scrollBack = $('#' + pos[nextItemIdx].id).parent().position();

		console.log("DEBUG: goRight() About to animate right movement, new marginLeft for " +
				pos[gFirstImgInViewPortIdx] + " : " + 
				" ; marginLeft is " + marginLeft +
				(marginLeft - nextDivLocation.left) + 
				" ; outerWidth is " + outerWidth +
				" ; divLocation.left is " + divLocation.left +
				" ; nextDivLocation.left is " + nextDivLocation.left +
				" ; scrollBack.left is " + scrollBack.left);
//        $('html, body').animate({
//            scrollLeft: newLeftPos - 30
//        }, 800);
        $('#' + pos[gFirstImgInViewPortIdx].id).parent().parent().animate({
        	'marginLeft': (marginLeft - nextDivLocation.left)
        }, 300);
//        $("#source").animate({left: (left + 10), top:(top + 10 + ((current)*60))}, 500, function()
//        		 { //comments });//        $('html, body').animate({
//            left: newLeftPos - 30
//        }, 500);
	}
	// AE TODO: disabled doResizeWidth() and incrementing gFirstImgInViewPortIdx manually.  Something about offsetting the left
	// margin makes the elementInViewport() method fail to retrieve the correct index.
	gFirstImgInViewPortIdx = nextItemIdx;
	//doResizeWidth();
}

function firstImageInViewport() {
    return function () {
    	console.log('DEBUG: idFirstElementInViewport() -> IN');

    	var firstImgInViewPort = null;
    	for (var i = 0; i < pos.length; ++i) {
        	console.log('DEBUG: idFirstElementInViewport() -> calling elementInViewport() for ' + 
        			pos[i].id);
    		if ( elementInViewport(pos[i].el[0]) ) {
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
	            console.log('DEBUG: firstImageInViewport() -> loop element is ' + i + 
	            		" ; pos[i].el is " + pos[i].el[0] + 
	            		" ; firstImgInViewPortIdx is " + firstImgInViewPortIdx);
        	}
    	}
//		if ( elementInViewport(el) ) {
//            //your code here, e.g. console.log('DEBUG: is ' + el);
//            console.log('DEBUG: is ' + el);
//        }

        if (firstImgInViewPort == null) {
            console.log("DEBUG: firstImageInViewport() -> no first image in viewport");
            gFirstImgInViewPort = null;
            gFirstImgInViewPortIdx = -1;
        } 
        else {
//            console.log("DEBUG: firstImageInViewport() -> first image in viewport: " + firstImgInViewPort);
//            console.log("DEBUG: firstImageInViewport() -> first image in viewport element: " + firstImgInViewPort.el);
//            console.log("DEBUG: firstImageInViewport() -> first image in viewport element id: " + firstImgInViewPort.id);
//            console.log("DEBUG: firstImageInViewport() -> first image in viewport pos... left: " + firstImgInViewPort.left + 
//                    " ; top: " + firstImgInViewPort.top);
            //gFirstImgInViewPort = firstImgInViewPort;
            gFirstImgInViewPortIdx = firstImgInViewPortIdx;
        }
        
    }
//    contructPosMap();
}

function elementInViewport(el) {
	  var top = el.offsetTop;
	  var left = el.offsetLeft;
	  var width = el.offsetWidth;
	  var height = el.offsetHeight;

	  while(el.offsetParent) {
	    el = el.offsetParent;
	    top += el.offsetTop;
	    left += el.offsetLeft;
	  }
	  
	  var returnVal = (
			    top >= window.pageYOffset &&
			    left >= window.pageXOffset &&
			    (top) <= (window.pageYOffset + window.innerHeight) &&
			    (left) <= (window.pageXOffset + window.innerWidth)
			  );
	  
	  {
//			console.log(
//					"DEBUG: elementInViewport() -> element is in viewport: " + returnVal + " *** ");
//
//			console.log(
//					"DEBUG: elementInViewport() -> " + 
//					"       top: " + top + " window.pageYOffset: " + window.pageYOffset + " *** ");
//			console.log(
//					"DEBUG: elementInViewport() -> " + 
//					"       left: " + left + " window.pageXOffset: " + window.pageXOffset + " *** ");
//			console.log(
//					"DEBUG: elementInViewport() -> " + 
//					"       (top + height): " + (top + height) + 
//					" (window.pageYOffset + window.innerHeight): " + (window.pageYOffset + window.innerHeight) + ";  *** ");
//			console.log(
//					"DEBUG: elementInViewport() -> " + 
//					"       (left + width): " + (left + width) + 
//					" (window.pageYOffset + window.innerHeight): " + (window.pageYOffset + window.innerHeight) + ";  *** "
//					);  
	  }

	  return (returnVal);
	}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    var returnVal = (rect.top >= 0 && rect.left >= 0);
    
    if (returnVal) {
    	console.log("DEBUG: isElementInViewport(el) -> element is in viewport " + el.id);
    }
    
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
	//$(window).on('load resize scroll', firstImageInViewport()); 
	/* TODO: this looks like very bad code */
	//setTimeout(firstImageInViewport(), 60); 
	//setTimeout(firstImageInViewport(), 6000);
	
	setTimeout(contructPosMap(), 60); 
	
	// TODO: This is a bit of a hack copied from the internet for some (IE?) browsers
	//       that have issues determining correct position right after loading.
	//       When this would fire after six seconds of waiting, it would interfere with
	//       the left navigation in the portfolio.  I assume it's because the coordinates 
	//       would be stored in mid-transition, and were therefore corrupted somehow.
//	setTimeout(contructPosMap(), 6000);
	
	gFirstImgInViewPortIdx = 0;
	
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

