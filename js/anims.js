$(document).ready(function () {

    var duration = 800;
    var jumbotronFooterListItem = 'header .jumbotron-footer-list-item';

// uncomment to enable on reload
//     $("#stripe").removeClass('stripe-anim-start');
//     $("#stripe").addClass('stripe-anim-end', 3000);
//     $('header p.opacity-0').animate({'opacity': 1}, 1000);
//     $('header .jumbotron h2, .jumbotron .parallelogram')
//         .animate({'left': '0', 'opacity': '1'}, {
//             duration: 1000,
//             complete: function () {
//                 func(1, duration)
//             }
//         });
//
//     function func(i, duration) {
//         $(jumbotronFooterListItem + ':nth-child('+ i +')')
//             .animate({'right': 0, 'opacity': 1 }, {
//                 duration: duration,
//                 complete: function () {
//                     if (i<=3) {
//                         i++;
//                         func(i, duration);
//                     }
//                 }
//             })
//     }

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
        $('header p.opacity-0').animate({'opacity': 1}, 1000);


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
