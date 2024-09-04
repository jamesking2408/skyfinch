
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
                required: "Mobile Number must be entered"
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
        SubmitFlag = true;
        var mobNo = $("#cus_number").val().trim();
        var length = mobNo.length;
        var regex = /^(?:\+?91|00|0)?[-. ]??[6789]\d{9}$/;

        if (length !== 0) {
            if (regex.test(mobNo)) {
                $("#cus_number-errorLabel").css('display', 'none').text("");
                $("#cus_number").val(mobNo);
                const ourMobNo = mobNo.slice(-10);
                if (ourMobNo == 9443487210 || ourMobNo == 8220017918) {
                    $("#cus_number-errorLabel").css('display', 'block').text("Please Enter your Mobile Number");
                    $("#cus_number").val();
                    $('#cus_number').attr('aria-invalid', 'true');
                    return false;
                }
                else {
                    $('#cus_number').attr('aria-invalid', 'false');
                    return true;
                }
            } else {
                $("#cus_number-errorLabel").css('display', 'block').text("Please Enter a Valid Mobile Number");
                $("#cus_number").val();
                $('#cus_number').attr('aria-invalid', 'true');
                return false;
            }
        } else {
            $("#cus_number-errorLabel").css('display', 'none').text("");
            return true;
        }
    }

    $("#cus_number").on('blur', function () {
        MobileNum();
    });

    $("#cus_number").on('input', function () {
        $('#cus_number-errorLabel').css('display', 'none').text("");
        this.value = this.value.replace(/^\s+/, '');
    });

    function emailValid() {
        // var email = $('#cus_mail').val().trim();
        SubmitFlag = true;
        var email = $('#cus_mail').val();
        if (email != "") {
            // Regular expression for basic email validation
            // var regex = /^[a-z0-9]+@[A-Za-z]{4,10}\.[a-z]{2,3}$/;
            var regex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

            if (email.toLowerCase() === "info@skyfinch.com") {
                $("#cus_mail").attr("class", "form-control error");
                $("#cus_mail-errorLabel").text('Please Enter your Email ID');
                $("#cus_mail-errorLabel").attr("style", "display: block;");
                $("#cus_mail").val();
                $('#cus_mail').attr('aria-invalid', 'true');
                return false;
            }
            if (regex.test(email)) {
                $("#cus_mail").attr("class", "form-control");
                $("#cus_mail-errorLabel").text('');
                $("#cus_mail-errorLabel").attr("style", "display: none;");
                $('#cus_mail').attr('aria-invalid', 'false');
                return true;
            }
            else {
                $("#cus_mail").attr("class", "form-control error");
                $("#cus_mail-errorLabel").text('Please Enter Valid Email ID');
                $("#cus_mail-errorLabel").attr("style", "display: block;");
                $("#cus_mail").val();
                $('#cus_mail').attr('aria-invalid', 'true');
                return false;
            }
        }
        else {
            $("#cus_mail").attr("class", "form-control");
            $("#cus_mail-errorLabel").text('');
            $("#cus_mail-errorLabel").attr("style", "display: none;");
            return true;
        }
    }

    $('#cus_mail').on('blur', function () {
        emailValid();
    });

    $("#cus_mail").on('input', function () {
        $('#cus_mail-errorLabel').css('display', 'none').text("");
        var value = $(this).val();
        value = value.replace(/\s+/g, '');
        $(this).val(value.toLowerCase());
    });

    function validateName() {
        SubmitFlag = true;
        var cusName = $("#cus_name").val();
        var cusNameTrim = $.trim(cusName); // Trim whitespace from both ends
        var regex = /^[A-Za-z]+(?: [A-Za-z]+)*(?:\.[A-Za-z]+)?$/; // Regex pattern to allow one dot

        if (cusNameTrim === "") {
            // If the trimmed name is empty
            $("#cus_name").removeClass("error"); // Add error class
            $('#cus_name-errorLabel').css('display', 'block').text(''); // Show error message
            $('#cus_name').attr('aria-invalid', 'true');
            return false;
        } else {
            // If the trimmed name is not empty
            if (regex.test(cusNameTrim)) {
                // If the name matches the regex
                $('#cus_name').val(cusNameTrim); // Set trimmed value
                $("#cus_name").removeClass("error").addClass("form-control"); // Remove error class, add form-control class
                $('#cus_name-errorLabel').css('display', 'none').text(""); // Hide error message
                $('#cus_name').attr('aria-invalid', 'false');
                return true;
            } else {
                // If the name does not match the regex
                $("#cus_name").addClass("error"); // Add error class
                $('#cus_name-errorLabel').css('display', 'block').text('Please Enter a Valid Name'); // Show error message
                $('#cus_name').attr('aria-invalid', 'true');
                return false;
            }
        }
    }

    // Validate on blur event (when the input loses focus)
    $('#cus_name').on('blur', function () {
        validateName();
    });

    // Clear error message on input event (when typing)
    $("#cus_name").on('input', function () {
        $('#cus_name-errorLabel').css('display', 'none').text(""); // Hide error message
        $("#cus_name").removeClass("error"); // Remove error class
        var regexName = /^[a-zA-Z .]*$/;
        var value = $(this).val();
        if (!regexName.test(value)) {
            $(this).val(value.replace(/[^a-zA-Z .]/g, ''));
        }
    });

    let popup = document.querySelector("#pop");
    $("#closePopup").on('click', function () {
        popup.classList.remove("open-popup");
        document.open_form.reset();
        document.cus_form.reset();
        $("#msgButton").prop('disabled', false);
    });


    let openForm = $("#open_form").validate();
    $("#hide_form").on('click', function () {
        openForm.resetForm();
        $("#form_mail-errorLabel, #form_number-errorLabel").css("display", "none");
    });

    function submitDetails() {
        let cus_name = document.querySelector("#cus_name").value;
        let cus_number = document.querySelector("#cus_number").value;
        let cus_mail = document.querySelector("#cus_mail").value;
        let cus_text = document.querySelector("#cus_text").value;
        document.querySelector(".sub-popup h2").innerHTML = "Congrats!";
        document.querySelector(".sub-popup p").innerHTML = "Successfully submitted.<br>We will response SOON.<br>Thank you so much!";
        console.log("\t\t\tCUSTOMER DETAILS" + "\nName : " + cus_name + " " + "\n Mobile Number: " + cus_number + " " + "\n Mail ID: " + cus_mail + " " + "\n Project Details: " + cus_text);
        popup.classList.add("open-popup");
        if (popup.classList.contains("open-popup")) {
            $('#msgButton').prop('disabled', true);
            setTimeout(function () {
                $('#closePopup').focus();
            }, 100);
        }
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
                <th style="text-align: left; padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">Field</th>
                <th style="text-align: left; padding: 10px; border-bottom: 1px solid #ddd;">Details</th>
                </tr>
                <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${cus_name}</td>
                </tr>
                <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">Mail-ID:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${cus_number}</td>
                </tr>
				<tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">Mobile Number:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${cus_mail}</td>
                </tr>
                <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">Project Details:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${cus_text}</td>
                </tr>
                </table>
            </center>`;
        Email.send({
            SecureToken: "43b9e9f4-c4ca-4b5e-a846-c43c61f9f360",
            To: 'sjkumarsri@gmail.com',
            From: "sjkumarsri@gmail.com",
            Subject: cus_name,
            Body: body
        })
    }

    $("#cus_number").on('input', function () {
        var value = $(this).val();
        var regexNumber = /^[-+0-9 ]*$/i;
        if (!regexNumber.test($(this).val())) {
            value = value.replace(/[^-+0-9]+/g, '');
            value = value.replace(/^[. ]+/g, '');
            $(this).val(value);
        }
    });

    var SubmitFlag = true;
    $("#msgButton").on('click', function () {
        var fields = ["#cus_name", "#cus_number", "#cus_mail", "#cus_text"];
        var currentIndex = 0;

        function focusNextEmptyField() {
            for (var i = currentIndex; i < fields.length; i++) {
                var firstErrorField = $(fields[i]).attr('aria-invalid');
                if ($(fields[i]).val() === '' || firstErrorField === 'true') {
                    $(fields[i]).focus();
                    currentIndex = i;
                    return;
                }
            }
            $(fields[0]).focus();
            currentIndex = 0;
        }
        if (($("#cus_form").valid()) && (emailValid()) && (MobileNum()) && (validateName() === true)) {
            if (SubmitFlag === true) {
                submitDetails();
                SubmitFlag = false;
            }
        } else {
            emailValid();
            MobileNum();
            focusNextEmptyField();
            SubmitFlag = true;
        }
    });

})(jQuery);