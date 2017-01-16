
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

$('.btn,.btn-large, .btn-small, .pagination a, .navbar .brand, .navbar .menu a, .input-box button, .list a').addClass('waves-effect');
$('.material-field input, .material-field textarea').change(function () {
    if ($(this).val()) {
        $(this).addClass('active');
    } else {
        $(this).removeClass('active');
    }
});

$('.material-field').each(function () {
    var el = $(this).find('input, textarea');

    if (el.val()) {
        el.addClass('active');
    } else {
        el.removeClass('active');
    }

    if ($(this).find('.tracer').length == 0) {
        $(this).append($('<span class="tracer"></span>'));
    }
});

window.Waves = require('./components/waves');

// autoresize textareas
const autosize = require('./components/autoresize');
autosize($('textarea'));

$(document).ready(function() {
    $('.menu-liquid > li').click(function(e) {
        e.preventDefault();

        $(this).parent().find('li').not(this).removeClass('active');

        if (! $(this).hasClass('active')) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });

    var overlay = $('<div class="materius-overlay"></div>');
    overlay.click(function () {
        $('.trigged').removeClass('active trigged');
        $(this).removeClass('active');
    });
    $('body').append(overlay);

    $('.modal-trigger').each(function () {
        var modal = $('#'+$(this).attr('data-link'));

        $(this).click(function (e) {
            e.preventDefault();
            console.log(modal);
            modal.addClass('active trigged');
            overlay.addClass('active');
        });

        modal.find('.modal-close').click(function (e) {
            overlay.click();
        })
    });
});
