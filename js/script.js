$(document).ready(function () {
    $('.slider').slick({
        // infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 300,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
});