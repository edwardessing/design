    $(document).ready(function() {

    /*--SLIDER--*/ 
        
        $(function() {
            $('.banner').unslider();
        });
    
    /*-- NXT/PRV --*/
    
    $(document).ready(function() {    
        var unslider = $('.banner').unslider();

        $('.unslider-arrow').click(function () {
            var fn = this.className.split(' ')[1];

        //  Either do unslider.data('unslider').next() or .prev() depending on the className
            unslider.data('unslider')[fn]();
        });
    });
    
    $(document).ready(function() { 
        $('html').hover(
       function(){ $(this).addClass('::selection') },
       function(){ $(this).removeClass('::selection') }
        )
    });
    
    /*--BG-COL--*/ 
        
//        var $win = $(window),
//            w = 0,h = 0,
//            rgb = [],
//            getWidth = function() {
//                w = $win.width();
//                h = $win.height();
//            };
//
//        $win.resize(getWidth).mousemove(function(e) {
//
//            rgb = [
//                Math.round(e.pageX/w * 100),
//                Math.round(e.pageY/h * 100),
//                100
//            ];
//            
//        $(document.body).css('background','rgb('+rgb.join(',')+')');
//
//        }).resize();
        
    /*--MENU--*/     
        
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
        
        //        $(window).scroll(function(e) {
//            var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
//            var numberOfStars = scrollPercent * 500; 
//
//            if ((scrollPercent > 10 && scrollPercent < 30) || (scrollPercent > 70 && scrollPercent < 90)) {
//                console.log('executed with scroll percent', scrollPercent, 'generating', numberOfStars, 'stars');
//             
//                for (i = 0; i < numberOfStars; i++) {
//                    var vertex = new THREE.Vector3();
//                    vertex.x = Math.random() * 2000 - 1500;
//                    vertex.y = Math.random() * 2000 - 1500;
//                    vertex.z = Math.random() * 2000 - 1500;
//
//                    geometry.vertices.push( vertex );
//                }   
//            }
//        });

    });