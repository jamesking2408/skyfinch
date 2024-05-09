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
    // const createChatLi = (message, className) => {
    //     // Create a chat <li> element with passed message and className
    //     const chatli = document.createElement("li");
    //     chatli.classList.add("chat", className);
    //     let chatContent = className === "outgoing" ? `<p class="animated zoomIn">${message}</p>` : `<span class="material-symbols-outlined animated zoomInLeft">🤖</span><p class="animated zoomInLeft">${message}</p>`;
    //     chatli.innerHTML = chatContent;
    //     return chatli;
    // }

    const createChatLi = (message, className) => {
        // Create a chat <li> element with passed message and className
        const chatli = document.createElement("li");
        chatli.classList.add("chat", className);
        chatli.dataset.time = Date.now(); // Store the current time in dataset for calculating time ago
        let chatContent = className === "outgoing" ? `<p class="animated zoomIn">${message}</p>` : `<span class="material-symbols-outlined animated zoomInLeft">🤖</span><p class="animated zoomInLeft">${message}</p>`;
        chatli.innerHTML = chatContent;

        // Add timestamp for outgoing messages
        if ((className === "outgoing") || (className === "incoming")) {
            const timestampSpan = document.createElement("span");
            timestampSpan.classList.add("timestamp");
            timestampSpan.innerText = "just now";

            chatli.querySelector("p").appendChild(timestampSpan);

            // Update timestamp text dynamically
            const updateTimestamp = () => {
                const timeAgo = getTimeAgo(parseInt(chatli.dataset.time));
                timestampSpan.innerText = timeAgo;
            };

            // Update timestamp immediately and every second
            updateTimestamp();
            setInterval(updateTimestamp, 1000);
        }

        return chatli;
    };

    // Function to calculate time ago
    const getTimeAgo = (sentTime) => {
        const now = Date.now();
        const diff = Math.floor((now - sentTime) / 1000);
        if (diff < 60) {
            return "just now";
        } else if (diff < 3600) {
            const minutes = Math.floor(diff / 60);
            return minutes === 1 ? "1 min ago" : " " + minutes + " mins ago";
        } else if (diff < 86400) {
            const hours = Math.floor(diff / 3600);
            return hours === 1 ? "1 hr ago" : " " + hours + " hrs ago";
        } else {
            const days = Math.floor(diff / 86400);
            return days === 1 ? "1 day ago" : " " + days + " days ago";
        }
    };

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
                botResponse = "Hi <span>&#128075</span> Nice to meet you.";
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
            else if ((userMessage.toLowerCase() === "help") || (userMessage.toLowerCase() === "hlp") || (userMessage.toLowerCase() === "help me") || (userMessage.toLowerCase() === "please") || (userMessage.toLowerCase() === "please help me")) {
                botResponse = '<b>You ask me like one of this question.</b> <br>✔ Who is <u>CEO</u>? <br>✔ In Which <u>year</u> skyfinch established? <br>✔ What are the <u>Service</u> in skyfinch?<br>✔ <u>Contact</u> Details?<br>✔ <u>All Pages</u> Lists?<br>';
            }
            else if ((userMessage.toLowerCase() === 'who is ceo?') || (userMessage.toLowerCase() === 'who is ceo') || (userMessage.toLowerCase() === 'company ceo?') || (userMessage.toLowerCase() === 'ceo?') || (userMessage.toLowerCase() === 'ceo')) {
                botResponse = "<b>Mr. S. Kabilan Sokkalingam - Founder</b> <br>Mr. S. Kabilan Sokkalingam - Founder, Managing Partner, CEO & President.";
            }
            else if ((userMessage.toLowerCase() === 'year') || (userMessage.toLowerCase() === 'what is your age?') || (userMessage.toLowerCase() === 'your age?') || (userMessage.toLowerCase() === 'skyfinch starting year?') || (userMessage.toLowerCase() === 'in which year skyfinch established') || (userMessage.toLowerCase() === 'in which year skyfinch established?')) {
                botResponse = "Business professionals having more than 20 years of experience in various business domains. Since it's establishment in the year 2004 at Puducherry, India";
            }
            else if ((userMessage.toLowerCase() === 'what are the service in skyfinch?') || (userMessage.toLowerCase() === 'service') || (userMessage.toLowerCase() === 'service?')) {
                botResponse = 'Here Redirect to <a href="service.html"><em>Service</em></a> page available, Click it!<br>📌 Software development <br>📌 Web Development <br>📌 Mobile Application development<br>📌 Automation Services<br>📌 Integration Services <br>📌 ML/AI and Big Data Solutions</br>';
            }
            else if ((userMessage.toLowerCase() === 'contact') || (userMessage.toLowerCase() === "contact details?") || (userMessage.toLowerCase() === "contact details") || (userMessage.toLowerCase() === "how can i contact you?")) {
                botResponse = "<b>Address :</b> No.5, Republic Street, Reddiarpalayam, Puducherry -605 010, India. <br> <b> Ph :</b> +91 413-4207 333, 94425 90611, 94434 83240, 94899 18298 <br> <b>E-mail :</b> info@skyfinch.com";
            }
            else if (userMessage.toLowerCase() === 'home') {
                botResponse = 'Here Redirect to <a href="index.html"><em>Home</em></a> page available, Click it!';
            }
            else if (userMessage.toLowerCase() === 'contact') {
                botResponse = 'Here Redirect to <a href="contact.html"><em>Contact</em></a> page available, Click it!';
            }
            else if (userMessage.toLowerCase() === 'about') {
                botResponse = 'Here Redirect to <a href="about.html"><em>About</em></a> page available, Click it!';
            }
            else if (userMessage.toLowerCase() === 'profile') {
                botResponse = 'Here Redirect to <a href="profile.html"><em>Profile</em></a> page available, Click it!';
            }
            else if (userMessage.toLowerCase() === 'product') {
                botResponse = 'Here Redirect to <a href="product.html"><b>Products</b></a> page available, Click it!';
            }
            else if ((userMessage.toLowerCase() === 'all pages') || (userMessage.toLowerCase() === 'all')) {
                botResponse = 'Here Redirect to All pages available, Click it!<br> <a href="index.html"><b class="pagesLink">Home</b></a> <a href="service.html"><b class="pagesLink">Service</b></a> <a href="about.html"><b class="pagesLink">About</b></a> <a href="profile.html"><b class="pagesLink">Profile</b></a> <a href="contact.html"><b class="pagesLink">Contact</b></a> <a href="sales.html"><b class="pagesLink">POS</b></a> <a href="hms.html"><b class="pagesLink">Hotel</b></a> <a href="rms.html"><b class="pagesLink">Restaurant</b></a> <a href="ssfinch.html"><b class="pagesLink">Smart-Skyfinch</b></a> <a href="vms.html"><b class="pagesLink">Visitor`s</b></a> <a href="crm.html"><b class="pagesLink">CRM</b></a> <a href="ctm.html"><b class="pagesLink">Travel</b></a> <a href="ems.html"><b class="pagesLink">Event</b></a> <a href="ems.html"><b class="pagesLink">Fleet</b></a> <a href="pms.html"><b class="pagesLink">Payroll</b></a> <a href="sands.html"><b class="pagesLink">Sales & Service</b></a>';
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
        const chatInputArea = document.querySelector('.chat-input');
        const pageTopArea = document.querySelector('#sub_top');

        // profile page skyfinch technologies
        const isCloudLi = document.querySelector(".cloud");

        // Search bar
        const isSearchBar = document.querySelector("#exampleModal");
        const isNavbar = document.querySelector(".navbar");
        if ($('body').hasClass('show-chatbot')) {
            if (!chatbox.contains(event.target) && !chatbotToggler.contains(event.target) && !isTextarea && !isHeader && !chatInputArea.contains(event.target) && !pageTopArea.contains(event.target) && !isCloudLi.contains(event.target) && !isSearchBar.contains(event.target) && !isNavbar.contains(event.target)) {
                document.body.classList.remove("show-chatbot");
                enableScrollify();
            }
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
                    $(target).html($(target).html() + message[index++]);
                    if (message[index - 1] === '\t') {
                        $(target).append('<span>&#128075</span>');
                    }
                    if (message[index - 1] === '\n') {
                        $(target).append('<br>');
                    }
                    setTimeout(function () { showText(target, message, index, interval); }, interval);
                }
            }
            $(function () {
                var message = "Hi I'm SkyFinch\t\nIf you need any help?\nType: 'Help'...";
                showText(".textRun", message, 0, 80);
            });
            const defChat = document.querySelector(".chat.incoming");
            if ("incoming" === "incoming") {
                const timestampSpan = document.createElement("span");
                timestampSpan.classList.add("timestamp");
                timestampSpan.dataset.time = Date.now();
                timestampSpan.textContent = "just now";
                // Update timestamp text dynamically
                insertAfter(timestampSpan, defChat);
                const updateTimestamp = () => {
                    const defTimeAgo = getTimeAgo(parseInt(timestampSpan.dataset.time));
                    timestampSpan.innerText = defTimeAgo;
                };

                function insertAfter(newNode, existingNode) {
                    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
                }

                // Update timestamp immediately and every second
                updateTimestamp();
                setInterval(updateTimestamp, 1000);
            }
        }
        isTogglerClick = true;
    }

    function applyScroll() {
        $.scrollify();
    }
    // Function to enable Scrollify
    function enableScrollify() {
        $.scrollify.enable();
        $('.chatbox').css('overflow-y', 'auto');
        $('body').css('overflow', 'auto');
    }
    // Function to disable Scrollify
    function disableScrollify() {
        $.scrollify.disable();
        $('.chatbox').css('overflow-y', 'auto');
        $('body').css('overflow', 'hidden');
    }
    // Call applyScroll function to initialize Scrollify
    // applyScroll();
    document.addEventListener("click", handleClickOutsideChatbot);
    sendChatBtn.addEventListener("click", function () {
        handleChat();
        // $(".chat-input textarea").focus();
    });
    chatInput.addEventListener("keypress", handleKeyPress);
    chatbotToggler.addEventListener("click", function () {
        document.body.classList.toggle("show-chatbot");
        msgTextRun();
        if ($('body').hasClass('show-chatbot')) {
            $(".chat-input textarea").focus();
        }
        if ($('body').hasClass('show-chatbot')) {
            $(".chat-input textarea").focus();
            disableScrollify();
        } else {
            enableScrollify();
        }
    });
    chatbotCloser.addEventListener("click", function () {
        document.body.classList.remove("show-chatbot");
        enableScrollify();
    });
    //<!-- Chat BOX JS End -->
});