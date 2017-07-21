;
(function($) {
    $(window).on('load', function () {
        var $preloader = $('#page-preloader'),
            $spinner   = $preloader.find('.spinner');
        $spinner.fadeOut();
        $preloader.delay(350).fadeOut('slow');
    });

    $(document).ready(function() {

        $(".top-menu-item.right ").click(function(e){
            e.preventDefault();
            $(".content.pro").animate({left: '-200%'}, 500);
            $(".content.life").animate({right: '0%'}, 500);
            $(".content-title.pro").animate({left: '-200%'}, 500);
            $(".content-title.life").animate({right: '0%'}, 500);
            $('.sub-menu.left').removeClass('current-menu');
            $('.sub-menu.right').addClass('current-menu');

        });

        $(".top-menu-item.left ").click(function(e){
            e.preventDefault();
            $(".content.pro").animate({left: '0%'}, 500);
            $(".content.life").animate({right: '-200%'}, 500);
            $(".content-title.pro").animate({left: '0%'}, 500);
            $(".content-title.life").animate({right: '-200%'}, 500);
            $('.sub-menu.right').removeClass('current-menu');
            $('.sub-menu.left').addClass('current-menu');
        });

        $(".works").slick({
            slidesToShow: 2,
            centerMode: true,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 790,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        variableWidth: true
                    }
                }]
        });
    });

})(jQuery);

