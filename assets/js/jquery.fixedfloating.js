(function($) {

    var options = {},
        fixedCss = {
            'position': 'fixed',
            'top': '0'
        },
        staticCss = {
            'position': 'absolute',
            'top': '0'
        };

    $.fn.fixedfloating = function(settings) {

        if (settings) {
            $.extend(options, settings);
        }

        this.each(function() {
            var element = $(this).wrap('<div class="fixedfloating-wrapper clearfix" style="position:relative;"/>'),
                wrapper = element.parent();

            element
                .css(staticCss)
                .css({
//                    width: wrapper.width(),
                    height: wrapper.height()
                });

            $(window).scroll(function(event) {
                var wrapperStartsAt = wrapper.offset().top - parseFloat(element.css('margin-top').replace(/auto/, 0)),
                    viewportStartsAt = $(window).scrollTop();
                element.css(viewportStartsAt > wrapperStartsAt ? fixedCss : staticCss);
            });
        });

        return this;

    };

})(jQuery);