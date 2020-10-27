import $ from "jquery";
import "./import/modules";
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
import "./import/jquery.mask";
import "./import/jquery.nice-select.min";
import "../../node_modules/bootstrap/js/dist/modal";

$(function() {


    $("input[type=tel]").mask("+7 (999) 999-9999");

    $('.top-menu a').click(function() {
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

    $('.anchor').click(function() {
        var scroll_elem = $(this).attr('href');
        if ($(scroll_elem).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_elem).offset().top
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

    $('.advantage-button').click(function() {
        $('.advantage-buttons').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.advantage-circle-inner').find('.advantage-item').hide(200);
        $('#' + $(this).data('switch')).show(200);
    });

    $(function() {
        var topPos = $('.header').first().offset().top;
        $(window).scroll(function() {
            var top = $(document).scrollTop();
            if (top > topPos) {
                $('.header').addClass('fixed');
                var HeightHeader = $('.header').outerHeight();
                $('body').css('padding-top', HeightHeader);
            } else {
                $('.header').removeClass('fixed');
                $('body').css('padding-top', '0');
            }
        });
    });

    var swiper = new Swiper('.rewiews-slider', {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    const swiperPrev = document.getElementById('swiperPrev')
    const swiperNext = document.getElementById('swiperNext')

    swiperPrev.addEventListener('click', () => {
        swiper.slidePrev();
    })
    swiperNext.addEventListener('click', () => {
        swiper.slideNext();
    })


    $(window).on('load resize scroll', function() {


        var width = $(window).width();

        if ((width > '700') && (width < '1000')) {

        }

    });

});