"use strict";

$(document).ready(init);

function init(){
	//pull elements classed as .pulldown to the bottom of the page
	$('.pull-down').each(function() {
	    $(this).css('margin-top', $(this).parent().height()-$(this).height())
	});
}

