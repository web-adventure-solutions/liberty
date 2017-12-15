$(document).ready(function () {
    // $("#stripe").removeClass('stripe-anim-start');
    // $("#stripe").addClass('stripe-anim-end', 3000);

    $('header .jumbotron h2').css({'left': '-60px'});
    // $('header .jumbotron .jumbotron-footer').css({'right' : '-60px'});
    $('header .jumbotron-footer-list-item').css({'right': '-60px'});

    $('#btn-anim-start').click(function () {
        $('header .jumbotron h2, .jumbotron .parallelogram')
            .animate({'left': '0', 'opacity': '1'}, {
                duration: 1000,
                complete: function () {
                    animateJumbotronFooter(800)
                }
            });

        $('header .jumbotron .jumbotron-footer').animate({'right': 0}, 1000);
        $("#stripe").removeClass('stripe-anim-end', 1, function () {
            $(this).addClass('stripe-anim-start', 1, function () {
                $(this).addClass('stripe-anim-end', 3000, 'easeOutQuint');
            });
        });
        $('header p.opacity-0').animate({'opacity': 1}, 1000);

        // for (i=1; i <= 3; i++) {
        //     $('header .jumbotron-footer-list-item:nth-child(' + i + ')')
        //         .animate({'right' : 0}, {duration: 1000, queue: false})
        //         .animate({'opacity': 1}, {duration: 1000, queue: false});
        // }



        function animateJumbotronFooter(duration) {
            var jumbotronFooterListItem = 'header .jumbotron-footer-list-item';
            $(jumbotronFooterListItem + ':nth-child(1)')
                .animate({'right': 0, 'opacity': 1 }, {
                    duration: duration,
                    complete: function () {
                        $(jumbotronFooterListItem + ':nth-child(2)')
                            .animate({'right': 0, 'opacity': 1}, {
                                duration: duration,
                                complete: function () {
                                    $(jumbotronFooterListItem + ':nth-child(3)')
                                        .animate({'right': 0, 'opacity': 1}, {duration: duration})
                                }
                            })
                    }
                })

        }



    });

    $('#btn-anim-reset').click(function () {
        $('header .jumbotron h2').css({'left' : '-60px'});
        $('header .jumbotron h2').css({'opacity' : '0'}, 1);
        $("#stripe").removeClass('stripe-anim-end', 1, function () {
            $(this).addClass('stripe-anim-start', 1);
        });
        $('header .jumbotron-footer-list-item').css({'right' : '-60px'});
        // $('header .jumbotron .jumbotron-footer').css({'right' : '-60px'});
        $('header p.opacity-0').css({'opacity': 0});
        $('header .jumbotron .jumbotron-footer-list-item').css({'opacity' : 0})


    });
});
