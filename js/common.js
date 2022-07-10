(function ($) {
    $(window).on('load', function () {


        /* ************************** */
        /* Вторая версия отслеживания */
        /* ************************** */

        var block_show = null;

        function scrollTracking(){
            var wt = $(window).scrollTop(); /*Получает значение отступа прокрутки сверху для первого элемента в наборе.*/
            var wh = $(window).height(); /*Получает высоту элемента. */
            var et = $('.parallax-1, .parallax-2').offset().top; /*Метод позволяет получить текущее положение элемента относительно документа сверху. */
            var etp = $('.parallax-1, .parallax-2').parent().offset().top; /*Метод позволяет получить текущее положение элемента относительно родителя сверху. */
            var eh = $('.parallax-1, .parallax-2').outerHeight(); /*Высота элемента с учетом внутренних отступов, border-width и (опционально) внешних отступов (margin).  */

            if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){  /* */
                if (block_show == null || block_show == false) {
                    $('#console').html('Блок active в области видимости');

                    $(window).bind('scroll',function(e){
                        parallaxScroll();
                    });
        
                    function parallaxScroll(){
                        var scrolled = $(window).scrollTop();

                        if ($(document).width() > 1500) {
                            $('.parallax-1').css('top',((et - etp)*.01 + (scrolled*.21))+'px');
                            // $('.parallax-1').css('top',(1800 - (scrolled*.3))+'px');
                            $('.parallax-2').css('top',((et - etp)*.3 + (scrolled*.21))+'px');
                        } else {
                            if ($(document).width() > 1000) {
                                $('.parallax-1').css('top',((et - etp)*.01 + (scrolled*.18))+'px');
                                $('.parallax-2').css('top',((et - etp)*.29 + (scrolled*.18))+'px');
                            } else {
                            if ($(document).width() > 700) {
                                $('.parallax-1').css('top',((et - etp)*.01 + (scrolled*.16))+'px');
                                $('.parallax-2').css('top',((et - etp)*.28 + (scrolled*.16))+'px');
                            } else {
                                if ($(document).width() > 500) {
                                    $('.parallax-1').css('top',((et - etp)*.01 + (scrolled*.13))+'px');
                                    $('.parallax-2').css('top',((et - etp)*.25 + (scrolled*.13))+'px');
                                } else {
                                    if ($(document).width() > 400) {
                                        $('.parallax-1').css('top',((et - etp)*.01 + (scrolled*.1))+'px');
                                        $('.parallax-2').css('top',((et - etp)*.20 + (scrolled*.1))+'px');
                                    } else {
                                        if ($(document).width() > 350) {
                                            $('.parallax-1').css('top',((et - etp)*.1 + (scrolled*.1))+'px');
                                            $('.parallax-2').css('top',((et - etp)*.4 + (scrolled*.1))+'px');
                                        } else {
                                            if ($(document).width() > 300) {
                                                $('.parallax-1').css('top',((et - etp)*.3 + (scrolled*.1))+'px');
                                                $('.parallax-2').css('top',((et - etp)*.6 + (scrolled*.1))+'px');
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                    }
                }
                block_show = true;
            } else {
                // if (block_show == null || block_show == true) {
                //     $('#console').html('Блок active скрыт');
                // }
                // block_show = false;
            }
        }

        $(window).scroll(function(){
            scrollTracking();
        });
            
        $(document).ready(function(){ 
            scrollTracking();
        });

        
    });
})(jQuery);
