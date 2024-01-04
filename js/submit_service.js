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
        const body = "<center><h1>SKYFINCH WEBSITE</h1></center>" +
            "<br><center><h3>CUSTOMER REQUEST FORM</h3></center>" +
            "<center><table>" +
            "  <tr><td>Name:</td><td>" + name1 + "</td></tr>" +
            "  <tr><td>Mail ID:</td><td>" + mail + "</td></tr>" +
            "  <tr><td>Subject:</td><td>" + sub + "</td></tr>" +
            "  <tr><td>Phone Number:</td><td>" + mob + "</td></tr>" +
            "  <tr><td>Project Details:</td><td>" + txt + "</td></tr>" +
            "</table></center>";
        Email.send({
            SecureToken: "43b9e9f4-c4ca-4b5e-a846-c43c61f9f360",
            To: 'mktg@skyfinch.com',
            From: "sjkumarsri@gmail.com",
            Subject: name1,
            Body: body
        })
    }
}



