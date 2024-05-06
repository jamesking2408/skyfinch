// Details are Request form in Contact page
(function ($) {
    "use strict";

    $("#contactus").validate({
        rules: {
            contactName: {
                required: true
            },
            contactMail: {
                required: true
            },
            contactSubject: {
                required: true
            },
            contactMsg: {
                maxlength: 250
            }
        },
        messages: {
            contactName: {
                required: "Name must be entered"
            },
            contactMail: {
                required: "Email ID must be entered"
            },
            contactSubject: {
                required: "Subject must be entered"
            }
        },
        errorElement: 'em',
        highlight: function (element, errorClass) {
            $(element).parent().addClass('has-danger')
            $(element).addClass('form-control-danger')
        }, errorPlacement: function (label, element) {
            if (element.parent('.form-floating').length) {
                label.insertAfter(element.parent());
                label.addClass('text-danger');
            } else if (element.hasClass('select2')) {
                label.insertAfter(element.next('span'));
                label.addClass('text-danger');
            } else {
                label.insertAfter(element);
                label.addClass('text-danger');
                // default
            }
        }
    });

    function emailValid() {
        var email = $('#contactMail').val();
        if (email != "" && email != null) {
            if (/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i.test(email)) {
                $("#contactMail").attr("class", "form-control");
                $("#contactMail-errorLabel").text('');
                $("#contactMail-errorLabel").attr("style", "display: none;");
                return true;
            }
            else {
                $("#contactMail").attr("class", "form-control error");
                $("#contactMail-errorLabel").text('Please enter valid Email ID');
                $("#contactMail-errorLabel").attr("style", "display: block;");
                $("#contactMail").val();
                return false;
            }
        }
        else {
            $("#contactMail").attr("class", "form-control");
            $("#contactMail-errorLabel").text('');
            $("#contactMail-errorLabel").attr("style", "display: none;");
            return true;
        }
    }

    $('#contactMail').on('blur', function () {
        emailValid();
    });

    $("#contactMail").on('input', function () {
        $('#contactMail-errorLabel').css('display', 'none').text("");
    });

    let popup = document.querySelector("#pop");

    $("#closePopup2").on('click', function () {
        popup.classList.remove("open-popup");
        document.contactus.reset();
    });
    function contactSub() {
        let na = document.querySelector("#contactName").value;
        let id = document.querySelector("#contactMail").value;
        let sub = document.querySelector("#contactSubject").value;
        let msg = document.querySelector("#contactMsg").value;
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
        // Email.send({
        //     SecureToken: "43b9e9f4-c4ca-4b5e-a846-c43c61f9f360",
        //     To: 'mktg@skyfinch.com',
        //     From: "sjkumarsri@gmail.com",
        //     Subject: id,
        //     Body: body
        // })
    }

    $("#contactSub").on('click', function () {
        var fields = ["#contactName", "#contactMail", "#contactSubject", "#contactMsg"];
        var currentIndex = 0;

        function focusNextEmptyField() {
            for (var i = currentIndex; i < fields.length; i++) {
                if ($(fields[i]).val() === '') {
                    $(fields[i]).focus();
                    currentIndex = i;
                    return;
                }
            }
            $(fields[0]).focus();
            currentIndex = 0;
        }
        if (($("#contactus").valid()) && (emailValid())) {
            contactSub();
        }
        else {
            emailValid();
            focusNextEmptyField();
        }
    });

})(jQuery);