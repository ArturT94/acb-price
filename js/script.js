$('.main_banner').slick({
    prevArrow: '<button id="prev" type="button"><</button>',
    nextArrow: '<button id="next" type="button">></button>'
});

$('.main_slick').slick({
    prevArrow: '<button id="prev_catalog" type="button"><</button>',
    nextArrow: '<button id="next_catalog" type="button">></button>'
});

$('.main_product').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button id="prev_catalog" type="button"><</button>',
    nextArrow: '<button id="next_catalog" type="button">></button>'
});