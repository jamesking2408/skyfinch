//  Details are customers in index page
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
        const body = "<center><h1 style='color:#355EFC; font-family: 'Times New Roman', serif;'>SKYFINCH WEBSITE</h1></center>" +
            "<br><center><h3>CUSTOMER DETAILS FORM</h3></center>" +
            "<center><table>" +
            "  <tr><td>Name:</td><td>" + cus_name + "</td></tr>" +
            "  <tr><td>Mail ID:</td><td>" + mail + "</td></tr>" +
            "  <tr><td>Phone Number:</td><td>" + num + "</td></tr>" +
            "  <tr><td>Project Details:</td><td>" + txt + "</td></tr>" +
            "</table></center>";
        Email.send({
            SecureToken: "43b9e9f4-c4ca-4b5e-a846-c43c61f9f360",
            To: 'mktg@skyfinch.com',
            From: "sjkumarsri@gmail.com",
            Subject: cus_name,
            Body: body
        })
    }
}

