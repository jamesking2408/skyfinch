
//  Details are customers in index page
(function ($) {
    "use strict";
    $("#cus_form").validate({
        rules: {
            cus_name: {
                required: true
            },
            cus_number: {
                required: true
            },
            cus_mail: {
                required: true
            },
            cus_text: {
                maxlength: 250
            }
        },
        messages: {
            cus_name: {
                required: "Name must be entered"
            },
            cus_number: {
                required: "Phone Number must be entered"
            },
            cus_mail: {
                required: "Email ID must be entered"
            }
        },
        errorElement: 'em',
        errorPlacement: function (label, element) {
            console.log(element);
            if (element.parent('.form-floating').length) {
                label.insertAfter(element.parent());
                label.addClass('text-danger');
                // radio/checkbox?
            } else if (element.hasClass('select2')) {
                label.insertAfter(element.next('span'));
                label.addClass('text-danger');
                // select2
            } else {
                label.insertAfter(element);
                label.addClass('text-danger');
                // default
            }
        },
        highlight: function (element, errorClass) {
            $(element).parent().addClass('has-danger')
            $(element).addClass('form-control-danger')
        }
    });

    function MobileNum() {
        var mobNo = $("#cus_number").val().trim();
        var length = mobNo.length;
        var regex = /^(?:\+?\d{1,3})?(\s*[\-]\s*)?[1-9]\d{9,14}$/;

        if (length !== 0) {
            if (regex.test(mobNo)) {
                $("#cus_number-errorLable").css('display', 'none').text("");
                $("#cus_number").val(mobNo);
                return true;
            } else {
                $("#cus_number-errorLable").css('display', 'block').text("Please enter a valid Phone Number.");
                $("#cus_number").val();
                return false;
            }
        } else {
            $("#cus_number-errorLable").css('display', 'none').text("");
            return true;
        }
    }

    $("#cus_number").on('blur', function () {
        MobileNum();
    });

    $("#cus_number").on('input', function () {
        $('#cus_number-errorLable').css('display', 'none').text("");
    });

    function emailValid() {
        var email = $('#cus_mail').val();
        if (email != "" && email != null) {
            if (/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i.test(email)) {
                $("#cus_mail").attr("class", "form-control");
                $("#cus_mail-errorLable").text('');
                $("#cus_mail-errorLable").attr("style", "display: none;");
                return true;
            }
            else {
                $("#cus_mail").attr("class", "form-control error");
                $("#cus_mail-errorLable").text('Please enter valid Email ID');
                $("#cus_mail-errorLable").attr("style", "display: block;");
                $("#cus_mail").val();
                return false;
            }
        }
        else {
            $("#cus_mail").attr("class", "form-control");
            $("#cus_mail-errorLable").text('');
            $("#cus_mail-errorLable").attr("style", "display: none;");
            return true;
        }
    }

    $('#cus_mail').on('blur', function () {
        emailValid();
    });

    $("#cus_mail").on('input', function () {
        $('#cus_mail-errorLable').css('display', 'none').text("");
    });

    let popup = document.querySelector("#pop");
    $("#closePopup").on('click', function () {
        popup.classList.remove("open-popup");
        document.open_form.reset();
        document.cus_form.reset();
    });

    function submitDetails() {
        let cus_name = document.querySelector("#cus_name").value;
        let cus_number = document.querySelector("#cus_number").value;
        let cus_mail = document.querySelector("#cus_mail").value;
        let cus_text = document.querySelector("#cus_text").value;
        document.querySelector(".sub-popup h2").innerHTML = "Congrats!";
        document.querySelector(".sub-popup p").innerHTML = "Successfully submitted.<br>We will response SOON.<br>Thank you so much!";
        console.log("\t\t\tCUSTOMER DETAILS" + "\nName : " + cus_name + " " + "\n Phone Number: " + cus_number + " " + "\n Mail ID: " + cus_mail + " " + "\n Project Details: " + cus_text);
        popup.classList.add("open-popup");
        const body = "<center><h1 style='color:#355EFC; font-family: 'Times New Roman', serif;'>SKYFINCH WEBSITE</h1></center>" +
            "<br><center><h3>CUSTOMER DETAILS FORM</h3></center>" +
            "<center><table>" +
            "  <tr><td>Name:</td><td>" + cus_name + "</td></tr>" +
            "  <tr><td>Mail ID:</td><td>" + cus_mail + "</td></tr>" +
            "  <tr><td>Phone Number:</td><td>" + cus_number + "</td></tr>" +
            "  <tr><td>Project Details:</td><td>" + cus_text + "</td></tr>" +
            "</table></center>";
        // Email.send({
        //     SecureToken: "43b9e9f4-c4ca-4b5e-a846-c43c61f9f360",
        //     To: 'mktg@skyfinch.com',
        //     From: "sjkumarsri@gmail.com",
        //     Subject: cus_name,
        //     Body: body
        // })
    }


    $("#cus_name").on('input', function () {

        var originalValue = $("#cus_name").data('original-value');
        if (originalValue === undefined) {
            originalValue = $("#cus_name").val();
            $("#cus_name").data('original-value', originalValue);
        }

        var value = $("#cus_name").val();
        var regexName = /^[a-zA-Z.]+(?: [a-zA-Z.]+)*$/i; // Allow multiple words separated by a space

        if (!regexName.test(value)) {
            value = value.replace(/[^a-zA-Z. ]+/g, ''); // Remove special characters
            value = value.replace(/\s+/g, ' ').trim(); // Replace multiple spaces with a single space and trim extra spaces
            $("#cus_name").val(value);
        } else {
            $("#cus_name").data('original-value', value);
        }
    });

    $("#cus_number").on('input', function () {
        var value = $(this).val();
        var regexNumber = /^[-+0-9 ]*$/i;
        if (!regexNumber.test($(this).val())) {
            value = value.replace(/[^-+0-9]+/g, '');
            value = value.replace(/^[. ]+/g, '');
            $(this).val(value);
        }
    });

    $("#msgButton").on('click', function () {
        var fields = ["#cus_name", "#cus_number", "#cus_mail", "#cus_text"];
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
        if (($("#cus_form").valid()) && (emailValid()) && (MobileNum())) {
            submitDetails();
        } else {
            emailValid();
            MobileNum();
            focusNextEmptyField();
        }
    });

})(jQuery);