jQuery( document ).ready(function($) {

    $('.custom-input__block:not(.custom-input__block--select)').on('click',function (e) {
        $(".custom-input__field[value='']").hide();
        $('.custom-input__block').removeClass('custom-input__block--active');
        $(this).addClass('custom-input__block--active');
        $(this).find(".custom-input__field").show();


    })


    $(".custom-input__field").on( "focusout", function () {
        $(this).parent('.custom-input__block').removeClass('custom-input__block--active');
        if($(this).val()!='') {
            $(this).parent('.custom-input__block').addClass('custom-input__block--feeled');
        } else {
            $(this).parent('.custom-input__block').removeClass('custom-input__block--feeled');
            $(this).hide();

        }
    });

    $('.custom-input__block--select').on('click',function (e) {
        $(".custom-input__field[value='']").hide();
        $('.custom-input__block').removeClass('custom-input__block--active');
        $(this).addClass('custom-input__block--active');
        $(this).find(".custom-input__field").show();
        if(!$(e.target).hasClass('custom-input__select-item')){
            $(this).find(".custom-input__select").show();
        } else{
            $(this).removeClass('custom-input__block--active');
            $(this).find(".custom-input__select").hide();
        }

    });

    $('.custom-input__select .custom-input__select-item').on('click',function () {
        $(this).parents('.custom-input__block--select').find('.custom-input__field').val($(this).text());
        $(this).parents('.custom-input__block').addClass('custom-input__block--feeled');
        $(this).parents('.custom-input__select').hide();

    });
    
    $('.main-header__mobile-toggle').on('click', function () {
        $('.main-header__list').toggleClass('main-header__list--open')
        
    })


});