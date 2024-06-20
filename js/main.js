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
        $('body').on('copy', function (e) {
            e.preventDefault();
            var defaultText = "!OOPS, you can not copy and paste.";
            var clipboardData = e.originalEvent.clipboardData || window.clipboardData;
            if (clipboardData) {
                clipboardData.setData('text', defaultText);
            } else {
                window.clipboardData.setData('Text', defaultText);
            }
        });
        $(document).bind("contextmenu", function (e) {
            e.preventDefault();
            return false;
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
    $('.spl1').click(function () {
        $('.tooltip-content').css("display", "none");
    });
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

    let currentSubPageUrl = window.location.pathname.split("/").pop();
    function applyScroll() {
        $.scrollify({
            section: ".scroll",
            sectionName: "section-name",
            interstitialSection: "",
            easing: "easeOutExpo",
            // easing: "easeOutQuad",
            scrollSpeed: 200,
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
                if (currentSubPageUrl === 'about.html') {
                    if (index === 2) {
                        $('.count').counterUp({
                            delay: 10,
                            time: 2000
                        });
                    }
                } else if (currentSubPageUrl === 'index.html') {
                    // Index page
                    if (index === 5) {
                        $('.count').counterUp({
                            delay: 10,
                            time: 2000
                        });
                    } else if (index === 8) {
                        var validator = $("#cus_form").validate();
                        validator.resetForm();
                    }
                } else if (currentSubPageUrl === 'service.html') {
                    if (index === 2) {
                        const validateService = $('#callus').validate();
                        validateService.resetForm();
                    }
                } else if ((currentSubPageUrl === 'contact.html') || (currentSubPageUrl === 'contactUs.html')) {
                    if ((index === 1) || (index === 0)) {
                        const validateService = $('#contactus').validate();
                        validateService.resetForm();
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
        disableScrollify();
    });
    // Function to disable scrollify
    function disableScrollify() {
        // Assuming scrollify is a jQuery plugin
        $.scrollify.disable();
        $('body').css('overflow', 'hidden');
    }

    // Function to enable scrollify
    function enableScrollify() {
        // Assuming scrollify is a jQuery plugin
        $.scrollify.enable();
        $('body').css('overflow', 'auto');
    }

    $(".modally-close-button").on('click', function () {
        enableScrollify();
        $('body').css('overflow', 'auto');
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            enableScrollify();
            $('body').css('overflow', 'auto');
        }
    });
    $(".modally-close").click(function (e) {
        if (e.target == this) {
            enableScrollify();
            $('body').css('overflow', 'auto');
        }
    });
    //end of scroll effects
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

    // fixed Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.vw-nav').addClass('fixed-top animated slideInDown');
            $(document).find('.dropdown--menu, .dropdown--menu-01').css("top", "65px");
        } else {
            $('.vw-nav').removeClass('fixed-top animated slideInDown');
            $(document).find('.dropdown--menu, .dropdown--menu-01').css("top", "100px");
        }
    });

    document.addEventListener("DOMContentLoaded", function () {

        // Dropdown mobile and tab view click event
        if (screen.width < 992) {
            DropdownMenuResponsive();
        }

    });
    $(document).ready(function () {
        // Initially hide the dropdown menu
        $('.dropdown--menu').hide();

        // Handle mouseenter and mouseleave events on the dropdown hover element
        $('.dropdown--hov').on("mouseenter mouseleave", function (e) {
            e.stopPropagation();

            // Show the dropdown menu on mouseenter
            if (e.type === "mouseenter") {
                $('.dropdown--menu').stop(true, true).show();
            }
            // Hide the dropdown menu on mouseleave
            else if (e.type === "mouseleave") {
                $('.dropdown--menu').stop(true, true).hide();
            }
        });

        // Ensure the dropdown menu does not hide when hovering over it
        $('.dropdown--menu').hover(
            function (e) {
                e.stopPropagation();
                $(this).stop(true, true).show();
                $(document).find(".dropdown--hov").addClass('dropdown--hov--active active');
            },
            function (e) {
                e.stopPropagation();
                $(this).stop(true, true).hide();
                $(document).find(".dropdown--hov").removeClass('dropdown--hov--active active');
            }
        );
    });

    $(document).ready(function () {
        // Initially hide the dropdown menu
        $('.dropdown--menu-01').hide();

        // Handle mouseenter and mouseleave events on the dropdown hover element
        $('.dropdown--hov-01').on("mouseenter mouseleave", function (e) {
            e.stopPropagation();

            // Show the dropdown menu on mouseenter
            if (e.type === "mouseenter") {
                $('.dropdown--menu-01').stop(true, true).show();
            }
            // Hide the dropdown menu on mouseleave
            else if (e.type === "mouseleave") {
                $('.dropdown--menu-01').stop(true, true).hide();
            }
        });

        // Ensure the dropdown menu does not hide when hovering over it
        $('.dropdown--menu-01').hover(
            function (e) {
                e.stopPropagation();
                $(this).stop(true, true).show();
                $(document).find(".dropdown--hov-01").addClass('dropdown--hov--active active');
            },
            function (e) {
                e.stopPropagation();
                $(this).stop(true, true).hide();
                $(document).find(".dropdown--hov-01").removeClass('dropdown--hov--active active');
            }
        );

        function activeSubUrl() {
            // Get the current page URL
            var currentUrl = window.location.pathname.split("/").pop();
            // a tag link as active
            var dropdownElements = $(".dropdown--menu .link-dec a");
            // submenu link as active
            var submenuLinks = $(".submenu a");

            // Add active class to the element whose href matches the current URL
            dropdownElements.each(function () {
                if ($(this).attr('href') === currentUrl) {
                    $(this).addClass('active');
                }
            });

            submenuLinks.each(function () {
                if ($(this).attr('href') === currentUrl) {
                    $(this).addClass('active');
                }
            });
        }

        activeSubUrl();

        // parent dropdown active
        $('.dropbtn1').each(function () {
            const $dropbtn1 = $(this);
            const $dropdownContent1 = $dropbtn1.next('.dropdown-content1');

            if ($dropdownContent1.find('a.active').length) {
                $dropbtn1.addClass('active');
            }
        });

        $('.dropdown-toggle').each(function () {
            const $dropToggle = $(this);
            const $dropbtnEle = $dropToggle.next('.dropdown-menu');
            if ($dropbtnEle.find('.dropbtn1.active').length) {
                $dropToggle.addClass('active');
            }
        });

        var svgColorToBoxShadowColor = {
            "req-gather.svg": "rgb(197 181 253)",
            "desingFrame.svg": "rgb(195 232 249)",
            "prototype-demo.svg": "rgb(240 132 79)",
            "cac.svg": "rgb(241 219 144)",
            "dev.svg": "rgb(247 212 234)",
            "deploy.svg": "rgb(207 233 199)",
            "sam.svg": "rgb(227 148 255)",
            "seo.svg": "rgb(193 201 49)"
        };

        $(".hov-box").hover(
            function () {
                // Mouse enter
                var svgImageSrc = $(this).find(".svgImage").attr("src").split('/').pop();
                var boxShadowColor = svgColorToBoxShadowColor[svgImageSrc];
                if (boxShadowColor) {
                    $(this).css("box-shadow", `9px 9px 0px ${boxShadowColor}`);
                }
            }, function () {
                // Mouse leave
                $(this).css("box-shadow", "none");
            }
        );
        document.addEventListener('keydown', function (e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault();
                alert('Saving this page is disabled.');
            }
        });
        var currentUrl = window.location.href;
            var pageTitle = $('title').text(); // Dynamically get the page title
            var pageDescription = "Skyfinch is a leading IT company specializing in both service-based and product-based solutions. Our expertise spans across software development, IT consulting, and innovative product creation, ensuring comprehensive solutions for businesses worldwide."; // You can dynamically set this too
            var imageUrl = "./img/cover--image.png"; // Update this as needed

            $('head').append(`
                <meta property="og:title" content="${pageTitle}">
                <meta property="og:description" content="${pageDescription}">
                <meta property="og:image" content="${imageUrl}">
                <meta property="og:url" content="${currentUrl}">
                <meta property="og:type" content="website">
                <meta name="twitter:card" content="summary_large_image">
                <meta name="twitter:title" content="${pageTitle}">
                <meta name="twitter:description" content="${pageDescription}">
                <meta name="twitter:image" content="${imageUrl}">
            `);
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
                hamburger.addEventListener("click", function (event) {
                    // Prevent the click event from propagating to the document
                    event.stopPropagation();
                    // Toggle the "is-active" class
                    this.classList.toggle("is-active");
                    document.querySelector('.vw-nav .navbar').classList.toggle("overflow-auto");
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