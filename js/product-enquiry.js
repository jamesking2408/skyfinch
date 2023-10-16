let popup = document.getElementById("pop");
let popup1 = document.getElementById("pop1");

let filter = /^([a-z0-9_\.\-]{3,20})+\@(([a-z\-])+\.)+([a-z]{2,4})+$/;

function msgButton() {
    const cus_name = document.querySelector("#cus-name").value;
    const num = document.querySelector("#cus-number").value;
    const mail = document.querySelector("#cus-mail").value;
    const campy = document.querySelector("#cus-company").value;
    const job = document.querySelector("#cus-job").value;
    const cont = document.querySelector("#cus-country").value;
    const work = document.querySelector("#cus-works").value;
    const sales = document.querySelector("#cus-ss").value;
    const txt = document.querySelector("#cus-text").value;

    if((cus_name == "")||(num == "")||(mail == "")||(campy == "")||(job == "")||(cont == "")||(work == "")||(sales == "")||(txt == "")||(txt.length < 30)){
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your All Fields!";
        popup1.classList.add("open-popup");
    }
    else if (cus_name == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10p x 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Name please!!!";
        popup1.classList.add("open-popup");
    }
    else if (num == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Number please!!!";
        popup1.classList.add("open-popup");
    }
    else if((mail == "") || (!filter.test(mail))) {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Mail-ID please!!!";
        popup1.classList.add("open-popup");
    }
    else if (txt == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Please Fill out message field!!!";
        popup1.classList.add("open-popup");
    }
    else if (txt.length < 30) {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Please Fill out message field more than 100 letters!!!";
        popup1.classList.add("open-popup");
    }
    else if (campy == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Please Fill out Company field!!!";
        popup1.classList.add("open-popup");
    }
    else if (job == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Please Fill out Job title field!!!";
        popup1.classList.add("open-popup");
    }
    else if (cont == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Please Fill out Country field!!!";
        popup1.classList.add("open-popup");
    }
    else if (work == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Please Fill out work field!!!";
        popup1.classList.add("open-popup");
    }
    else if (sales == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "<img src=\"img/sad.png\" width=\"60px\" height=\"50px\" border-radius=\"0\" margin=\"-10px 0px 0px 5px\"> SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Please Fill out sales field!!!";
        popup1.classList.add("open-popup");
    }
    else {
        document.querySelector(".sub-popup h2").innerHTML = "Congrats!";
        document.querySelector(".sub-popup p").innerHTML = "Your details submitted successfully. ";
        console.log("\t\t\tCUSTOMER DETAILS"+"\nName : " + cus_name + " " + "\n Phone Number: " + num + " " + "\n Mail ID: " + mail + " " + "\n Project Details: " + txt);
        popup.classList.add("open-popup");
    }
}

function closePopup() {
    popup.classList.remove("open-popup");
    document.cus_form.reset();
}
function closePopup1() {
    popup1.classList.remove("open-popup");
    document.cus_form.reset();
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


