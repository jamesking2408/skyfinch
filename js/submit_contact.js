
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
        const body = "<center><h1 style='color:#355EFC; font-family: 'Times New Roman', serif;'>SKYFINCH WEBSITE</h1></center>" +
            "<br><center><h3>CONTACT DETAILS</h3></center>" +
            "<center><table>" +
            "  <tr><td>Name:</td><td>" + na + "</td></tr>" +
            "  <tr><td>Mail ID:</td><td>" + id + "</td></tr>" +
            "  <tr><td>Subject:</td><td>" + sub + "</td></tr>" +
            "  <tr><td>Project Details:</td><td>" + msg + "</td></tr>" +
            "</table></center>";
        Email.send({
            SecureToken: "43b9e9f4-c4ca-4b5e-a846-c43c61f9f360",
            To: 'jai29112024@gmail.com',
            From: "sjkumarsri@gmail.com",
            Subject: na,
            Body: body
        })
    }
}

