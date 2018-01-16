$(document).ready(function () {
    var duration = 800;
    var jumbotronFooterListItem = 'header .jumbotron-footer-list-item';
    var stripe = $("#stripe");
// uncomment to enable on reload

    // see if mobile device is in horizontal position
    mobView = (winW < 768 && winH < 1024);
    posVertical = (winW < winH);

    console.log('mobile : ' + mobView);
    console.log('vertical : ' + posVertical);


    if (mobView && posVertical) {
        stripe
            .animate({'right' : '61vh'}, { duration : 3000, queue : false})
            .animate({'-webkit-mask-position-x' : '20px'}, { duration : 3000, queue : false});
    } else if (!mobView) {
        stripe.addClass('stripe-anim-end', 3000)
    }




    $('header .jumbotron-content').animate({'opacity': 1}, 1000);
    $('header .jumbotron h2, .jumbotron .parallelogram')
        .animate({'left': '0', 'opacity': '1'}, {
            duration: 1000,
            complete: function () {
                func(1, duration)
            }
        });
    function func(i, duration) {
        $(jumbotronFooterListItem + ':nth-child('+ i +')')
            .animate({'right': 0, 'opacity': 1 }, {
                duration: duration,
                complete: function () {
                    if (i<=3) {
                        i++;
                        func(i, duration);
                    }
                }
            })
    }
    $(document).keyup(function (e) {
        if (e.keyCode === 65) {
            triggerAnim();
        } else if (e.keyCode === 82) {
            resetAnim();
        }
    });
    $('#btn-anim-start').click(function () {
        triggerAnim();
    });

    $('#btn-anim-reset').click(function () {
        resetAnim();
    });
    function triggerAnim() {
        $('header .jumbotron h2, .jumbotron .parallelogram')
            .animate({'left': '0', 'opacity': '1'}, {
                duration: 1000,
                complete: function () {
                    func(1, duration)
                }
            });

        function func(i, duration) {
            $(jumbotronFooterListItem + ':nth-child('+ i +')')
                .animate({'right': 0, 'opacity': 1 }, {
                    duration: duration,
                    complete: function () {
                        if (i<=3) {
                            i++;
                            func(i, duration);
                        }
                    }
                })
        }

        $("#stripe").removeClass('stripe-anim-end', 1, function () {
            $(this).addClass('stripe-anim-start', 1, function () {
                $(this).addClass('stripe-anim-end', 3000, 'easeOutQuint');
            });
        });
        $('header .jumbotron-content').animate({'opacity': 1}, 1000);


    }

    function resetAnim() {
        $('header .jumbotron-footer-list-item:nth-child(1)').css({'right' : '-60px', 'opacity' : 0});
        $('header .jumbotron-footer-list-item:nth-child(2)').css({'right' : '-60px', 'opacity' : 0});
        $('header .jumbotron-footer-list-item:nth-child(3)').css({'right' : '-60px', 'opacity' : 0});
        $('header .jumbotron h2').css({'left' : '-60px'});
        $('header .jumbotron h2').css({'opacity' : '0'}, 1);
        $("#stripe").removeClass('stripe-anim-end', 1, function () {
            $(this).addClass('stripe-anim-start', 1);
        });

        // $('header .jumbotron .jumbotron-footer').css({'right' : '-60px'});
        $('header p.opacity-0').css({'opacity': 0});
    }


});
