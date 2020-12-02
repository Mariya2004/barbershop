$(document).ready (() => {

    $('.our-masters').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        variableWidth: true,
        variableHeight: true,

        responsive: [
                {
                    breakpoint: 828,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false
                    }
                },
            ]
    });

    $('#burger').click(() => {
        $('#menu').toggleClass('menu-open');
    });

    $('#header #menu a').click(() => {
        $('#menu').removeClass('menu-open');
    })

    $('#sale-action').click(() => {
        $('#popup-sale').css('display', 'flex');
    });

    $('#popup-sale').click((e) => {
        if (e.target.id === 'popup-sale') {
            $('#popup-sale').hide();
        }
    });

    $('.signup').click(() => {
        $('.our-masters').hide();
        $('#reservation').css('display', 'flex');
    })

    $('#submit').click(function (e) {
        e.preventDefault();
        $('.error-input').hide();


        let name = $('#name');
        let reserveService = $('#reserve-service');
        let telefon = $('#telefon');
        let date = $('#date');
        let reserveMaster = $('#reserve-master');
        let reserveTime = $('#reserve-time');

        let hasError = false;

        if (!name.val()) {
            name.siblings('.error-input').show();
            name.css('border-color', 'red');
            hasError = true;
        } else {
            name.css('border-color', 'rgb(174, 137, 89)');
        }

        if (!reserveService.val()) {
            reserveService.siblings('.error-input').show();
            reserveService.css('border-color', 'red');
            hasError = true;
        } else {
            reserveService.css('border-color', 'rgb(174, 137, 89)');
        }

        if (!telefon.val()) {
            telefon.siblings('.error-input').show();
            telefon.css('border-color', 'red');
            hasError = true;
        } else {
            telefon.css('border-color', 'rgb(174, 137, 89)');
        }

        if (!date.val()) {
            date.siblings('.error-input').show();
            date.css('border-color', 'red');
            hasError = true;
        } else {
            date.css('border-color', 'rgb(174, 137, 89)');
        }

        if (!reserveMaster.val()) {
            reserveMaster.siblings('.error-input').show();
            reserveMaster.css('border-color', 'red');
            hasError = true;
        } else {
            reserveMaster.css('border-color', 'rgb(174, 137, 89)');
        }

        if (!reserveTime.val()) {
            reserveTime.siblings('.error-input').show();
            reserveTime.css('border-color', 'red');
            hasError = true;
        } else {
            reserveTime.css('border-color', 'rgb(174, 137, 89)');
            reserveTime.siblings('.error-input').hide();
        }

        if (!hasError) {
            $.ajax({
                method: 'POST',
                uri: 'mail.php',
                data: 'name=' + name.val() + '$reserveService=' + reserveService.val() + '$telefon=' + telefon.val() + '$date=' + date.val() + '$reserveMaster=' + reserveMaster.val() + '$reserveTime=' + reserveTime.val(),

                success: () => {
                    $('#reservation-sent').show();
                    $('#reservation-content').hide();
                },

                error: () => {
                    $('#reservation-container').hide();
                    alert('Ошибка записи. Свяжитесь, пожалуйста, по номеру телефона');
                },
            })

        }
    });

    $('#reservation-cancel-close').click((e) => {
        if (e.target.id === 'reservation-cancel-close') {
            $('#reservation').hide();
            $('.our-masters').show();
        }
    });

});