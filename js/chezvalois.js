var IMG_MAXHEIGHT = 768;
var IMG_MAXWIDTH = 900;

var gCurrentImageId = 'client01_image01';
var gFirstImgInViewPortIdx = 0;

//var gFirstImgInViewPort = null;

var pos = null;

function contructPosMap2() {
    localTrace("contructPosMap2()", "ENTER");
    pos = $(".img").map(function(){
	var $this = $(this);
	
	localTrace("contructPosMap2()", "this is " + $this + "this.offset().top is " + $this.offset().top);
	return {
	    el: $this,
	    id: $this.attr('id'),
	    portfolioId: $this.parent().parent().attr('id'),
	    top: $this.offset().top,
	    left: $this.offset().left
	};
    }).get();
}

function contructPosMap() {
    return function() {
	localTrace("contructPosMap()", "ENTER");
	pos = $(".img").map(function(){
	    var $this = $(this);
	    
	    localTrace("contructPosMap()", "this is " + $this + "this.offset().top is " + $this.offset().top);
	    return {
		el: $this,
		id: $this.attr('id'),
		portfolioId: $this.parent().parent().attr('id'),
		top: $this.offset().top,
		left: $this.offset().left
	    };
	}).get();
    };
}

function givenElementInViewport (el) {
    return function () {
	localTrace("givenElementInViewport()", "ENTER");
        if ( elementInViewport(el) ) {
            //your code here, e.g. console.log('DEBUG: is ' + el);
	    localTrace("givenElementInViewport()", 'is ' + el);
        }
    };
}

function goUp() {
    localTrace("goUp()", "ENTER");

    var firstImgIdx = gFirstImgInViewPortIdx;
    var curPortfolioItemId = portfolioItems[firstImgIdx].id;
    var isFirstPortfolio = (portfolioItems[firstImgIdx].portfolioId == 0);
    var curPFId = portfolioItems[firstImgIdx].portfolioId;
    var nextPFId = 
	( isFirstPortfolio ? portfolioItems.length-1 : portfolioItems[firstImgIdx].portfolioId - 1 );

    var curIdxInP = portfolios[curPFId].curItemIdx;
    var nextIdxInP = portfolios[nextPFId].curItemIdx;

    gFirstImgInViewPortIdx = 
	adjustPortfolioSelection(portfolios[curPFId].items[curIdxInP], 
				 portfolios[nextPFId].items[nextIdxInP]);
    
    localTrace("goUp()", 
	       "firstImgIdx is " + firstImgIdx +
	       " ; firstImgIdx is " + firstImgIdx +
	       " ; curPortfolioItemId is " + curPortfolioItemId +
	       " ; isFirstPortfolio is " + isFirstPortfolio +
	       " ; curPFId is " + curPFId +
	       " ; nextPFId is " + nextPFId +
	       " ; portfolios[curPFId].curItemIdx is " + portfolios[curPFId].curItemIdx +
	       " ; portfolios[nextPFId].curItemIdx is " + portfolios[nextPFId].curItemIdx +
	       " ; gFirstImgInViewPortIdx is " + gFirstImgInViewPortIdx); 
    
    if (isFirstPortfolio) {
	localTrace("goUp()", "It's the first portfolio, just return without taking action.");
	return; // first portfolio item, do nothing (just remain at same position and return).
    }
    else {
	// TODO: do we still need newLeftPos?
	var piIdx = portfolios[nextPFId].items[portfolios[nextPFId].curItemIdx];
	var piDomId = portfolioItems[piIdx].domId;
	newLeftPos = $('#' + piDomId).offset().left;
	newTopPos = $('#' + piDomId).offset().top;
    }
    setTimeout(function(e) {
	$('#' + portfolios[curPFId].domId).fadeTo("slowest", .3);
    }, 0);
    setTimeout(function(e) {
	$('html, body').animate({
	    scrollTop: newTopPos - 10
	}, 400);
	$('#' + portfolios[nextPFId].domId).fadeTo("slowest", 1);
    });
    
}

function goDown() {

    localTrace("goDown()", "ENTER");

    var firstImgIdx = gFirstImgInViewPortIdx;
    var curPortfolioItemId = portfolioItems[firstImgIdx].id;
    var isLastPortfolio = (portfolioItems[firstImgIdx].portfolioId >= portfolios.length - 1);
    var curPFId = portfolioItems[firstImgIdx].portfolioId;
    var nextPFId = 
	( isLastPortfolio ? 0 : portfolioItems[firstImgIdx].portfolioId + 1 );

    var curIdxInP = portfolios[curPFId].curItemIdx;
    var nextIdxInP = portfolios[nextPFId].curItemIdx;

    gFirstImgInViewPortIdx = 
	adjustPortfolioSelection(portfolios[curPFId].items[curIdxInP], 
				 portfolios[nextPFId].items[nextIdxInP]);
    
    localTrace("goDown()", 
	       "firstImgIdx is " + firstImgIdx +
	       " ; firstImgIdx is " + firstImgIdx +
	       " ; curPortfolioItemId is " + curPortfolioItemId +
	       " ; isLastPortfolio is " + isLastPortfolio +
	       " ; curPFId is " + curPFId +
	       " ; nextPFId is " + nextPFId +
	       " ; portfolios[curPFId].curItemIdx is " + portfolios[curPFId].curItemIdx +
	       " ; portfolios[nextPFId].curItemIdx is " + portfolios[nextPFId].curItemIdx +
	       " ; gFirstImgInViewPortIdx is " + gFirstImgInViewPortIdx); 
    
    if (isLastPortfolio) {
    	newLeftPos = 0; // TODO: Check for assigning margin constants.
    	newTopPos = 0; // TODO: Check for assigning margin constants.
    }
    else {
	// TODO: do we still need newLeftPos?
	var piIdx = portfolios[nextPFId].items[portfolios[nextPFId].curItemIdx];
	var piDomId = portfolioItems[piIdx].domId;
	newLeftPos = $('#' + piDomId).offset().left;
	newTopPos = $('#' + piDomId).offset().top;
    }
    setTimeout(function(e) {
	$('#' + portfolios[curPFId].domId).fadeTo("slowest", .3);
    }, 0);
    setTimeout(function(e) {
	$('html, body').animate({
	    scrollTop: newTopPos - 10
	}, 400);
	$('#' + portfolios[nextPFId].domId).fadeTo("slowest", 1);
    });
    
}
	      
	       
function doResizeWidth() {
    localTrace("doResizeWidth()", 'ENTER');
    var newImageWidth = $( window ).width() - 180;
    localTrace("doResizeWidth()", "newImageWidth set to " + newImageWidth);
    
    if (newImageWidth > IMG_MAXWIDTH) {
	//$( "body" ).prepend( "<div>" + newImageWidth + "</div>" );
	newImageWidth = IMG_MAXWIDTH;
    }
    
    localTrace("doResizeWidth()", "resizing width for .img to " + newImageWidth);
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
    localTrace("doResize()", "ENTER");
    var newImageHeight = $( window ).height() - 60;
    var newImageWidth = $( window ).width() - ($( window ).width() / 5);
    
    localTrace("doResize()", "newImageHeight set to " + newImageHeight);
    if (newImageHeight > IMG_MAXHEIGHT) {
	//$( "body" ).prepend( "<div>" + newImageWidth + "</div>" );
	newImageWidth = IMG_MAXWIDTH;
    }
    
    localTrace("doResize()", "resizing height for .img to " + newImageHeight);
    $( ".img" ).width(newImageWidth);
    contructPosMap2();
    //$( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );
}

var adjustAfterResize = function() {
	contructPosMap();

	gResizing = false;
	var divImg1 = $('#' + pos[0].id).parent();
	var divImg1Location = divImg1.offset();
	var divImg2 = $('#' + pos[1].id).parent();
	var divImg2Location = divImg2.offset();
	var divImg3 = $('#' + pos[2].id).parent();
	var divImg3Location = divImg3.offset();

	var currentImgDiv = $('#' + pos[gFirstImgInViewPortIdx].id).parent();
	var divLocation = currentImgDiv.offset();
	var portfolioSlider = $('#' + pos[gFirstImgInViewPortIdx].id).parent().parent();
	var marginLeft = portfolioSlider.css('margin-left').replace('px', '');

	var marginLeftNewVal = (0 - divLocation.left) + 'px';

	console.log("DEBUG: $( window ).resize() -> currentImgDiv.attr('id'): " + currentImgDiv.attr('id') +
			" ; gFirstImgInViewPortIdx: " + gFirstImgInViewPortIdx +
			" ; marginLeftNewVal: " + marginLeftNewVal +
			" ; port1div1.left: " + divImg1Location.left +
			" ; port1div2.left: " + divImg2Location.left +
			" ; port1div3.left: " + divImg3Location.left +
			" ; divLocation.left: " + divLocation.left
			);

	$('#' + pos[gFirstImgInViewPortIdx].id).parent().parent().css('margin-left', marginLeftNewVal);
    $('#' + pos[gFirstImgInViewPortIdx].id).parent().parent().animate({
    	'marginLeft': 0 - divLocation.left
    }, 0);

};

var gResizing = false;
var gAdjustResizeTOFunc = null;

$( window ).resize(function() {
	gResizing = true;
	doResize();

	if (gAdjustResizeTOFunc != null) {
		clearTimeout(gAdjustResizeTOFunc);
	}

	gAdjustResizeTOFunc = setTimeout(adjustAfterResize,700);

});

function adjustPortfolioSelection(fromItemIdx, toItemIdx, resetCurItem) {
    var portfolioFromIdx = portfolioItems[fromItemIdx].portfolioId;
    var portfolioToIdx = portfolioItems[toItemIdx].portfolioId;
    var retVal = 0;

    // We have changed portfolios, preserve
    if (portfolioItems[portfolioToIdx].id == portfolioItems[portfolioFromIdx].id) {
	// Increment by the difference, because if we go backwards, we increment by -1 (decrement)
	portfolios[portfolioToIdx].curItemIdx += (toItemIdx - fromItemIdx);
	retVal = toItemIdx;
    }
    else {
	if (resetCurItem) {
	    portfolios[portfolioFromIdx].curItemIdx = 0;
	}
	var nextPortfolioItemIdIdx = portfolios[portfolioToIdx].curItemIdx;
	retVal = portfolios[portfolioToIdx].items[nextPortfolioItemIdIdx];
    }

    console.log("DEBUG: adjustPortfolioSelection() -> current Item is: " +
		portfolioItems[toItemIdx].domId +
		" ; portfolio name is " + portfolios[portfolioToIdx].name +
		" ; portfolio description is " + portfolios[portfolioToIdx].description +
		" ; portfolioItems[portfolioToIdx].curItemIdx is " + portfolios[portfolioToIdx].curItemIdx
	       );
    
    // TODO: put the following view update code in a view-related callback.
    $('#portfolioInfoAreaIdx').text(portfolios[portfolioToIdx].curItemIdx + 1 + "/" + 
				     portfolios[portfolioToIdx].items.length)
    $('#portfolioShortDesc').text(portfolios[portfolioToIdx].name + " : " + portfolios[portfolioToIdx].description)
    
return retVal;
}

function nextPortfolioItemHandler(e) {
    if (!e)
        e = window.event;

      //IE9 & Other Browsers
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      //IE8 and Lower
      else {
        e.cancelBubble = true;
      }
      goRight();
      return false;
}

function prevPortfolioItemHandler(e) {
    if (!e)
        e = window.event;

      //IE9 & Other Browsers
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      //IE8 and Lower
      else {
        e.cancelBubble = true;
      }
      goLeft();
      return false;
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
		//alert("DEBUG: goLeft() -> (nextItemIdx == 0), Intentionally doing nothing for the end of left nav.");
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
		//alert("DEBUG: goLeft() -> prevLine, Intentionally doing nothing for the end of left nav.");
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
		var outerWidth = $('#' + pos[gFirstImgInViewPortIdx].id).offset().left + 
		$('#' + pos[gFirstImgInViewPortIdx].id).offset().left;
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
    gFirstImgInViewPortIdx = adjustPortfolioSelection(gFirstImgInViewPortIdx, nextItemIdx, true);

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

	setTimeout(function(e) {
	    curItemPortfolioContainer.fadeTo("slowest", .3);
	}, 0);
	$('#' + pos[gFirstImgInViewPortIdx].id).parent().parent().animate({
	    'marginLeft': 0 // TODO: replace this with a constant if we want a baseline left margin, same for goRight.
	}, 800); // TODO: Change this value to a ratio based on the width of the entire portfolio.
	setTimeout(function(e) {
	    $('html, body').animate({
	        scrollTop: newTopPos - 10
	    }, 1100);
	    nextItemPortfolioContainer.fadeTo("slowest", 1);
	    //curItemPortfolioContainer.addClass('portfolioDisabled');
	    //nextItemPortfolioContainer.removeClass('portfolioDisabled');
	}, 650);
	// TODO: improve this, experimental.
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
    
    gFirstImgInViewPortIdx = adjustPortfolioSelection(gFirstImgInViewPortIdx, nextItemIdx, true);
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

	$('#pnPrevItem').on('click', prevPortfolioItemHandler);
	$('#pnNextItem').on('click', nextPortfolioItemHandler);
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


//	// provide document scrolling
	$(document).on("scroll", function() {
	    
//		doResize();

	}).scroll();

	$('#portfolioContainer').on( "click", globalOnClick() );

    adjustPortfolioSelection(0, 0);

}

function localTrace(functionName, msg) {
    console.log("TRACE: " + functionName + " -> " + msg);
}