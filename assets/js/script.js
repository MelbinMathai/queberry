/*////////// Add and Remove class on scroll //////////*/
$(window).scroll(function() {
    if($(this).scrollTop() > 0)
    {
        $('nav').addClass('affix');
    } else
    {
        $('nav').removeClass('affix');
    }  
});
/* End */

$('.que_filtering').click(function() {
    $('.filter_content').toggle('slow');
});

//Scroll back to top
(function($) { "use strict";

    $(document).ready(function(){"use strict";
        
        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';      
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);   
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });             
        jQuery('.progress-wrap').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, duration);
            return false;
        })
        
        
    });
    
})(jQuery); 

/*////////// Nav Sub Menu Collapse Animation //////////*/
document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll('.sidebar .nav-link').forEach(function(element){
    
    element.addEventListener('click', function (e) {

      let nextEl = element.nextElementSibling;
      let parentEl  = element.parentElement;  

        if(nextEl) {
            e.preventDefault(); 
            let mycollapse = new bootstrap.Collapse(nextEl);
            
            if(nextEl.classList.contains('show')){
              mycollapse.hide();
            } else {
                mycollapse.show();
                // find other submenus with class=show
                var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                // if it exists, then close all of them
                if(opened_submenu){
                  new bootstrap.Collapse(opened_submenu);
                }
            }
        }
    }); // addEventListener
  }) // forEach
}); 

/*////////// Banner Text Animation /////////*/
$('.banner_anim').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    nav:false,
    mouseDrag:false,
    autoplay:false,
    animateOut: 'slideOutUp',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

/*/////////// Blog ///////////*/
$('.blog_item').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    nav:false,
    mouseDrag:true,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});


/*/////////// Clients ///////////*/
$('.clients_mob').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    nav:false,
    mouseDrag:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:1
        }
    }
});

/*/////////// News ///////////*/
$('.news_item').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    nav:false,
    mouseDrag:true,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});



/*///////// Number Counting ///////////*/
var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });
    });
    counted = 1;
  }
});


/*//////// Our Product ////////*/
gsap.registerPlugin(ScrollTrigger);

gsap.to(".panel:not(:last-child)", {
  yPercent: -100, 
  ease: "none",
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#container",
    start: "top top",
    end: "+=300%",
    scrub: true,
    pin: true
  }
});

gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});






/*//////// Add or remove class on click ////////*/

// $(function() {
//     $('.menu-scroll .nav .nav-link').click(function() {
//         $(this).toggleClass('active');
//         // $('.menu-scroll .nav .nav-link.active').removeClass('active');
//     });
// });