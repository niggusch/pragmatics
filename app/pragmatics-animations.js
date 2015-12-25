'use strict';
(
  function()
  {
    'use strict';
    var ANIMATION_ATTR = "animate";
    var ANIMATION_DELAY = "delay";
        /*
         * Setup floating navbar.
      */
        $(window).scroll(function(){
            var top = $(this).scrollTop();
            if(top < 19)
            {
                $('#navigation').removeClass('float navigation');
                $('body').removeClass('float');

            }
            else if(top >= 20)
            {
                $('#navbar').addClass('float navigation');
                $('body').addClass('float');
            }
        });


    $('['+ANIMATION_ATTR+']').each(function()
       {
           var element = $(this);
           var cssClass   = element.attr(ANIMATION_ATTR);
           var cssDelay   = element.attr(ANIMATION_DELAY);


           element.css({ 'opacity':  0 });

           if(cssDelay)
               element.css({
                   '-webkit-animation-delay':  cssDelay,
                   '-moz-animation-delay':     cssDelay,
                   'animation-delay':          cssDelay
               });
          //alert("animation for element"+ element)

              element.addClass('animated').addClass(cssClass);
              element.css({ 'opacity': 1 });



       });
  }
)();
