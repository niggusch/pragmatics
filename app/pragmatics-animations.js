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


    $('#navigation a[section]').click(function(e)
    {
        //e.preventDefault();
        console.log(this);
        var section = $(this).attr('section');
        console.log("found section"+ section);
        if(section)
          var elem = $(section)
          if(elem)
            $('html,body').animate({ scrollTop: elem.offset().top }, 500);
    });

    //Make Navigation float
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        if(top < 50)
        {
            $('#navigation').removeClass('float flipInX');
            $('body').removeClass('float');
        }
        else if(top >= 65)
        {
            $('#navigation').addClass('float flipInX ');
            $('body').addClass('float');
        }
    });
  }

)();
