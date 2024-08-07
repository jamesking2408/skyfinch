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
                required: "Mobile Number must be entered"
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
        var regex = /^(?:\+?91|00|0)?[-. ]??[6789]\d{9}$/;

        if (length !== 0) {
            if (regex.test(mobNo)) {
                $("#form_number-errorLabel").css('display', 'none').text("");
                $("#form_number").val(mobNo);
                const ourMobNo = mobNo.slice(-10);
                if (ourMobNo == 9443487210 || ourMobNo == 8220017918) {
                    $("#form_number-errorLabel").css('display', 'block').text("Please Enter your Mobile Number");
                    $("#form_number").val();
                    return false;
                }
                else {
                    return true;
                }
            } else {
                $("#form_number-errorLabel").css('display', 'block').text("Please Enter a Valid Mobile Number");
                $("#form_number").val();
                return false;
            }
        } else {
            $("#form_number-errorLabel").css('display', 'none').text("");
            return true;
        }
    }

    $("#form_number").on('blur', function () {
        MobileNum();
    });

    $("#form_number").on('input', function () {
        $('#form_number-errorLabel').css('display', 'none').text("");
        this.value = this.value.replace(/^\s+/, '');
    });

    function emailValid() {
        var email = $('#form_mail').val();
        if (email != "") {
            // Regular expression for basic email validation
            var regex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

            if (email.toLowerCase() === "info@skyfinch.com") {
                $("#form_mail").attr("class", "form-control error");
                $("#form_mail-errorLabel").text('Please Enter your Email ID');
                $("#form_mail-errorLabel").attr("style", "display: block;");
                $("#form_mail").val();
                return false;
            }
            if (regex.test(email)) {
                $("#form_mail").attr("class", "form-control");
                $("#form_mail-errorLabel").text('');
                $("#form_mail-errorLabel").attr("style", "display: none;");
                return true;
            }
            else {
                $("#form_mail").attr("class", "form-control error");
                $("#form_mail-errorLabel").text('Please Enter a Valid Email ID');
                $("#form_mail-errorLabel").attr("style", "display: block;");
                $("#form_mail").val();
                return false;
            }
        }
        else {
            $("#form_mail").attr("class", "form-control");
            $("#form_mail-errorLabel").text('');
            $("#form_mail-errorLabel").attr("style", "display: none;");
            return false;
        }
    }

    $('#form_mail').on('blur', function () {
        emailValid();
    });

    $("#form_mail").on('input', function () {
        $('#form_mail-errorLabel').css('display', 'none').text("");
        var value = $(this).val();
        value = value.replace(/\s+/g, '');
        $(this).val(value.toLowerCase());
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
        console.log("\t\t\t REQUEST FORM DETAILS" + "\nEmail-ID: " + mail + " " + "\n Mobile Number: " + ph);
        popup.classList.add("open-popup");
        const body = `
            <center>
                <h1 style="color:#355EFC; font-family: 'Times New Roman', serif;">SKYFINCH WEBSITE</h1>
                <br>
                <h3>CONTACT DETAILS FORM</h3>
                <table style="
                border-collapse: collapse;
                width: 60%;
                margin: 20px auto;
                font-family: Arial, sans-serif;
                background-color: #f9f9f9;
                border: 1px solid #ddd;">
                <tr style="background-color: #f2f2f2;">
                <th style="text-align: left; padding: 10px; border-bottom: 1px solid #ddd;">Field</th>
                <th style="text-align: left; padding: 10px; border-bottom: 1px solid #ddd;">Details</th>
                </tr>
                <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">Mail-ID:</td>
                <td style="padding: 10px;">${mail}</td>
                </tr>
                <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">Mobile Number:</td>
                <td style="padding: 10px;">${ph}</td>
                </tr>
                </table>
            </center>`;
        Email.send({
            SecureToken: "43b9e9f4-c4ca-4b5e-a846-c43c61f9f360",
            To: 'sjkumarsri@gmail.com',
            From: "sjkumarsri@gmail.com",
            Subject: mail,
            Body: body
        })
    }
    $("#closePopup").on('click', function () {
        popup.classList.remove("open-popup");
        document.open_form.reset();
        document.cus_form.reset();
    });

    $("#openPopup").on('click', function () {
        // emailValid();
        // MobileNum();
        if (($("#open_form").valid()) && (emailValid() === true) && (MobileNum() === true)) {
            openPopup();
        }
        else {
            emailValid();
            MobileNum();
        }
    });

})(jQuery);