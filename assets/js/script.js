$(document).ready(function() {

/* signature */
	if (typeof console !== 'undefined') {
		console.log("%cEDES, 2015\nDesign & Development: Edward Essing (http://edwardessing.com)", "color: #FFA500; font-weight: bold; font-size: 12px;");
	}

/* menu */
	$('.link').click(function () {
		$('.dropdown').toggleClass( 'active' );
		if ($('.dropdown').hasClass('active') === true) {
			$('.link').toggleClass('link-bg');
		} else {
			// $('.link').css('color','black');
		}
	});

	$(document).mouseup(function (e) {
		var box = $('.dropdown, .link');
		if (!box.is(e.target) // if the target of the click isn't the container...
			&& box.has(e.target).length === 0) // ... nor a descendant of the container
			{
				$('.link').removeClass('rotate');
				box.removeClass('active');
			}
	});

	$('.gallery p').addClass('pure-g');
	$('.gallery p img').wrap('<div class="pure-u-1 pure-u-md-1-2" />');
	// $('.gallery p img').addClass('pure-u-1');


/* svg */
	$('img.svg').each(function(){
			var $img = jQuery(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');

			$.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var $svg = jQuery(data).find('svg');

				// Add replaced image's ID to the new SVG
				if(typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}
				// Add replaced image's classes to the new SVG
				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');

				// Replace image with new SVG
				$img.replaceWith($svg);

			}, 'xml');

		});

/* lightbox */
	$('.hello').swipebox();

});
