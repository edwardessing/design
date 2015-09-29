$(document).ready(function() {

/* signature */
	if (typeof console !== 'undefined') {
		console.log("%cEDES, 2015\nDesign & Development: Edward Essing (http://edwardessing.com)", "color: #FFA500; font-weight: bold; font-size: 12px;");
	}

/* menu */
	var link = $('.link');
	var list = $('.dropdown');

	link.click(function () {
		link.toggleClass('link-bg');
		list.toggleClass('active');
	});

	$(document).mouseup(function (e) {
		var box = $('.dropdown, .link');
		if (!box.is(e.target) // if the target of the click isn't the container...
			&& box.has(e.target).length === 0) // ... nor a descendant of the container
			{
				$('.link').removeClass('link-bg');
				box.removeClass('active');
			}
	});

	$('.gallery p').addClass('row');
	$('.gallery p img').wrap('<div class="col-xs-12 col-sm-6" />');
	$('.gallery p img').addClass('img-responsive');

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
	
});
