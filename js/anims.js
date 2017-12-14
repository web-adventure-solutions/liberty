$(document).ready(function () {
    // $("#stripe").removeClass('stripe-anim-start');
    // $("#stripe").addClass('stripe-anim-end', 3000);

    // $('header .jumbotron h2').css({'left' : '-60px'});


    $('#btn-anim-start').click(function () {
        $('header .jumbotron h2').css({'opacity' : '0'}, 1);
        $('header .jumbotron h2')
            .animate({'left' : '0'}, {duration: 1000, queue: false})
            .animate({'opacity': '1'}, {duration: 1000, queue: false});
        $("#stripe").removeClass('stripe-anim-end', 1, function () {
            $(this).addClass('stripe-anim-start', 1, function () {
                $(this).addClass('stripe-anim-end', 3000, 'easeOutQuint');
            });
        });

    });
    $('#btn-anim-reset').click(function () {
        $('header .jumbotron h2').css({'left' : '-62px'});
        $('header .jumbotron h2').css({'opacity' : '0'}, 1);
        $("#stripe").removeClass('stripe-anim-end', 1, function () {
            $(this).addClass('stripe-anim-start', 1);
        });

    });
});
