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
        // $('body').on('copy', function (e) {
        //     e.preventDefault();
        //     var defaultText = "!OOPS, you can not copy and paste.";
        //     var clipboardData = e.originalEvent.clipboardData || window.clipboardData;
        //     if (clipboardData) {
        //         clipboardData.setData('text', defaultText);
        //     } else {
        //         window.clipboardData.setData('Text', defaultText);
        //     }
        // });
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
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl, {
            trigger: 'hover',
            container: 'body'
        });
    });
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
            $(this).find('.tooltip-content').fadeIn();
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
        if (screen.width < 1200) {
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

    let currentUrl = window.location.pathname.split("/").pop();
    var currentPageUrl = document.querySelector(".nav-item.nav-link.active");
    var currentSubPageUrl = currentPageUrl ? currentPageUrl.getAttribute('href') : '';

    function applyScroll() {
        $.scrollify({
            section: ".scroll",
            sectionName: "section-name",
            interstitialSection: "",
            easing: "easeOutExpo",
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
                if (currentSubPageUrl === 'about.html' || currentUrl === 'about.html') {
                    if (index === 2) {
                        $('.count').counterUp({
                            delay: 10,
                            time: 2000
                        });
                    }
                } else if (currentSubPageUrl === 'index.html') {
                    if (index === 5) {
                        $('.count').counterUp({
                            delay: 10,
                            time: 2000
                        });
                    } else if (index === 8) {
                        var validator = $("#cus_form").validate();
                        validator.resetForm();
                    }
                } else if (currentSubPageUrl === 'service.html' || currentUrl === 'service.html') {
                    if (index === 2) {
                        const validateService = $('#callus').validate();
                        validateService.resetForm();
                    }
                } else if (currentSubPageUrl === 'contact.html' || currentSubPageUrl === 'contactUs.html' || currentUrl === 'contact.html' || currentUrl === 'contactUs.html') {
                    if (index === 1 || index === 0) {
                        const validateContact = $('#contactus').validate();
                        validateContact.resetForm();
                    }
                } else if (currentSubPageUrl === 'productEnquiry.html' || currentUrl === 'productEnquiry.html') {
                    if (index === 1) {
                        const validateEnq = $('#cus_Form').validate();
                        validateEnq.resetForm();
                    }
                }
            }
        });
    }

    // Call applyScroll function to initialize Scrollify
    applyScroll();

    function screenCheck() {
        var deviceAgent = navigator.userAgent.toLowerCase();
        var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
        if (agentID || $(window).width() < 1200) {
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
        $('.page-top, .back-to-top').click(function () {
            // $('html, body').animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
            $('html, body').scrollTop(0);
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
            btnText.html("Read more <span><i class='fa fa-arrow-right'></i></span>");
            moreText.css("display", "none");
        } else {
            dots.css("display", "none");
            btnText.html("Read less <span><i class='fa fa-arrow-right'></i></span>");
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
            $('.vw-nav').addClass('fixed-top animated slideInDown faster');
            $('.vw-nav-full').removeClass('animated slideInDown faster');
            $(document).find('.dropdown--menu, .dropdown--menu-01').css("top", "65px");
        } else {
            $('.vw-nav').removeClass('fixed-top animated slideInDown faster');
            $('.vw-nav-full').addClass('animated slideInDown faster');
            $(document).find('.dropdown--menu, .dropdown--menu-01').css("top", "100px");
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        $.ajax({
            url: 'preloads.html',
            async: false,
            success: function (data) {
                $('head').append(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error loading preloads:', textStatus, errorThrown);
            }
        });

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
    });

    $(document).ready(function () {
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
            "dev.svg": "rgb(255 155 200)",
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
        $('head').append(`
            <meta property="og:url" content="${currentUrl}">
        `);

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

            function toggleDropdownContent(e, content) {
                e.preventDefault();
                e.stopPropagation();
                content.style.display = (content.style.display === 'block') ? 'none' : 'block';
            }

            if (solutionsDropdown) {
                solutionsDropdown.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
                    dropdownMenu1.style.display = 'none';
                    webContent.style.display = 'none';
                    applicationContent.style.display = 'none';
                });
            }

            if (solutionsDropdown1) {
                solutionsDropdown1.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    dropdownMenu1.style.display = (dropdownMenu1.style.display === 'block') ? 'none' : 'block';
                    dropdownMenu.style.display = 'none';
                    webContent.style.display = 'none';
                    applicationContent.style.display = 'none';
                });
            }

            if (applicationBtn) {
                applicationBtn.addEventListener('click', function (e) {
                    toggleDropdownContent(e, applicationContent);
                    webContent.style.display = 'none';
                });
            }

            if (webBtn) {
                webBtn.addEventListener('click', function (e) {
                    toggleDropdownContent(e, webContent);
                    applicationContent.style.display = 'none';
                });
            }

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
                        event.stopPropagation();
                        // Toggle the "is-active" class
                        this.classList.toggle("is-active");
                        // const element = document.querySelector('.vw-nav .navbar');
                        // const hasElement = document.querySelector('.vw-nav');
                        // if (element.classList.contains('overflow-y-auto') && element.classList.contains('overflow-x-hidden')) {
                        //     element.classList.remove('overflow-y-auto', 'overflow-x-hidden');
                        //     hasElement.classList.remove('pb-5');
                        // } else {
                        //     element.classList.add('overflow-y-auto', 'overflow-x-hidden');
                        //     hasElement.classList.add('pb-5');
                        // }
                        const element = document.querySelector('.vw-nav .navbar');
                        const hasElement = document.querySelector('.vw-nav');
                        const navbarCollapse = document.querySelector('#navbarCollapse');

                        function toggleClassesBasedOnWidth() {
                            // Get the current viewport width
                            const viewportWidth = window.innerWidth;

                            // Check if the viewport width is less than or equal to 992px
                            if (viewportWidth <= 992) {
                                if (element.classList.contains('overflow-y-auto') && element.classList.contains('overflow-x-hidden')) {
                                    element.classList.remove('overflow-y-auto', 'overflow-x-hidden');
                                    hasElement.classList.remove('pb-5');
                                } else {
                                    element.classList.add('overflow-y-auto', 'overflow-x-hidden');
                                    hasElement.classList.add('pb-5');
                                }
                            } else {
                                // Optionally, handle the case for viewport width greater than 992px
                                element.classList.remove('overflow-y-auto', 'overflow-x-hidden');
                                hasElement.classList.remove('pb-5');
                                navbarCollapse.classList.remove('show');
                            }
                        }

                        // Initial check
                        toggleClassesBasedOnWidth();

                        // Optional: Add an event listener to handle changes in viewport width
                        window.addEventListener('resize', toggleClassesBasedOnWidth);
                        dropdownMenu1.style.display = 'none';
                        dropdownMenu.style.display = 'none';
                        webContent.style.display = 'none';
                        applicationContent.style.display = 'none';
                    }, false);
                });
            }
        }
        // Initialize dropdown menu
        DropdownMenuResponsive();
        // Select the element using jQuery
        var $elem = $('.mapFull iframe');

        // Function to request fullscreen mode
        function openFullscreen() {
            if ($elem[0].requestFullscreen) {
                $elem[0].requestFullscreen();
            } else if ($elem[0].webkitRequestFullscreen) { /* Safari */
                $elem[0].webkitRequestFullscreen();
            } else if ($elem[0].mozRequestFullScreen) { /* Firefox */
                $elem[0].mozRequestFullScreen();
            } else if ($elem[0].msRequestFullscreen) { /* IE11 */
                $elem[0].msRequestFullscreen();
            }
        }

        // Function to handle click or touch events
        function handleClickOrTouch(event) {
            event.preventDefault(); // Prevent default behavior for touch events
            openFullscreen();
        }

        // Bind the click and touchstart events to the button
        $('#fullscreenBtn').on('click touchstart', handleClickOrTouch);

        function redirectToGmail(event) {
            event.preventDefault();
            const composeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@skyfinch.com';
            const signInUrl = 'https://accounts.google.com/ServiceLogin?continue=' + encodeURIComponent(composeUrl);
            window.open(signInUrl, '_blank');
        }
        function setupRedirects() {
            const anchors = document.querySelectorAll('a[href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@skyfinch.com"]');

            anchors.forEach(anchor => {
                anchor.addEventListener('click', redirectToGmail);
            });
        }
        setupRedirects();

        // Full force to reload
        if (!localStorage.getItem('reloaded')) {
            localStorage.setItem('reloaded', 'true');
            window.location.reload();
        } else {
            localStorage.removeItem('reloaded');
        }
    });
})(jQuery);
//  Product Enquiry form automatically fill plan price
function choosePlan(planName, planPrice) {
    localStorage.setItem('selectedPlanName', planName);
    localStorage.setItem('selectedPlanPrice', planPrice);
}