$(document).ready(function () {
    var index = 0;

    $('.thumbnail').on('click', function () {
        index = $(this).closest('img').index();
        var images = $('.row').find('img');
        var img = images.eq(index);

        function image() {
            images.removeClass('active');
            $(this).addClass('active');
            $(this).removeClass('animation');
        }
        $(img).addClass('animation').hide().fadeIn(500, image);
    });

    setInterval(function () {
        if (index == 4) {
            index = 0;
        } else {
            index++;
        }
        console.log(index);

        var images = $('.row').find('img');
        var img = images.eq(index);

        function image() {
            images.removeClass('active');
            $(this).addClass('active');
            $(this).removeClass('animation');
        }
        $(img).addClass('animation').hide().fadeIn(500, image)

    }, 5000);

});

