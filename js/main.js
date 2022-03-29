(function($) {
    // Tamaño de la pantalla
    var $window = $(window),
        windowSize	= $window.width();
    function content() {
        var bloquote = $('blockquote');
        bloquote.prepend('<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shape-icon-openquote"></use></svg>').append('<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shape-icon-closequote"></use></svg>');
    }
    function accordeon() {
        var button = $('.modulo__block'),
            full = $('.modulo--full');
        button.on('click', function() {
            var $this = $(this);
            if($('.modulo--full').length) {
                setTimeout(function() {
                    $this.parents('.modulo').toggleClass('modulo--full').find('.modulo__accordeon').delay(300).fadeIn();
                }, 300)
            } else {
                $this.parents('.modulo').toggleClass('modulo--full').find('.modulo__accordeon').delay(300).fadeIn();
            }
            $this.parents('.modulo').siblings().find('.modulo__accordeon').fadeOut(300, function() {
                $(this).parents('.modulo').removeClass('modulo--full');
            });
        });
    }
    content();
    accordeon();
})(jQuery);
