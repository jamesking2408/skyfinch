(function ($) {
    "use strict";
    $(window).on('load', function () {
        $(".modal-content").load("searchModal.html");
        if (screen.width < 1024) {
            // $('.page-top img').removeAttr("data-bs-toggle");
            $('[data-bs-toggle="tooltip"]').tooltip('dispose');
        } else {
            $('.page-top img').attr("data-bs-toggle", "tooltip");
        }
        $(".row_tab .tab-pane, .row_tab .tab-row1, .swiper .tab-pane, .tabPaneScroll").mCustomScrollbar({
            scrollButtons: { enable: true },
            theme: "dark",
            scrollbarPosition: "inside"
        });
    });
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
        setTimeout(() => {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 3000);
    }
    spinner();
    //  TESTIMONIALS CAROUSEL HOOK
    $(document).ready(function () {
        $('.owl-carousel').owlCarousel();
    });
    // Initiate the wow.js
    new WOW().init();
    //<!-- pop up -->
    function myTooltip() {
        $(".mytooltip").hover(
            function (e) {
                // e.preventDefault();
                e.stopPropagation();
                $(this).find('.tooltip-content').delay(900).fadeIn();
                $(this).find('.tooltip-content').hover(
                    function (e) {
                        // e.preventDefault();
                        e.stopPropagation();
                        $('.tooltip-content').stop(true);
                    },
                    function (e) {
                        // e.preventDefault();
                        e.stopPropagation();
                        $('.tooltip-content').hide();
                        $('.tooltip-content').stop();
                    }
                );
                $(this).find('.tooltip-content').delay(4000).fadeOut();
            },
            function (e) {
                // e.preventDefault();
                e.stopPropagation();
                $('.tooltip-content').stop();
                $('.tooltip-content').hide();
            }
        );
        $('#spl1, #spl2').click(function () {
            $('.tooltip-content').hide();
        });
    }
    //<!-- pop up end-->
    //section change start
    // Filter
    $('.sec1 a').click(function () {
        var value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.product').show();
        } else {
            $('.product').not('.' + value).hide();
            $('.product').filter('.' + value).show();
            // if (screen.width < 768) {
            //     var tabElement = $(this);
            //     var scrollPosition = tabElement.offset().top;
            //     $('html, body').animate({
            //         scrollTop: scrollPosition - 200
            //     }, 'smooth');
            // }
        }
    })
    $('.sec1 a').click(function () {
        $('.sec1 a').removeClass('active_tab');
        $(this).addClass('active_tab');
    });
    //<!-- update Section Scroll effects -->
    $(document).ready(function () {
        setTimeout(() => {
            screenCheck();
        }, 1800);
        // Popup tooltip
        if (screen.width < 991) {
            myTooltip();
        }
        if (screen.width < 1114) {
            $(document).ready(function () {
                $('.count').counterUp({
                    delay: 10,
                    time: 2000
                });
            });
        }

    });
    $(window).on('resize', function () {
        screenCheck();
    });

    let currentSubPageUrl = $(".submenu a.active");
    function applyScroll() {
        $.scrollify({
            section: ".scroll",
            sectionName: "section-name",
            interstitialSection: "",
            easing: "easeOutExpo",
            // easing: "easeOutQuad",
            scrollSpeed: 500,
            offset: 0,
            scrollbars: true,
            target: "html",
            sectionContainer: "body",
            standardScrollElements: "",
            setHeights: true,
            overflowScroll: false,
            updateHash: false,
            touchScroll: true,
            after: function (index) {
                // Index starts from 0, so index 2 corresponds to section 3
                if (currentSubPageUrl.attr('href') === 'about.html') {
                    // Check if the current section in about page
                    if (index === 2) {
                        // Your condition to execute when scrolling to section 3
                        $('.count').counterUp({
                            delay: 10,
                            time: 2000
                        });
                    }
                } else {
                    // Index page
                    if (index === 5) {
                        // Your condition to execute when scrolling to section 4
                        $('.count').counterUp({
                            delay: 10,
                            time: 2000
                        });
                    }
                }
            }
        });
    }
    function screenCheck() {
        var deviceAgent = navigator.userAgent.toLowerCase();
        var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
        if (agentID || $(window).width() <= 1114) {
            // its mobile screen
            $.scrollify.destroy();
            $('section').removeClass('scroll').removeAttr('style');
            $.scrollify.disable();
        }
        else {
            // its desktop
            $('section').addClass('scroll');
            applyScroll();
            $.scrollify.enable();
        }
    }
    // Call applyScroll function to initialize Scrollify
    applyScroll();
    // disable scrollify
    $(".cloud li").on("click", function () {
        $.scrollify.disable();
    });
    $(".modally-close-button").on('click', function () {
        $.scrollify.enable();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            $.scrollify.enable();
        }
    });
    $(".modally-close").click(function (e) {
        if (e.target == this) {
            $.scrollify.enable();
        }
    });
    //end of scroll effects
    // Navbar scroll background
    $(".hamburger").on("click", function (e) {
        e.preventDefault();
        if ($(this).hasClass("is-active")) {
            $("body").css("overflow", "scroll"); // Disables scrolling
        }
        else {
            $("body").css("overflow", "hidden"); // Enables scrolling
        }
    });
    // Back to top button
    // Index page
    $(document).ready(function () {
        $('.page-top').hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 250) {
                $('.back-to-top').show();
                $('.page-top').show();
                $('.back-to-top').fadeIn('slow');
                $('.page-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
                $('.page-top').fadeOut('slow');
            }
        });
        $('.page-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
            return false;
        });
    });
    // End of back to top button
    //<!-- OwlCarousel script start -->
    var owl = $('#part-proud .cus');
    owl.owlCarousel({
        rtl: false,
        items: 5,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    });
    // change direction OwlCarousel
    // Profile carousel
    var owl = $('.cus_profile_l');
    owl.owlCarousel({
        rtl: true,
        items: 5,
        loop: true,
        margin: 10,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 6000,
        autoplaySpeed: 6000,
        autoplayHoverPause: false,
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
    }).trigger("play.owl.autoplay");
    var owl = $('.cus_profile_r');
    owl.owlCarousel({
        rtl: false,
        items: 5,
        margin: 10,
        loop: true,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 6000,
        autoplaySpeed: 6000,
        autoplayHoverPause: false,
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
    }).trigger("play.owl.autoplay");
    //<!-- OwlCarousel script end -->
    $("#myBtn").click(function () {
        var dots = $("#dots");
        var moreText = $("#more");
        var btnText = $("#myBtn");

        if (dots.css("display") === "none") {
            dots.css("display", "inline");
            btnText.html("Read more <span>&rarr;</span>");
            moreText.css("display", "none");
        } else {
            dots.css("display", "none");
            btnText.html("Read less <span>&rarr;</span>");
            moreText.css("display", "inline");
        }
        // Append the HTML inside myBtn element
        btnText.append('<div class="button_line"></div>');
    })
    /* ---------------------------------------------
            Isotope js Starts
         --------------------------------------------- */

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
    document.addEventListener("DOMContentLoaded", function () {

        // Dropdown mobile and tab view click event
        if (screen.width < 992) {
            DropdownMenuResponsive();
        }
    });
    // Dropdown toggle start
    function DropdownMenuResponsive() {
        // Toggle dropdown on click
        var solutionsDropdown = document.getElementById('solutionsDropdown');
        var solutionsDropdown1 = document.getElementById('solutionsDropdown1');
        var dropdownMenu = solutionsDropdown.nextElementSibling;
        var dropdownMenu1 = solutionsDropdown1.nextElementSibling;
        // Toggle dropdown submenu on button click
        var applicationBtn = document.getElementById('applicationBtn');
        var webBtn = document.getElementById('webBtn');
        var applicationContent = document.querySelector('.dropdown-content1.application');
        var webContent = document.querySelector('.dropdown-content1.web');
        solutionsDropdown.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
            dropdownMenu1.style.display = 'none';
            webContent.style.display = 'none';
            applicationContent.style.display = 'none';
        });
        solutionsDropdown1.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            dropdownMenu1.style.display = (dropdownMenu1.style.display === 'block') ? 'none' : 'block';
            dropdownMenu.style.display = 'none';
            webContent.style.display = 'none';
            applicationContent.style.display = 'none';
        });
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
        // document.addEventListener('click', function (e) {
        //     e.preventDefault();
        //     dropdownMenu.style.display = 'none';
        //     dropdownMenu1.style.display = 'none';
        // });
        // Navbar toggler icon
        var forEach = function (t, o, r) {
            if ("[object Object]" === Object.prototype.toString.call(t))
                for (var c in t)
                    Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
            else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
        };
        var hamburgers = document.querySelectorAll(".hamburger");
        if (hamburgers.length > 0) {
            forEach(hamburgers, function (hamburger) {
                hamburger.addEventListener(
                    "click",
                    function (event) {
                        // Prevent the click event from propagating to the document
                        event.stopPropagation();
                        // Toggle the "is-active" class
                        this.classList.toggle("is-active");
                        dropdownMenu1.style.display = 'none';
                        dropdownMenu.style.display = 'none';
                        webContent.style.display = 'none';
                        applicationContent.style.display = 'none';
                    },
                    false
                );
            });
        }
    }
})(jQuery);
//  Product Enquiry form automatically fill plan price
function choosePlan(planName, planPrice) {
    localStorage.setItem('selectedPlanName', planName);
    localStorage.setItem('selectedPlanPrice', planPrice);
}