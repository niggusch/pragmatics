'use strict';
(
  function()
  {
    'use strict';
    var ANIMATION_ATTR = "animate";
    var ANIMATION_DELAY = "delay";

    var doAnimate = function(element){
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

         element.addClass('animated').addClass(cssClass);
         element.css({ 'opacity': 1 });
    }

    // hook for all livequery to animate all
    $('['+ANIMATION_ATTR+']').livequery( doAnimate);

  }
)();
