let popup = document.getElementById("pop");
let popup1 = document.getElementById("pop1");
let num_filter = /^[0-9]{10}$/;
let mail_filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
        const body = "<center><h1 style='color:#355EFC; font-family: 'Times New Roman', serif;'>SKYFINCH WEBSITE</h1></center>" +
            "<br><center><h3>CONTACT DETAILS FORM</h3></center>" +
            "<center><table>" +
            "  <tr><td>Mail-ID:</td><td>" + mail + "</td></tr>" +
            "  <tr><td>Phone Number:</td><td>" + ph + "</td></tr>" +
            "</table></center>";
        Email.send({
            SecureToken: "43b9e9f4-c4ca-4b5e-a846-c43c61f9f360",
            To: 'jai29112024@gmail.com',
            From: "sjkumarsri@gmail.com",
            Subject: mail,
            Body: body
        })
    }
}

function closePopup() {
    popup.classList.remove("open-popup");
    document.open_form.reset();
    document.cus_form.reset();
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

