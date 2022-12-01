$('.category_desc a').on('click', function () {
    $.ajax({
        url: 'server/ajaxForm.php',
        method: 'post',

    })
});