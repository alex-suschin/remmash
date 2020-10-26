import $ from "jquery";
import "./import/modules";
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
import "./import/jquery.mask";
import "./import/jquery.nice-select.min";
import "../../node_modules/bootstrap/js/dist/modal";

$(function() {


    $("input[type=tel]").mask("+7 (999) 999-9999");

    $('.scrollto').click(function() {
        var scroll_elem = $(this).attr('href');
        if ($(scroll_elem).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_elem).offset().top - 100
            }, 800);
        } else {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        }
        return false;
    });

    $('#hamburger-icon').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.mob-menu').addClass('active');
            $('html').addClass('ov-hidden');
        } else {
            $('.mob-menu').removeClass('active');
            $('html').removeClass('ov-hidden');
        }
    });

    $('.cities-select').niceSelect();

    // $('.style-tab').click(function() {
    //     $('.style-tabs').find('.active').removeClass('active');
    //     $(this).addClass('active');
    //     $('.styles-elems').find('.styles-elem-item').hide();
    //     $('#' + $(this).data('switch')).show();
    // });

    $(window).on('load resize scroll', function() {

        var width = $(window).width();

        if ((width > '700') && (width < '1000')) {

        }

    });

});