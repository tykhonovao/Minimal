const settingSlider = {
    dots: true,
    arrows: true,
    infinite: true,
    lazyLoad: 'ondemand',
    speed: 500,
    slidesToShow: 2,
    slidesToSroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToSroll: 1
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 2,
                slidesToSroll: 1
            }
        },
    ]
}

$(document).ready(function () {
    $('.slider').slick(settingSlider);
})
