// Details are Request form in service page
(function ($) {
    "use strict";

    $("#callus").validate({
        rules: {
            serviceName: {
                required: true
            },
            serviceMail: {
                required: true
            },
            serviceNum: {
                required: true
            },
            serviceSub: {
                required: true,
            },
            serviceMsg: {
                maxlength: 250
            }
        },
        messages: {
            serviceName: {
                required: "Name must be entered"
            },
            serviceMail: {
                required: "Email ID must be entered"
            },
            serviceNum: {
                required: "Phone Number must be entered"
            },
            serviceSub: {
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

    // Text first letter capitalized
    $('#serviceMsg').keyup(function () {
        var caps = $('#serviceMsg').val();
        caps = caps.charAt(0).toUpperCase() + caps.slice(1);
        $('#serviceMsg').val(caps);
    });

    function MobileNum() {
        var mobNo = $("#serviceNum").val().trim();
        var length = mobNo.length;
        var regex = /^(?:\+?\d{1,3})?(\s*[\-]\s*)?[1-9]\d{9,14}$/;

        if (length !== 0) {
            if (regex.test(mobNo)) {
                $("#serviceNum-errorLabel").css('display', 'none').text("");
                $("#serviceNum").val(mobNo);
                return true;
            } else {
                $("#serviceNum-errorLabel").css('display', 'block').text("Please enter a valid Phone Number.");
                $("#serviceNum").val();
                return false;
            }
        } else {
            $("#serviceNum-errorLabel").css('display', 'none').text("");
            return true;
        }
    }

    $("#serviceNum").on('blur', function () {
        MobileNum();
    });

    $("#serviceNum").on('input', function () {
        $('#serviceNum-errorLabel').css('display', 'none').text("");
    });

    function emailValid() {
        var email = $('#serviceMail').val();
        if (email != "" && email != null) {
            if (/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i.test(email)) {
                $("#serviceMail").attr("class", "form-control");
                $("#serviceMail-errorLabel").text('');
                $("#serviceMail-errorLabel").attr("style", "display: none;");
                return true;
            }
            else {
                $("#serviceMail").attr("class", "form-control error");
                $("#serviceMail-errorLabel").text('Please enter valid Email ID');
                $("#serviceMail-errorLabel").attr("style", "display: block;");
                $("#serviceMail").val();
                return false;
            }
        }
        else {
            $("#serviceMail").attr("class", "form-control");
            $("#serviceMail-errorLabel").text('');
            $("#serviceMail-errorLabel").attr("style", "display: none;");
            return true;
        }
    }

    $('#serviceMail').on('blur', function () {
        emailValid();
    });

    $("#serviceMail").on('input', function () {
        $('#serviceMail-errorLabel').css('display', 'none').text("");
    });

    let popup = document.querySelector("#pop");
    $("#closePopup0").on('click', function () {
        popup.classList.remove("open-popup");
        document.callus.reset();
        emailValid(null);
        MobileNum(null);
    });

    function callBack() {
        let name = document.querySelector("#serviceName").value;
        let mail = document.querySelector("#serviceMail").value;
        let num = document.querySelector("#serviceNum").value;
        let subject = document.querySelector("#serviceSub").value;
        let msg = document.querySelector("#serviceMsg").value;
        document.querySelector(".sub-popup h2").innerHTML = "Thank You!";
        document.querySelector(".sub-popup p").innerHTML = "Successfully submitted.<br>We will response SOON.<br>Thank you so much!";
        console.log("\t\t\t REQUEST FORM DETAILS" + "\nName: " + name + "\nEmail-ID: " + mail + "\nContact: " + num + "\nSubject: " + subject + " " + "\nMessage: " + msg);
        popup.classList.add("open-popup");
        const body = "<center><h1 style='color:#355EFC; font-family: 'Times New Roman', serif;'>SKYFINCH WEBSITE</h1></center>" +
            "<br><center><h3>CONTACT DETAILS FORM</h3></center>" +
            "<center><table>" +
            "  <tr><td>Name:</td><td>" + name + "</td></tr>" +
            "  <tr><td>Email-ID:</td><td>" + mail + "</td></tr>" +
            "  <tr><td>Contact:</td><td>" + num + "</td></tr>" +
            "  <tr><td>Subject:</td><td>" + subject + "</td></tr>" +
            "  <tr><td>Message:</td><td>" + msg + "</td></tr>" +
            "</table></center>";
        // Email.send({
        //     SecureToken: "43b9e9f4-c4ca-4b5e-a846-c43c61f9f360",
        //     To: 'mktg@skyfinch.com',
        //     From: "sjkumarsri@gmail.com",
        //     Subject: mail,
        //     Body: body
        // })
    }

    $("#serviceName").on('input', function () {

        var originalValue = $("#serviceName").data('original-value');
        if (originalValue === undefined) {
            originalValue = $("#serviceName").val();
            $("#serviceName").data('original-value', originalValue);
        }

        var value = $("#serviceName").val();
        var regexName = /^[a-zA-Z.]+(?: [a-zA-Z.]+)*$/i; // Allow multiple words separated by a space

        if (!regexName.test(value)) {
            value = value.replace(/[^a-zA-Z. ]+/g, ''); // Remove special characters
            value = value.replace(/\s+/g, ' ').trim(); // Replace multiple spaces with a single space and trim extra spaces
            $("#serviceName").val(value);
        } else {
            $("#serviceName").data('original-value', value);
        }
    });

    $("#serviceNum").on('input', function () {
        var value = $(this).val();
        var regexNumber = /^[-+0-9 ]*$/i;
        if (!regexNumber.test($(this).val())) {
            value = value.replace(/[^-+0-9]+/g, '');
            value = value.replace(/^[. ]+/g, '');
            $(this).val(value);
        }
    });

    $("#callBack").on('click', function () {
        var fields = ["#serviceName", "#serviceMail", "#serviceNum", "#serviceSub"];
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
        if (($("#callus").valid()) && (emailValid()) && (MobileNum())) {
            callBack();
        }
        else {
            emailValid();
            MobileNum();
            focusNextEmptyField();
        }
    });


})(jQuery);




