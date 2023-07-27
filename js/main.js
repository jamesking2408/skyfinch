(function($) {
    "use strict";

    // Spinner
    // var spinner = function() {
    //     setTimeout(function() {
    //         if ($('#spinner').length > 0) {
    //             $('#spinner').removeClass('show');
    //         }
    //     }, 3);
    // };
    // spinner();  

    // New spinner





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

//////////////////////////////////////////////////////////////////////////////////////////////////

//<!-- Chat BOX Design Start -->
window.onload = () => {
    document.getElementById("txt-cursor").focus;
}

const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");


let userMessage;

const responses = [
    "How can I help you?",
    "I'm doing great, thank you!",
    "Please ask me something else.",
    "I'm still learning. Can you be more specific?",
    "Tell me more about that!",
    "can you please wait...?",
    "I'm your friend! feel free ask me..."
  ];



const createChatLi = (message, className) =>{
    // Create a chat <li> element with passed message and className
    const chatli = document.createElement("li");
    chatli.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>`:`<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatli.innerHTML = chatContent;
    return chatli;
}

const getRandomResponse = () => {
    const randomIndex = Math.floor(Math.random()*responses.length);
    return responses[randomIndex];
}



const handleChat = () =>{
    userMessage = chatInput.value.trim();
    // console.log(userMessage);
    if(!userMessage) return;

    // Append the user's message to the chatbox 
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        let botResponse ;
        if((userMessage.toLowerCase() === "hi") || (userMessage.toLowerCase() === "hi skyfinch") ){
        botResponse = "Hi 🖐 Nice to meet you.";
        }
        else if(userMessage.toLowerCase() === "hello"){
        botResponse = "Hello! Nice to meet you.";
        }
        else if(userMessage.toLowerCase() === "good morning"){
        botResponse = "Good Morning Have a Nice day!";
        }
        else if(userMessage.toLowerCase() === "thank you"){
            botResponse = "I'm doing great, thank you!";
        }
        else if(userMessage.toLowerCase() === "welcome"){
            botResponse = "Thats's intresting. It's my pleasure.";
        }
        else if(userMessage.toLowerCase() === "bye"){
        botResponse = "Bye! Nice to meet you.";
        }
        else if(userMessage.toLowerCase() === "help"){
        botResponse = "<b>You may have ask me like one of the question.</b> <br>1.Who is CEO? <br>2.In Which year skyfinch established? <br>3.What are the Service?<br>4.Contact Details?<br>";
        }
        else if((userMessage.toLowerCase() === 'who is ceo?')||(userMessage.toLowerCase() === 'who is ceo')|| (userMessage.toLowerCase() === 'company ceo?')||(userMessage.toLowerCase() === 'ceo?')||(userMessage.toLowerCase() === 'ceo')){
            botResponse = "<b>Kabilan Sokkalingam - Founder</b> <br>Kabilan Sokkalingam - Founder, Managing Partner, CEO & President.";
            }
        else if((userMessage.toLowerCase() === 'what is your age?')|| (userMessage.toLowerCase() === 'your age?')||(userMessage.toLowerCase() === 'skyfinch starting year?')||(userMessage.toLowerCase() === 'in which year skyfinch established')||(userMessage.toLowerCase() === 'in which year skyfinch established?')){
        botResponse = "business professionals having more than 20 years of experience in various business domains. Since its establishment in the year 2004 at Puducherry, India";
        }
        else if((userMessage.toLowerCase() === 'what are the service?')||(userMessage.toLowerCase() === 'service')||(userMessage.toLowerCase() === 'service?')){
        botResponse = "1. Software development <br>2. Web Application <br> 3. Mobile Application development<br>4. Email<br>5. SMS <br>6.Payment Integration.</br>";
        }
        else if((userMessage.toLowerCase() === "contact details?")||(userMessage.toLowerCase() === "contact details")||(userMessage.toLowerCase() === "how can i contact you?")){
            botResponse = "<b>Address :</b> No.5, Republic Street, Reddiarpalayam, Puducherry -605 010, India. <br> <b> Ph :</b> +91 413-4207 333, 94425 90611, 94434 83240, 94899 18298 <br> <b>E-mail :</b> info@skyfinch.com";
            }
        else{
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

chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

chatInput.addEventListener("keypress", handleKeyPress);



})(jQuery);