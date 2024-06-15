// Details are contact me in index page
(function ($) {
    "use strict";
    $("#open_form").validate({
        rules: {
            form_mail: {
                required: true
            },
            form_number: {
                required: true
            }
        },
        messages: {
            form_mail: {
                required: "Email ID must be entered"
            },
            form_number: {
                required: "Phone Number must be entered"
            }
        },
        errorElement: 'em',
        highlight: function (element, errorClass) {
            $(element).parent().addClass('has-danger')
            $(element).addClass('form-control-danger')
        }, errorPlacement: function (label, element) {
            if (element.parent('.form-control').length) {
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

    function MobileNum() {
        var mobNo = $("#form_number").val().trim();
        var length = mobNo.length;
        var regex = /^(?:\+?\d{1,3})?(\s*[\-]\s*)?[1-9]\d{9,14}$/;

        if (length !== 0) {
            if (regex.test(mobNo)) {
                $("#form_number-errorLabel").css('display', 'none').text("");
                $("#form_number").val(mobNo);
            } else {
                $("#form_number-errorLabel").css('display', 'block').text("Please enter a valid Phone Number.");
                $("#form_number").val();
            }
        } else {
            $("#form_number-errorLabel").css('display', 'none').text("");
        }
    }

    $("#form_number").on('blur', function () {
        MobileNum();
    });

    $("#form_number").on('input', function () {
        $('#form_number-errorLabel').css('display', 'none').text("");
    });

    function emailValid() {
        var email = $('#form_mail').val();
        if (email != "" && email != null) {
            if (/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i.test(email)) {
                $("#form_mail").attr("class", "form-control");
                $("#form_mail-errorLabel").text('');
                $("#form_mail-errorLabel").attr("style", "display: none;");
            }
            else {
                $("#form_mail").attr("class", "form-control error");
                $("#form_mail-errorLabel").text('Please enter valid Email ID');
                $("#form_mail-errorLabel").attr("style", "display: block;");
                $("#form_mail").val();
            }
        }
        else {
            $("#form_mail").attr("class", "form-control");
            $("#form_mail-errorLabel").text('');
            $("#form_mail-errorLabel").attr("style", "display: none;");
        }
    }

    $('#form_mail').on('blur', function () {
        emailValid();
    });

    $("#form_number").on('input', function () {
        var regexNumber = /^[-+0-9 ]*$/i;
        if (!regexNumber.test($(this).val())) {
            $(this).val(function (_, value) {
                return value.slice(0, -1);
            });
        }
    });

    let popup = document.querySelector("#pop");
    function openPopup() {
        let mail = document.querySelector("#form_mail").value;
        let ph = document.querySelector("#form_number").value;
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
        // Email.send({
        //     SecureToken: "43b9e9f4-c4ca-4b5e-a846-c43c61f9f360",
        //     To: 'mktg@skyfinch.com',
        //     From: "sjkumarsri@gmail.com",
        //     Subject: mail,
        //     Body: body
        // })
    }
    $("#closePopup").on('click', function () {
        popup.classList.remove("open-popup");
        document.open_form.reset();
        document.cus_form.reset();
    });

    $("#openPopup").on('click', function () {
        emailValid();
        MobileNum();
        if ($("#open_form").valid()) {
            openPopup();
        }
        else {
            emailValid();
            MobileNum();
        }
    });

})(jQuery);