document.addEventListener('DOMContentLoaded', function () {
    //<!-- Chat BOX JS Start -->
    const chatInput = document.querySelector(".chat-input textarea");
    const sendChatBtn = document.querySelector(".chat-input span");
    const chatbox = document.querySelector(".chatbox");
    const chatbotToggler = document.querySelector(".chatbot-toggler");
    const chatbotCloser = document.querySelector(".chatbot header span");

    let userMessage;
    const responses = [
        "How can I help you?",
        "Please ask me something else! or Type:'Help'",
        "I'm still learning. Can you be more specific?",
        "Tell me more about that!",
        "We will response you soon!",
        "can you please wait...? or Type:'Help'",
        "I'm your friend! feel free ask me...",
        "If you need any help? Type:'Help'"
    ];
    const createChatLi = (message, className) => {
        // Create a chat <li> element with passed message and className
        const chatli = document.createElement("li");
        chatli.classList.add("chat", className);
        let chatContent = className === "outgoing" ? `<p class="animated zoomIn">${message}</p>` : `<span class="material-symbols-outlined animated zoomInLeft">🤖</span><p class="animated zoomInLeft">${message}</p>`;
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
        if (!userMessage) return
        // Append the user's message to the chatbox
        chatbox.appendChild(createChatLi(userMessage, "outgoing"));
        chatbox.scrollTo(0, chatbox.scrollHeight);
        setTimeout(() => {
            let botResponse;
            if ((userMessage.toLowerCase() === "hi") || (userMessage.toLowerCase() === "hi skyfinch")) {
                botResponse = "Hi 👋 Nice to meet you.";
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
                botResponse = "Good Evening Have a pleasant day!";
            }
            else if ((userMessage.toLowerCase() === "thank you") || (userMessage.toLowerCase() === "thankyou") || (userMessage.toLowerCase() === "tq")) {
                botResponse = "I'm doing great, thank you!";
            }
            else if (userMessage.toLowerCase() === "welcome") {
                botResponse = "Thats's interesting. It's my pleasure.";
            }
            else if ((userMessage.toLowerCase() === "bye") || (userMessage.toLowerCase() === "ok bye") || (userMessage.toLowerCase() === "tata")) {
                botResponse = "Bye! Nice to meet you.";
            }
            else if ((userMessage.toLowerCase() === "help") || (userMessage.toLowerCase() === "hlp")) {
                botResponse = '<b>You ask me like one of this question.</b> <br>✔ Who is <u>CEO</u>? <br>✔ In Which <u>year</u> skyfinch established? <br>✔ What are the <u>Service</u> in skyfinch?<br>✔ <u>Contact</u> Details?<br>';
            }
            else if ((userMessage.toLowerCase() === 'who is ceo?') || (userMessage.toLowerCase() === 'who is ceo') || (userMessage.toLowerCase() === 'company ceo?') || (userMessage.toLowerCase() === 'ceo?') || (userMessage.toLowerCase() === 'ceo')) {
                botResponse = "<b>Mr. S. Kabilan Sokkalingam - Founder</b> <br>Mr. S. Kabilan Sokkalingam - Founder, Managing Partner, CEO & President.";
            }
            else if ((userMessage.toLowerCase() === 'year') || (userMessage.toLowerCase() === 'what is your age?') || (userMessage.toLowerCase() === 'your age?') || (userMessage.toLowerCase() === 'skyfinch starting year?') || (userMessage.toLowerCase() === 'in which year skyfinch established') || (userMessage.toLowerCase() === 'in which year skyfinch established?')) {
                botResponse = "Business professionals having more than 20 years of experience in various business domains. Since it's establishment in the year 2004 at Puducherry, India";
            }
            else if ((userMessage.toLowerCase() === 'what are the service in skyfinch?') || (userMessage.toLowerCase() === 'service') || (userMessage.toLowerCase() === 'service?')) {
                botResponse = "📌 Software development <br>📌 Web Development <br>📌 Mobile Application development<br>📌 Automation Services<br>📌 Integration Services <br>📌 ML/AI and Big Data Solutions</br>";
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
        }, 1500);
        // Clear the input after sending the message
        chatInput.value = '';
    }
    // Add this function to check if the click is outside the chatbox
    const handleClickOutsideChatbot = (event) => {
        const isTextarea = event.target === chatInput;
        const isHeader = event.target.closest('header');
        if (!chatbox.contains(event.target) && !chatbotToggler.contains(event.target) && !isTextarea && !isHeader) {
            document.body.classList.remove("show-chatbot");
        }
    }
    // Function to handle Enter key press
    const handleKeyPress = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            handleChat();
        }
    }
    var isTogglerClick = false;
    function msgTextRun() {
        if (isTogglerClick === false) {
            var showText = function (target, message, index, interval) {
                if (index < message.length) {
                    $(target).append(message[index++]);
                    if (message[index - 1] === '\n') {
                        $(target).append('<br>');
                    }
                    setTimeout(function () { showText(target, message, index, interval); }, interval);
                }
            }
            $(function () {
                var message = "Hi I'm SkyFinch👋\nIf you need any help?\nType: 'Help'...";
                showText(".textRun", message, 0, 100);
            });
        }
        isTogglerClick = true;
    }

    function applyScroll() {
        $.scrollify({});
    }

    // Function to enable Scrollify
    function enableScrollify() {
        $.scrollify.enable();
    }

    // Function to disable Scrollify
    function disableScrollify() {
        $.scrollify.disable();
    }

    // Call applyScroll function to initialize Scrollify
    applyScroll();

    sendChatBtn.addEventListener("click", handleChat)
    chatInput.addEventListener("keypress", handleKeyPress);
    // document.addEventListener("click", handleClickOutsideChatbot);
    chatbotToggler.addEventListener("click", function () {
        document.body.classList.toggle("show-chatbot");
        msgTextRun();
        if ($('body').hasClass('show-chatbot')) {
            $(".chat-input textarea").focus();
            disableScrollify();
            $('.chatbox').css('overflow-y', 'auto');
            $('body').css('overflow', 'hidden');
        } else {
            enableScrollify();
            $('body').css('overflow', 'auto');
        }
    });
    chatbotCloser.addEventListener("click", function () {
        document.body.classList.remove("show-chatbot");
        enableScrollify();
        $('.chatbox').css('overflow-y', 'auto');
        $('body').css('overflow', 'auto');
    });


    //<!-- Chat BOX JS End -->
});
