var num_filter = /^[0-9]{10}$/;
var mail_filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function prodEnqiry() {
    const cus_name = document.querySelector("#cus-name").value;
    const num = document.querySelector("#cus-number").value;
    const mail = document.querySelector("#cus-mail").value;
    const campy = document.querySelector("#cus-company").value;
    const job = document.querySelector("#cus-job").value;
    const cont = document.querySelector("#cus-country").value;
    const sales = document.querySelector("#cus-ss").value;
    const price = document.querySelector("#cus-price").value;
    const txt = document.querySelector("#cus-text").value;

    if ((cus_name == "") && (num == "") && (mail == "") && (campy == "") && (job == "") && (cont == "") && (sales == "") && (txt == "") && (txt.length < 5)) {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your All Fields!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#cus-name").focus();
        })
        document.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                closePopupPq();
                document.querySelector("#cus-name").focus();
            }
        });
    }
    else if (cus_name == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10p x 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Name please!!!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#cus-name").focus();
        })
        document.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                closePopupPq();
                document.querySelector("#cus-name").focus();
            }
        });
    }
    else if ((num == "") || (!num_filter.test(num))) {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Number please!!!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#cus-number").focus();
        })
        document.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                closePopupPq();
                document.querySelector("#cus-number").focus();
            }
        });
    }
    else if ((mail == "") || (!mail_filter.test(mail))) {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Mail-ID please!!!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#cus-mail").focus();
        })
        document.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                closePopupPq();
                document.querySelector("#cus-mail").focus();
            }
        });
    }
    else if (campy == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Please Fill out Company field!!!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#cus-company").focus();
        })
        document.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                closePopupPq();
                document.querySelector("#cus-company").focus();
            }
        });
    }
    else if (job == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Please Fill out Job title field!!!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#cus-job").focus();
        })
        document.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                closePopupPq();
                document.querySelector("#cus-job").focus();
            }
        });
    }
    else if (cont == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Please Fill out Country field!!!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#cus-country").focus();
        })
        document.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                closePopupPq();
                document.querySelector("#cus-country").focus();
            }
        });
    }
    else if (sales == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Please Fill out sales field!!!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#cus-ss").focus();
        })
        document.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                closePopupPq();
                document.querySelector("#cus-ss").focus();
            }
        });
    }
    else if (price == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Please Fill out plan & price field!!!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#cus-price").focus();
        })
        document.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                closePopupPq();
                document.querySelector("#cus-price").focus();
            }
        });
    }
    else if (txt == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Please Fill out Comments field!!!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#cus-text").focus();
        })
        document.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                closePopupPq();
                document.querySelector("#cus-text").focus();
            }
        });
    }
    else if (txt.length < 5) {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Please Fill out Comments field more than 10 letters!!!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#cus-text").focus();
        })
        document.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                closePopupPq();
                document.querySelector("#cus-text").focus();
            }
        });
    }
    else {
        document.querySelector(".sub-popup h2").innerHTML = "Congrats!";
        document.querySelector(".sub-popup p").innerHTML = "Your details submitted successfully. ";
        popup.classList.add("open-popup");

        document.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                closePopup1Pq();
            }
        });
        var body = "\t\t\t<h2>CUSTOMER DETAILS</h2>" +
            "\n<br> Name : " + cus_name + " " +
            "\n<br> Phone Number: " + num + " " +
            "\n<br> Mail ID: " + mail + " " +
            "\n<br> Company: " + campy + " " +
            "\n<br> Job: " + job + " " +
            "\n<br> Country: " + cont + " " +
            "\n<br> Sales: " + sales + " " +
            "\n<br> Price: " + price + " " +
            "\n<br> Project Details: " + txt;

        console.log(body);
        Email.send({
            SecureToken: "43b9e9f4-c4ca-4b5e-a846-c43c61f9f360",
            To: 'jai29112024@gmail.com',
            From: "sjkumarsri@gmail.com",
            Subject: cus_name,
            Body: body
        })
    }
}

document.querySelector(".exit").addEventListener("click", closePopupPq);
document.querySelector(".exit1").addEventListener("click", closePopup1Pq);


function closePopupPq() {
    var popup = document.querySelector(".open-popup");
    if (popup) {
        popup.classList.remove("open-popup");
    }
    document.cus_form.reset();
}

function closePopup1Pq() {
    popup1.classList.remove("open-popup");
}

document.addEventListener('DOMContentLoaded', function () {
    var selectedPlanName = localStorage.getItem('selectedPlanName');
    var selectedPlanPrice = localStorage.getItem('selectedPlanPrice');

    if (selectedPlanName && selectedPlanPrice) {
        document.querySelector('#cus-price').value = selectedPlanPrice;
        document.querySelector('#cus-ss').value = selectedPlanName;
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


