(function($) {
    "use strict";

    // Spinner
    var spinner = function() {
        setTimeout(function() {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();  


    // Initiate the wowjs
    new WOW().init();


    //<!-- pop up -->
    $(".mytooltip").hover(
        function(e) {
            $(this).find('.tooltip-content').delay(2000).fadeIn();
            $(this).find('.tooltip-content').hover(
                function(e) {
                    $('.tooltip-content').stop(true);
                },
                function(e) {
                    $('.tooltip-content').hide();
                    $('.tooltip-content').stop();
                }
            );
            $(this).find('.tooltip-content').delay(4000).fadeOut();
        },
        function(e) {
            $('.tooltip-content').stop();
            $('.tooltip-content').hide();
        }
    );

    $('#spl1, #spl2').click(function() {
        $('.tooltip-content').hide();
    });
    //<!-- pop up end-->



    //section change start
    // Filter
    $('.sec a').click(function() {
        var value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.product').show();
        } else {
            $('.product').not('.' + value).hide();
            $('.product').filter('.' + value).show();
        }
    })

    $('.sec a').click(function() {
            $('.sec a').removeClass('active1');
            $(this).addClass('active1');
        })
        //section change end

    // Fixed Navbar
    // New navbar when I scroll down it will be go up
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        document.getElementById("nav1").style.padding = "2px 8px";
        document.getElementById("logo").style.fontSize = "30px";
      } else {
        document.getElementById("nav1").style.padding = "12px 10px";
        document.getElementById("logo").style.fontSize = "50px";
      }
    }
//When scroll down nav bar bottom line increase
// $(document).ready(function(){
//     $(window).on("scroll",function(){
//     var wn = $(window).scrollTop();
//     if(wn > 40){
//         $("#nav1").css("border-bottom","thin rgb(0,0,0)");
//         $("#nav1").css("background","rgb(0,0,0)");
//         $("#nav1").css("transition-duration","0.8s");
//     }
//     else{
//         $("#nav1").css("border-bottom","thin solid rgb(186, 187, 189)");
//         $("#nav1").css("background","rgba(0,0,0,0)");
//         $("#nav1").css("transition-duration","1s");     
//     }
//   });
// });


//     $(window).scroll(function() {
//         if ($(window).width() < 992) {
//             if ($(this).scrollTop() > 45) {
//                 $('.fixed-top').addClass('bg-white shadow');
//             } else {
//                 $('.fixed-top').removeClass('bg-white shadow');
//             }
//         } else {
//             if ($(this).scrollTop() > 45) {
//                 $('.fixed-top').addClass('bg-white shadow').css('top', 0);
//             } else {
//                 $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
//             }
//         }
//     });




//<!-- update Section Scroll effects -->

$(document).ready(function() {
    screenCheck();
});

$(window).on('resize', function() {
    screenCheck();
});

function applyScroll() {
    $.scrollify({
        section: '.scroll',
        sectionName: 'section-name',
        // standardScrollElements: 'section',
        easing: 'easeOutExpo',
        scrollSpeed: 200,
        offset: 0,
        scrollbars: true,
        setHeights: true,
        overflowScroll: true,
        updateHash: false,
        touchScroll: true,
    });
}

function screenCheck() {
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (agentID || $(window).width() <= 1124) {
        // its mobile screen
        $.scrollify.destroy();
        $('section').removeClass('scroll').removeAttr('style');
        $.scrollify.disable();
    } else {
        // its desktop
        $('section').addClass('scroll');
        applyScroll();
        $.scrollify.enable();
    }
}

//end of scroll effects


    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 120, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });


    //<!-- OwlCarousel script start --> 
    var owl = $('.cus');
    owl.owlCarousel({
        items: 5,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 6000,
        autoplaySpeed: 6000,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [10])
    })
    $('.stop').on('click', function() {
            owl.trigger('stop.owl.autoplay')
        })
        //<!-- OwlCarousel script end -->










})(jQuery);