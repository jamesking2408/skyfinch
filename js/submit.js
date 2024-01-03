var popup = document.getElementById("pop");
var popup1 = document.getElementById("pop1");
var num_filter = /^[0-9]{10}$/;
var mail_filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Details are contact me in index page
function openPopup() {

    const mail = document.querySelector("#form-mail").value;
    const ph = document.querySelector("#form-number").value;
    if ((mail == "") && (ph == "")) {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Please enter your Valid Details!";
        popup1.classList.add("open-popup");
    }
    else if ((ph.length != 10) && (!mail_filter.test(mail))) {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Phone number and Mail-ID!";
        popup1.classList.add("open-popup");
    }
    else if (!num_filter.test(ph)) {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Phone Number!";
        popup1.classList.add("open-popup");
    }
    else if (!mail_filter.test(mail)) {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Mail ID!";
        popup1.classList.add("open-popup");
    }
    else {
        document.querySelector(".sub-popup h2").innerHTML = "Thank You!";
        document.querySelector(".sub-popup p").innerHTML = "Successfully submitted.<br>We will response SOON.<br>Thank you so much!";
        console.log("\t\t\t REQUEST FORM DETAILS" + "\nEmail-ID: " + mail + " " + "\n Phone Number: " + ph);
        popup.classList.add("open-popup");
    }
}


// Details are customers in index page
function msgButton() {
    const cus_name = document.querySelector("#cus-name").value;
    const num = document.querySelector("#cus-number").value;
    const mail = document.querySelector("#cus-mail").value;
    const txt = document.querySelector("#cus-text").value;
    if ((cus_name == "") && (num == "") && (mail == "") && (txt == "") && (txt.length < 5)) {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your All Fields!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#cus-name").focus();
        })
    }
    else if (cus_name == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Name Fields!!!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#cus-name").focus();
        })
    }
    else if ((!num_filter.test(num)) || (num.length < 10)) {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Number Fields!!!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#cus-number").focus();
        })
    }
    else if ((!mail_filter.test(mail))) {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Mail-ID Fields!!!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#cus-mail").focus();
        })
    }
    else if (txt == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Please Fill out message field!!!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#cus-text").focus();
        })
    }
    else if (txt.length < 5) {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Please Fill out message field more than 10 letters!!!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#cus-text").focus();
        })
    }
    else {
        document.querySelector(".sub-popup h2").innerHTML = "Congrats!";
        document.querySelector(".sub-popup p").innerHTML = "Successfully submitted.<br>We will response SOON.<br>Thank you so much!";
        console.log("\t\t\tCUSTOMER DETAILS" + "\nName : " + cus_name + " " + "\n Phone Number: " + num + " " + "\n Mail ID: " + mail + " " + "\n Project Details: " + txt);
        popup.classList.add("open-popup");
    }
}


// Details are Request form in service page
function callBack() {
    let name1 = document.querySelector("#na").value;
    let mail = document.querySelector("#Id").value;
    let mob = document.querySelector("#mob").value;
    let sub = document.querySelector("#sub").value;
    let txt = document.querySelector("#msg").value;

    if ((name1 == "") && (mob == "") && (mail == "") && (sub == "") && (txt == "")) {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your ALL field!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#na").focus();
        })
    }
    else if (name1 == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Name field!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#na").focus();
        })
    }
    else if (!mail_filter.test(mail) || (mail == "")) {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your mail field!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#Id").focus();
        })
    }
    else if ((mob == "") || (mob.length != 10) || (!num_filter.test(mob))) {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your mobile field!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#mob").focus();
        })
    }
    else if (sub == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Subject field!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#sub").focus();
        })
    }
    else if (txt == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Subject field!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#msg").focus();
        })
    }
    else {
        document.querySelector(".sub-popup h2").innerHTML = "Congrats!";
        document.querySelector(".sub-popup p").innerHTML = "Successfully submitted.<br>We will response SOON.<br>Thank you so much!";
        console.log("\t\t\t REQUEST FORM DETAILS" + "\n Name : " + name1 + " " + "\n Phone Number: " + mob + " " + "\n Mail ID: " + mail + " " + "\n Subject: " + sub + " " + "\n Project Details: " + txt);
        popup.classList.add("open-popup");
    }
}


function contact_sub() {

    const na = document.querySelector("#na").value;
    const id = document.querySelector("#id").value;
    const sub = document.querySelector("#sub").value;
    const msg = document.querySelector("#msg").value;

    if ((na == "") && (id == "") && (sub == "") && (msg == "")) {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your ALL field!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#na").focus();
        })
    }
    else if (na == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Name field!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#na").focus();
        })
    }
    else if (!mail_filter.test(id) || (id == "")) {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your mail field!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#id").focus();
        })
    }
    else if (sub == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Subject field!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#sub").focus();
        })
    }
    else if (msg == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Message field!";
        popup1.classList.add("open-popup");
        document.querySelector(".exit1").addEventListener("click", function () {
            document.querySelector("#msg").focus();
        })
    }
    else {
        document.querySelector(".sub-popup h2").innerHTML = "Congrats!";
        document.querySelector(".sub-popup p").innerHTML = "Successfully submitted.<br>We will response SOON.<br>Thank you so much!";
        console.log("\t\t\t REQUEST FORM DETAILS" + "\n Name : " + na + " " + "\n Mail ID: " + id + " " + "\n Subject: " + sub + " " + "\n Project Details: " + msg);
        popup.classList.add("open-popup");
    }
}

function closePopup() {
    popup.classList.remove("open-popup");
    document.open_form.reset();
}

function closePopup0() {
    popup.classList.remove("open-popup");
    document.callus.reset();
}
function closePopup1() {
    popup1.classList.remove("open-popup");
}
function closePopup2() {
    popup.classList.remove("open-popup");
    document.contactus.reset();
}
function closePopup3() {
    popup1.classList.remove("open-popup");
}

// Product Enquiry form automatically fill plan price
function choosePlan(planName, planPrice) {
    localStorage.setItem('selectedPlanName', planName);
    localStorage.setItem('selectedPlanPrice', planPrice);
}

function resetFormProduct() {
    document.cus_form.reset();
}

