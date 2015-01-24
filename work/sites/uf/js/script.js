/* menu */     

$(document).ready(function() {   
    $(".link").click(function () {
        $(".dropdown").toggleClass( "active" );
        $(".link").toggleClass( "active" );
    });
    
    $(document).mouseup(function (e) {
        var container = $(".dropdown, .link");
        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                container.removeClass("active");
            }
    });
});

/* toggle about */ 

$(document).ready(function(){
	$('#btn-about').click(function () {
		$('#stats').toggle();
	    $('#stats').toggleClass('active');
	    return false;
	});
	$('#btn-data').click(function () {
		$('.tg').toggle();
	    $('.tg').toggleClass('active');
	    return false;
	});
});

/* order */

$(window).load(function() {

	speed =  5000;
	
	$('.marquee').marquee({
		duration: speed,
		gap: 50,
		delayBeforeStart: 0,
		direction: 'up',
		duplicated: false
	});
	
	//pause
	$('#btn-start').click(function(){
	  $('.marquee').marquee('toggle');
	});
	
	//increase
/*
	$('#btn-incr').click(function() {
		speed *= 0.5;
		$('.marquee').marquee({
			duration: speed,
			gap: 50,
			delayBeforeStart: 0,
			direction: 'up',
			duplicated: false
		});			
	});
*/
	
	//decrease
	$('#btn-decr').click(function() {
		speed *= 1.5;
		$('.marquee').marquee({
			duration: speed,
			gap: 50,
			delayBeforeStart: 0,
			direction: 'up',
			duplicated: false
		});	
	});
});

/* zoom */

$(document).ready(function() {

	$('#btn-incr').click(function() {
	
	
		$('.marquee').marquee('increase');
		
		/* $('.marquee').each(function(index) {
			var previous = $(this).data('duration');
			$(this).data('duration', previous + 100000);
			console.log(index, $(this), previous, $(this).data('duration'));
		});
		*/
	});

/*
	$('#btn-incr').click(function(){
		$('.row-1 > div').data('duration', i + 1000);
	});
*/
	
	//zoom-fix
	$('#btn-zoom-fix').click(function(){
		$('.row-1 > div').css('zoom', '100%');
	});

	//zoom-in
	$('#btn-zoom-in').click(function() {
		updateZoom(0.1);
	});
	
	//zoom-out
	$('#btn-zoom-out').click(function() {
	   	updateZoom(-0.1);
	});
		
	zoomLevel = 1;
	
	var updateZoom = function(zoom) {
	   zoomLevel += zoom;
	   $('.row-1 > div').css({ zoom: zoomLevel, '-moz-transform': 'scale(' + zoomLevel + ')' });
	}
});

/*

    function speedOne() { 
    $('marquee').data('pointer', 10);
    }
    function speedTwo() { 
    $('marquee').data('pointer', 100);
    }
    function speedThree() { 
    $('marquee').data('pointer', 1000);
    }
*/

/*

function randomPosition() {    
    var docHeight = $(document).height(),
        docWidth = $(document).width();

    $(".row-1 > div ").each(function() {
        var $div = $(this),
            divWidth = $div.width(),
            divHeight = $div.height(),
            heightMax = docHeight - divHeight,
            widthMax = docWidth - divWidth;

        $div.css({
            left: Math.random() * 60 + 1 + '%',
        });
    });
}
*/

/*
function randomPosition() {  
    var docHeight = $(document).height(),
        docWidth = $(document).width(); 
         
    $(".row-1 > div").each(function() {
        var $div = $(this);

        $div.css({
            left: Math.random() * 60 + 1 + '%',
        });
    });
}
*/


/* positioning toggle */

var Enabled=true;
	function RunMyFunction()
	{
	if(Enabled == true)
	{
	$(".row-1 > div").each(function() {
        var $div = $(this);

        $div.css({
            left: Math.random() * 60 + 1 + '%',
        });
    });
	}else
	{
	$(".row-1 > div").each(function() {
        var $div = $(this);

        $div.css({
            left: false,
        });
    });
	}
}

/* drop toggle */

$(document).ready(function(){
	$(".row-1 > div").addClass("drop");
	  $(".but-drop").click(function(){
	    $(".row-1 > div").toggleClass("drop");
	  });
});

/* misc */

/*
var rBulSpeed = Math.ceil(Math.random() * 100);
$(document).ready(function() {
	$(".row-1 > div").attr('scrollamount', rBulSpeed.toString());
});


$(document).ready(function() {
	$(".row-1 > div").scrollDelay = Math.random() * 1000;
	$(".row-1 > div").scrollAmount = Math.random() * 1000;
});
*/
