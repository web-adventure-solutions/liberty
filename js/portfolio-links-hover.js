    productionTitle = $('.portfolio .production-title');
    weddingTitle = $('.portfolio .wedding-title');
    hoverLinks = [ productionTitle, weddingTitle ];
    hoverLinks.forEach(function (val) {
        val
            .mouseenter(function () {
                val.toggleClass('hover');
                console.log('ffdhbhj')
            })
            .mouseleave(function () {
                val.toggleClass('hover')
            });
    });
