function killScroll() {
    document.addEventListener('touchstart', function(e) {
        startX = e.changedTouches[0].pageX;
        startY = e.changedTouches[0].pageY;
    }, { passive: false });
    document.addEventListener('touchmove', function(e) {
        if ( event.touches.length == 1 ) {
            curX = event.touches[0].pageX;
            curY = event.touches[0].pageY;
            if(Math.abs((curX-startX))>10 || Math.abs((curY-startY))>10){
                event.preventDefault();
            }
        }
    }, { passive: false });
}
$(document).ready(function () {
    $('img[usemap]').rwdImageMaps();
    container = $(window);
    container_w = container.width();
    container_h = container.height();
    featherTop = $('.feather-img-bg-top');
    featherBottom = $('.feather-img-bg-bottom');
    topFeatherArea = $('#top-feather-area');
    bottomFeatherArea = $('#bottom-feather-area');
    productionTitle = $('.production-title');
    weddingTitle = $('.wedding-title');
    stroke = $('.stroke');
    strokeImg = $('#stroke-img');
    // todo change to "index" on production
    isIntroPage = window.location.href.indexOf("intro") !== -1;
    isIntroPage ? killScroll() : null;
    effects_elem_arr = [
        [productionTitle, topFeatherArea, featherTop],
        [weddingTitle, bottomFeatherArea, featherBottom]
    ];

    function featherAnim() {
        stroke.animate({'height': isIntroPage ? '100vh' : '50%'}, 1500, 'swing', function () {
            if (container_w <= 1024) {
                stroke.animate({'height': '50%'}, 1500);
                strokeImg.css({'height': '50%'});
            } else {
                // stroke.animate({'height': strokeImg.height() + 'px'}, 1500);
                stroke.animate({'height': 70 + 'vh'}, 1500);
            }
        });
        featherTop.add(featherBottom).animate({
            '-webkit-mask-position-x': '50%',
            '-webkit-mask-position-y': '50%',
            'mask-position-x': '50%',
            'mask-position-y': '50%',
            'opacity': '1'
        }, 2000);
    }

    effects_elem_arr.forEach(function (val) {
        if (isIntroPage) {
            val[0].delay(2000).queue(function () {
                anim_effect = effects_elem_arr.indexOf(val) === 0 ? 'bounceInLeft' : 'bounceInRight';
                $(this).addClass('opacity-1 animated ' + anim_effect + '').dequeue();
            });
        }
        val[0].add(val[1])
            .mouseenter(function () {
                $(val[0]).toggleClass('hover')
            })
            .mouseleave(function () {
                $(val[0]).toggleClass('hover')
            });
        // if (isIntroPage) {
        //     val[1].mousemove(function (e) {
        //         pos_x = e.pageX;
        //         pos_y = e.pageY;
        //         left_pos = container_w / 2 - pos_x;
        //         top_pos = container_h / 2 - pos_y;
        //         val[2].animate({
        //             translateX: -left_pos / 100 - 50 + '%',
        //             translateY: -top_pos / 100 - 50 + '%',
        //             '-webkit-mask-position-x': left_pos / 50 + 50 + '%',
        //             '-webkit-mask-position-y': top_pos / 10 + 50 + '%',
        //             'mask-position-x': left_pos / 50 + 50 + '%',
        //             'mask-position-y': top_pos / 10 + 50 + '%'
        //         }, {duration: 0})
        //     });
        // }
    });
    isIntroPage ? featherAnim() : null;


    var makeAnim = 0;


    // todo: optimize event handler to unbind after first iteration
    $(function() {
        $(window).scroll(function(){
            if (makeAnim === 0) {
                var oTop = $('section.portfolio').offset().top - window.innerHeight;
                var pTop = $(window).scrollTop();
                if( pTop-container_h > oTop ){
                    featherAnim();
                    productionTitle.add(weddingTitle).removeClass('opacity-0');
                    productionTitle.addClass('animated bounceInLeft');
                    weddingTitle.addClass('animated bounceInRight');
                    makeAnim++
                }
            }
        });
    });
});
