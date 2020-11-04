$(function (){
    $('.carousel-left').on('click',function(e){
        let car = $(this).closest('.carousel');
        car.carousel('prev');
    })
    $('.carousel-right').on('click',function(e){
        let car = $(this).closest('.carousel');
        car.carousel('next');
    })
    $('.carousel').on('slide.bs.carousel', function (e) {
        let car = $(this);
        let idx = e.to + 1
        car.find('.carousel-pagination-num-cur').html(`0${idx}`)
    })
    $('.carousel').each(function(i,car){
        let totalItems = $(this).find('.carousel-item').length
        $(this).find('.carousel-pagination-num-total').html(`0${totalItems}`)
    })
})


document.addEventListener("deviceready", init, false);

function init() {
    document.querySelector("#yourbuttonId").addEventListener("touchstart", onDocumentMouseDown, false)
}
$(document).ready(function () {
    $('.plancontent__svg').on('touchstart',function(event) {
        $('.plancontent__tooltip').removeClass('active');
    });
    $('.part__svg').on('touchstart',function(event) {
        corX = event.touches[0].clientX;
        corY = event.touches[0].clientY;
        console.log(corX);
        console.log(corY);
        hoverelem = $(this);
        tipelem = $('#'+hoverelem.find('.part__svg__number').data('tip'));
        $('.plancontent__tooltip').removeClass('active');
        tipelem.addClass('active');
        tipelem.css({
            left:corX - 172,
            top:corY
        });
        event.preventDefault();
        return false;
    });


    $('.part__svg_more').on('touchstart',function(event) {
        corX = event.touches[0].clientX;
        corY = event.touches[0].clientY;
        console.log(corX);
        console.log(corY);
        hoverelem = $(this);
        tipelem = $('#'+hoverelem.find('.part__svg__number').data('tip'));
        $('.plancontent__tooltip').removeClass('active');
        tipelem.addClass('active');
        tipelem.css({
            left:corX ,
            top:corY
        });
        event.preventDefault();
        return false;
    });


    $('.part__svg').hover(function(){
        hoverelem = $(this);
        tipelem = $('#'+hoverelem.find('.part__svg__number').data('tip'));
        tipelem.addClass('active');
        $("body").mousemove(function(e){
            var pos = $('body').offset();
            var elem_left = pos.left;
            var elem_top = pos.top;
            var X = e.pageX-170;
            var Y = e.pageY+20;
            var X2 = e.pageX;
            var Y2 = e.pageY;

            let mapOffset = $('#inverted-contain').offset();

            tipelem.css({
                left:e.pageX - mapOffset.left - 170,
                top:e.pageY - mapOffset.top + 20
            });
        })
    },function(){
        tipelem.removeClass('active');
    });
    $('.part__svg_more').hover(function(){
        hoverelem = $(this);
        smalltipelem = $('#'+hoverelem.find('.part__svg__number').data('tip'));
        smalltipelem.addClass('active');
        $("body").mousemove(function(e){
            var pos = $('body').offset();
            var elem_left = pos.left;
            var elem_top = pos.top;
            var X2 = e.pageX+10;
            var Y2 = e.pageY+10;
            smalltipelem.css({
                left:X2,
                top:Y2
            });
        })
    },function(){
        smalltipelem.removeClass('active');
    })
});

(function() {
    var $body = $('body');
    var $section = $('#inverted-contain');
    $section.find('.panzoom').panzoom({
        $zoomIn: $body.find(".zoom-in"),
        $zoomOut: $body.find(".zoom-out"),
        startTransform: 'scale(1)',
        increment: 0.1,
        minScale: 1,
        maxScale: 3,
        duration: 1,
        easing: "ease-in-out",
        contain: 'automatic',
        onPan: function(e){$('a').addClass('disabled');},
        onEnd: function(e){setTimeout(enableLinks, 300);},
        onZoom: function(e){setTimeout(checkCords, 10);},
    }).panzoom('zoom');

    var enableLinks = function(){
        $('a').removeClass('disabled');
    }
    var checkCords = function(){
        $('.panzoom').panzoom("pan", 0, 0, { relative: true, duration: 10,  easing: "ease-in-out" });
        $('.panzoom').panzoom("pan", 0, 0, { relative: true, duration: 100,  easing: "ease-in-out" });
    }
})();
