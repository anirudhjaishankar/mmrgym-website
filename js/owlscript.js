$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    stagePadding: 50,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        450: {
            items: 3
        },
        3000: {
            items: 5
        }
    }
});