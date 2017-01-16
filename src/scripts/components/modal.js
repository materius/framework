/*!
 * Materius Modal
 * http://materius.github.io
 *
 * Copyright 2016-2017 Juliano Bailão
 * Released under the MIT license
 * https://github.com/materius/framework/blob/master/LICENSE
 */

(function ( $ ) {
    'use strict';

    var stack = 0;

    $.fn.extend({
        modal: function(options) {

            var defaults = {
                center: true
            };

            return this.each(function() {

                options = $.extend(defaults, options);

                $(this).click(function(e) {
                  var modal_id = $(this).attr("href").replace('#', '') || $(this).data('link');
                  $('#'+modal_id).openModal(options);
                  e.preventDefault();
                });
            });
        },
        openModal: function() {
            var elem = $(this);
            var id = $(this).data('stack') || ++stack;
            var overlay = $('#overlay-'+id);

            if (overlay.length == 0) {
                var overlay = $('<div class="materius-overlay" id="overlay-'+id+'"></div>');
                overlay.click(function() {
                    elem.closeModal();
                });
                overlay.css('z-index', 999+id);
                $('body').append(overlay);
            }

            elem.find('.modal-close').click(function(e) {
                elem.closeModal();
            });

            elem.data('stack', id)
                .css('z-index', 1000+id);
            elem.addClass('active');
            overlay.addClass('active');
        },
        closeModal: function() {
            var elem = $(this);
            var id = $(this).data('stack');
            var overlay = $('#overlay-'+id);

            overlay.removeClass('active');
            elem.removeClass('active');
        }
    });
}(jQuery));
