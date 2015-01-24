/* reset */

function reset() {

  landing.velocity('stop');

}

/* hud */

function hud() {

  $('.hud').toggle('fast');

}

/* tilt */

function tilt() {

  var bg=$('.sky-container');
  var bgCenter=[bg.offset().left+bg.width()/2, bg.offset().top+bg.height()/2];

  $(document).bind('mousemove.tilt', function(e) {    
      var angle = Math.atan2(e.pageX- bgCenter[0],- (e.pageY- bgCenter[1]) )*(14/Math.PI);      
      bg.css({ "-webkit-transform": 'rotate(' + angle + 'deg)'});    
      bg.css({ '-moz-transform': 'rotate(' + angle + 'deg)'});
      bg.css({ 'transform': 'rotate(' + angle + 'deg)'});
  });

}

function tiltReset() {
  
  var bg=$('.sky-container');

  bg.css({
    '-webkit-transform': '',
    '-moz-transform': '',
    'transform': ''
  });

  $(document).unbind('mousemove.tilt');
    
}

function tiltToggle() {

  var button = $('a.swt.tilt');

  if (button.data('toggle') === 'on') {
    tiltReset();
  } else {
    tilt();
    button.data('toggle', 'off');
  }

}

$(document).ready(function() {
  
  /* elements */

  retical = $('.retical');
  landing = $('.landing');
  clouds = $('.clouds');

  /* menu */

  $('.link').click(function () {
    $('.link').toggleClass('active');
    $('.dropdown').toggleClass('active');
  });

  $(document).mouseup(function (e) {
    var container = $('.link, .dropdown');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.removeClass('active');
    }
  });

  /* scene */

  function animate(factor) {
  
    landing
      .velocity( { scale: 3, opacity: 0 }, factor * 9 )
      .velocity( { scale: 1, opacity: 0 }, 0 )
      .velocity( { opacity: 1 }, factor * 1 );
  
  }

  var factor = 10000;
  animate(factor);

  setInterval(function() {
    animate(factor);
  }, factor * 10);
  
  /* move */

  var mouse = { x: 0, y: 0 };
  $(document).mousemove(function(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
  });

  setInterval(function() {  
    retical.css({ left: mouse.x, top: mouse.y });
    $('.hori').css({ left: 0, top: mouse.y });
    $('.vert').css({ left: mouse.x, top: 0 });
    
    var amountMovedX = (mouse.x * - 1 / 2);
    var amountMovedY = (mouse.y * - 1 / 2);
    
    landing.css('background-position', amountMovedX + 'px ' + amountMovedY + 'px ');
  });

  /* lines */

  var timer;
    
  $(window).on('mousemove', function () {
    $('.line').css('opacity', '0.25');

    try {
      clearTimeout(timer);
    } catch (e) {}
    timer = setTimeout(function () {
      $('.line').css('opacity', '0.1');
    }, 500);

  });

  /* pit jaw */

  var jaw=$('.jaw');
  var jawCenter=[jaw.offset().left+jaw.width()/2, jaw.offset().top+jaw.height()/2];

  $(document).mousemove(function(e){
      var angle = Math.atan2(e.pageX- jawCenter[0],- (e.pageY- jawCenter[1]) )*(15/Math.PI);	    
      jaw.css({ "-webkit-transform": 'rotate(' + angle + 'deg)'});    
      jaw.css({ '-moz-transform': 'rotate(' + angle + 'deg)'});
      jaw.css({ 'transform': 'rotate(' + angle + 'deg)'});
  });

  /* stats */

  var xPrev = 0;
  var yPrev = 0;
  
  $(document).mousemove(function(e) {
       xPrev<e.pageX ? $('.lr').html("right") : $('.lr').html("left");
        xPrev=e.pageX;
       yPrev<e.pageY ? $('.ud').html("down") : $('.ud').html("up");
        yPrev=e.pageY;
    $('.status').html(e.pageX +', '+ e.pageY);  
  });

  /* buttons */

  $('.swt').click(function () {
    $(this).toggleClass('act-but');
  });
  
  /* change bg */
  
  function switchBg(newBg) {
    ['b1', 'b2', 'b3', 'b4', 'b5'].forEach(function (bg) {
        $('.landing').removeClass(bg);
    });

      $('.landing').addClass(newBg);
      localStorage.setItem('storedBg', newBg);  
    }

    $('#styleSwitch button.bg').click(function() {
        var value = $(this).val();
        switchBg(value);
    });

    var storedBg = localStorage.getItem('storedBg');
    if (storedBg) {
        switchBg(storedBg);
    } else {
        switchBg('b1');
    }
  
});

