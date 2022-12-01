$('.main_banner').slick({
    prevArrow: '<button id="prev" type="button"><i class="fa-solid fa-angle-left" style="font-size: 43px"></i></button>',
    nextArrow: '<button id="next" type="button"><i class="fa-solid fa-angle-right" style="font-size: 43px"></i></button>'
});

$('.main_slick').slick({
    prevArrow: '<button id="prev_catalog" type="button"><i class="fa-solid fa-angle-left" style="font-size: 43px"></i></button>',
    nextArrow: '<button id="next_catalog" type="button"><i class="fa-solid fa-angle-right" style="font-size: 43px"></i></button>'
});

$('.main_product').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button id="prev_catalog" type="button"><i class="fa-solid fa-angle-left" style="font-size: 43px"></i></button>',
    nextArrow: '<button id="next_catalog" type="button"><i class="fa-solid fa-angle-right" style="font-size: 43px"></i></button>'
});

$('.catalog_img_scroll').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="prev_product" type="button"><i class="fa-solid fa-angle-left" style="font-size: 43px"></i></button>',
    nextArrow: '<button class="next_product" type="button"><i class="fa-solid fa-angle-right" style="font-size: 43px"></i></button>'
});

$('.main-product').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button id="prev_catalog"><i class="fa-solid fa-angle-left" style="font-size: 43px; color: #CFCFCF"></i></button>',
    nextArrow: '<button id="next_catalog"><i class="fa-solid fa-angle-right" style="font-size: 43px; color: #911614;"></i></button>'
});

$('.main__product').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button id="prev_catalog"><i class="fa-solid fa-angle-left" style="font-size: 43px; color: #CFCFCF"></i></button>',
    nextArrow: '<button id="next_catalog"><i class="fa-solid fa-angle-right" style="font-size: 43px; color: #911614;"></i></button>'
});

let menu = $('.category_table_ul_menu li'),
    select = $('.category_desc'),
    sel = null;
menu.on('click', function (e) {
    e.preventDefault();
    if (menu.hasClass('active')) {
        menu.removeClass('active');
        $(this).addClass('active');
    for(let i = 0; i < menu.length; i++){
        select.hide(500);
        if(menu[i] === e.currentTarget){
            sel = jQuery(select[i]);
        }
    }
    sel.show(500);
    }
});

$('.category_desc a').on('click', function (e) {
    e.preventDefault();
    $('.fixed-overlay').fadeIn(800);
});

$('.form_buttons a').on('click', function (e) {
    e.preventDefault();
    $('.fixed-overlay').fadeOut(800);
})

