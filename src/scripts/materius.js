
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

$('.menu-fluid li').click(function(e) {
    e.preventDefault();

    $(this).parent().find('li').removeClass('active');
    $(this).addClass('active');
});
