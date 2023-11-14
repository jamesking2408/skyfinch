document.addEventListener('DOMContentLoaded', function () {
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

    // Add this function to check if the click is outside the chatbox
    const handleClickOutsideChatbox = (event) => {
        if (!chatbox.contains(event.target) && !chatbotToggler.contains(event.target)) {
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

    sendChatBtn.addEventListener("click", handleChat)

    // Add an event listener to the document to handle clicks
    document.addEventListener("click", handleClickOutsideChatbox);

    chatbotToggler.addEventListener("click", function () {
        document.body.classList.toggle("show-chatbot");
    });

    chatInput.addEventListener("keypress", handleKeyPress);

    //<!-- Chat BOX JS End -->

    //<!-- Contact Button Start -->

    document.querySelector("#hide_form").addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent the click event from propagating to the document body
        document.querySelector("#myForm").style.display = "none";
        document.querySelector("#show_form").style.display = "block";
    });

    document.body.addEventListener("click", function () {
        document.querySelector("#myForm").style.display = "none";
        document.querySelector("#show_form").style.display = "block";
    });

    document.querySelector("#show_form").addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent the click event from propagating to the document body
        document.open_form.reset();
        document.querySelector("#myForm").style.display = "block";
    });

    //<!-- Contact Button End -->


});


