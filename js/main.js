(function ($) {
    "use strict";

    // <!-- Change select option method -->
    
    $(document).ready(function() {
        $('.form-select').on('change', function() {
            var selectedValue = $(this).val();
    
            $('.tab-pane').removeClass('show active');
            
            $('#' + selectedValue).addClass('show active');
        });
    });

    // <!-- AOS Animation Not Firing Correctly After Browser Resize -->
    let samt = 0;
    window.addEventListener('scroll', function () {
        samt <= 10 ? samt++ : AOS.refresh();
    });

    //<!-- Tooltip bootstrap 5.3 -->
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 500);
    };
    spinner();

    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        margin:-38,		           
        dots:true,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });

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
    $('.sec a').click(function () {
        var value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.product').show();
        } else {
            $('.product').not('.' + value).hide();
            $('.product').filter('.' + value).show();
        }
    })

    $('.sec a').click(function () {
        $('.sec a').removeClass('active1');
        $(this).addClass('active1');
    })


    //<!-- update Section Scroll effects -->

    $(document).ready(function () {
        screenCheck();
    });

    $(window).on('resize', function () {
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
        // Index page
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 120, 'easeInOutExpo');
        return false;
    });

        // Other pages
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.page-top').fadeIn('slow');
        } else {
            $('.page-top').fadeOut('slow');
        }
    });
    $('.page-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 120, 'easeInOutExpo');
        return false;
    });
    
    // End of back to top button



    // Facts counter
    $('.count').counterUp({
        delay: 10,
        time: 3000
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
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [10])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })
    //<!-- OwlCarousel script end -->
    document.querySelector("#myBtn").addEventListener("click", function() {
        var dots = $("#dots");
        var moreText = $("#more");
        var btnText = $("#myBtn");
      
        if (dots.css("display") === "none") {
          dots.css("display", "inline");
          btnText.text("Read more");
          moreText.css("display", "none");
        } else {
          dots.css("display", "none");
          btnText.text("Read less");
          moreText.css("display", "inline");
        }
    })
    //////////////////////////////////////////////////////////////////////////////////////////////////
    


})(jQuery);