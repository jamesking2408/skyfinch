(function ($) {
    "use strict";

    // <!-- Change select option method -->

    $(document).ready(function () {
        $('.form-select').on('change', function () {
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
        }, 1500);
    };
    spinner();

    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        margin: -38,
        dots: true,
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
        function (e) {
            $(this).find('.tooltip-content').delay(2000).fadeIn();
            $(this).find('.tooltip-content').hover(
                function (e) {
                    $('.tooltip-content').stop(true);
                },
                function (e) {
                    $('.tooltip-content').hide();
                    $('.tooltip-content').stop();
                }
            );
            $(this).find('.tooltip-content').delay(4000).fadeOut();
        },
        function (e) {
            $('.tooltip-content').stop();
            $('.tooltip-content').hide();
        }
    );

    $('#spl1, #spl2').click(function () {
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
        if (agentID || $(window).width() <= 1110) {
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
        rtl: false,
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

    // change direction OwlCarousel
    var owl1 = $('.cus1');
    owl1.owlCarousel({
        rtl: true,
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


    //<!-- OwlCarousel script end -->

    $("#myBtn").click(function () {
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
    /* ---------------------------------------------
            Isotope js Starts
         --------------------------------------------- */
    $(window).on('load', function () {
        $('.portfolio-filter ul li').on('click', function () {
            $('.portfolio-filter ul li').removeClass('active');
            $(this).addClass('active');

            var data = $(this).attr('data-filter');
            $workGrid.isotope({
                filter: data
            });
        });

        $('.portfolio-filter ul li.filter_tab1').on('click', function () {
            $('hr.hr-blurry').addClass('act_tab');
            $('.portfolio-filter ul li.filter_tab').on('click', function () {
                $('hr.hr-blurry').removeClass('act_tab');
            });
        });



        if (document.getElementById('portfolio')) {
            var $workGrid = $('.portfolio-grid').isotope({
                itemSelector: '.all',
                percentPosition: true,
                masonry: {
                    columnWidth: '.all'
                }
            });
        }
    });



    /*----------------------------------------------------*/
    /* Start Magnific Pop Up
    /*----------------------------------------------------*/
    if ($('.img-gal').length > 0) {
        $('.img-gal').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }
    /*----------------------------------------------------*/
    /*  End  Magnific Pop Up
    /*----------------------------------------------------*/



    //////////////////////////////////////////////////////////////////////////////////////////////////

    // Search box start

    var exampleModal = $("#exampleModal"),
        exampleModalClose = $(".modal-header input");

    exampleModal.on("shown.bs.modal", function () {
        document.activeElement.blur();
        exampleModalClose.focus();
    });
    $("#searchButton").click(function () {
        var showing = $('.modal-backdrop');
        var showing1 = $('.modal');
        var modal_body = $('.modal-body .content');
        $('#searchbar').click(function () {
            modal_body.show();
        });
        showing.show();
        showing1.show();
        modal_body.hide();
    });

    $(".searchLink").click(function () {
        var fade = $('.modal-backdrop');
        var fade1 = $('.modal');
        fade.hide();
        fade1.hide();
    });

    // Dropdown toggle start

    // Toggle dropdown on click
    var solutionsDropdown = document.getElementById('solutionsDropdown');
    var solutionsDropdown1 = document.getElementById('solutionsDropdown1');
    solutionsDropdown.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var dropdownMenu = this.nextElementSibling;
        dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
    });

    solutionsDropdown1.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var dropdownMenu = this.nextElementSibling;
        dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
    });
    // Toggle dropdown submenu on button click
    var applicationBtn = document.getElementById('applicationBtn');
    var webBtn = document.getElementById('webBtn');
    var applicationContent = document.querySelector('.dropdown-content1.application');
    var webContent = document.querySelector('.dropdown-content1.web');

    function toggleDropdownContent(e, content) {
        e.preventDefault();
        e.stopPropagation();
        content.style.display = (content.style.display === 'block') ? 'none' : 'block';
    }

    applicationBtn.addEventListener('click', function (e) {
        toggleDropdownContent(e, applicationContent);
        webContent.style.display = 'none';
    });

    webBtn.addEventListener('click', function (e) {
        toggleDropdownContent(e, webContent);
        applicationContent.style.display = 'none';
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function (e) {
        var target = e.target;
        if (!target.closest('.navbar-nav .nav-item.dropdown')) {
            var dropdownMenus = document.querySelectorAll('.navbar-nav .nav-item.dropdown .dropdown-menu');
            dropdownMenus.forEach(function (menu) {
                menu.style.display = 'none';
            });
        }
        if (!target.closest('.dropdown-content1')) {
            document.querySelectorAll('.dropdown-content1').forEach(function (content) {
                content.style.display = 'none';
            });
        }
        if (!target.closest('#navbarCollapse')) {
            var mainNav = document.querySelector('#navbarCollapse');
            if(mainNav.classList.contains('show')){
                mainNav.classList.remove('show')
            }
        }
    });


})(jQuery);