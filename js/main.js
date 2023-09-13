(function ($) {
    "use strict";

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
        }, 1000);
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

    document.addEventListener('DOMContentLoaded', function() {
        var selectElement = document.querySelector('.form-select');
        var tabContent = document.querySelectorAll('.tab-pane');
      
        selectElement.addEventListener('change', function() {
          var selectedValue = this.value;
      
          tabContent.forEach(function(tab) {
            tab.classList.remove('show', 'active');
          });
      
          var selectedTab = document.getElementById(selectedValue);
      
          if (selectedTab) {
            selectedTab.classList.add('show', 'active');
          }
        });
      });
      
    //////////////////////////////////////////////////////////////////////////////////////////////////

    //<!-- Chat BOX JS Start -->


    const chatInput = document.querySelector(".chat-input textarea");
    const sendChatBtn = document.querySelector(".chat-input span");
    const chatbox = document.querySelector(".chatbox");
    const chatbotToggler = document.querySelector(".chatbot-toggler");


    let userMessage;

    const responses = [
        "How can I help you?Type:'Help'",
        "Please ask me something else.Type:'Help'",
        "I'm still learning. Can you be more specific?",
        "Tell me more about that!",
        "can you please wait...?Type:'Help'",
        "I'm your friend! feel free ask me...",
        "If you need any help?Type:'Help'"
    ];



    const createChatLi = (message, className) => {
        // Create a chat <li> element with passed message and className
        const chatli = document.createElement("li");
        chatli.classList.add("chat", className);
        let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">🤖</span><p>${message}</p>`;
        chatli.innerHTML = chatContent;
        return chatli;
    }

    const getRandomResponse = () => {
        const randomIndex = Math.floor(Math.random() * responses.length);
        return responses[randomIndex];
    }



    const handleChat = () => {
        userMessage = chatInput.value.trim();
        // console.log(userMessage);
        if (!userMessage) return;

        // Append the user's message to the chatbox 
        chatbox.appendChild(createChatLi(userMessage, "outgoing"));
        chatbox.scrollTo(0, chatbox.scrollHeight);

        setTimeout(() => {
            let botResponse;
            if ((userMessage.toLowerCase() === "hi") || (userMessage.toLowerCase() === "hi skyfinch")) {
                botResponse = "Hi 🖐 Nice to meet you.";
            }
            else if (userMessage.toLowerCase() === "hello") {
                botResponse = "Hello! Nice to meet you.";
            }
            else if ((userMessage.toLowerCase() === "good morning") || (userMessage.toLowerCase() === "gm") || (userMessage.toLowerCase() === "gud morng")) {
                botResponse = "Good Morning Have a Nice day!";
            }
            else if ((userMessage.toLowerCase() === "good afternoon") || (userMessage.toLowerCase() === "ga") || (userMessage.toLowerCase() === "gud noon")) {
                botResponse = "Good afternoon Have a great day!";
            }
            else if ((userMessage.toLowerCase() === "good evening") || (userMessage.toLowerCase() === "ge") || (userMessage.toLowerCase() === "gud eve")) {
                botResponse = "Good Evening Have a pleasent day!";
            }
            else if ((userMessage.toLowerCase() === "thank you") || (userMessage.toLowerCase() === "thankyou") || (userMessage.toLowerCase() === "tq")) {
                botResponse = "I'm doing great, thank you!";
            }
            else if (userMessage.toLowerCase() === "welcome") {
                botResponse = "Thats's intresting. It's my pleasure.";
            }
            else if ((userMessage.toLowerCase() === "bye") || (userMessage.toLowerCase() === "ok bye") || (userMessage.toLowerCase() === "tata")) {
                botResponse = "Bye! Nice to meet you.";
            }
            else if ((userMessage.toLowerCase() === "help") || (userMessage.toLowerCase() === "hlp")) {
                botResponse = "<b>You ask me like one of this question.</b> <br>✔ Who is <u>CEO</u>? <br>✔ In Which <u>year</u> skyfinch established? <br>✔ What are the <u>Service</u> in skyfinch?<br>✔ <u>Contact</u> Details?<br>";
            }
            else if ((userMessage.toLowerCase() === 'who is ceo?') || (userMessage.toLowerCase() === 'who is ceo') || (userMessage.toLowerCase() === 'company ceo?') || (userMessage.toLowerCase() === 'ceo?') || (userMessage.toLowerCase() === 'ceo')) {
                botResponse = "<b>Kabilan Sokkalingam - Founder</b> <br>Kabilan Sokkalingam - Founder, Managing Partner, CEO & President.";
            }
            else if ((userMessage.toLowerCase() === 'year') || (userMessage.toLowerCase() === 'what is your age?') || (userMessage.toLowerCase() === 'your age?') || (userMessage.toLowerCase() === 'skyfinch starting year?') || (userMessage.toLowerCase() === 'in which year skyfinch established') || (userMessage.toLowerCase() === 'in which year skyfinch established?')) {
                botResponse = "business professionals having more than 20 years of experience in various business domains. Since its establishment in the year 2004 at Puducherry, India";
            }
            else if ((userMessage.toLowerCase() === 'what are the service in skyfinch?') || (userMessage.toLowerCase() === 'service') || (userMessage.toLowerCase() === 'service?')) {
                botResponse = "🔹 Software development <br>🔹 Web Application <br>🔹 Mobile Application development<br>🔹 Email<br>🔹 SMS <br>🔹 Payment Integration.</br>";
            }
            else if ((userMessage.toLowerCase() === 'contact') || (userMessage.toLowerCase() === "contact details?") || (userMessage.toLowerCase() === "contact details") || (userMessage.toLowerCase() === "how can i contact you?")) {
                botResponse = "<b>Address :</b> No.5, Republic Street, Reddiarpalayam, Puducherry -605 010, India. <br> <b> Ph :</b> +91 413-4207 333, 94425 90611, 94434 83240, 94899 18298 <br> <b>E-mail :</b> info@skyfinch.com";
            }
            else {
                botResponse = getRandomResponse();
            }

            // message thinking while waiting for the response
            const incomingChatLi = createChatLi(botResponse, "incoming");
            chatbox.appendChild(incomingChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 2000);

        // Clear the input after sending the message
        chatInput.value = '';

    }

    // Function to handle Enter key press
    const handleKeyPress = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            handleChat();
        }
    }

    sendChatBtn.addEventListener("click", handleChat)

    chatbotToggler.addEventListener("click", function () {
        document.body.classList.toggle("show-chatbot");
    });


    chatInput.addEventListener("keypress", handleKeyPress);


    //<!-- Chat BOX JS End -->
})(jQuery);