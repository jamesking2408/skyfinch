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
            contactNum: {
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
            contactNum: {
                required: "Mobile Number must be entered"
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

    function MobileNum() {
        var mobNo = $("#contactNum").val().trim();
        var length = mobNo.length;
        var regex =  /^(?:\+?91|00|0)?[-. ]??[6789]\d{9}$/;

        if (length !== 0) {
            if (regex.test(mobNo)) {
                debugger;
                $("#contactNum-errorLabel").css('display', 'none').text("");
                $("#contactNum").val(mobNo);
                var ourMobNo =mobNo.slice(-10);
                if(ourMobNo == 9443487210 || ourMobNo == 8220017918)
                {
                    $("#contactNum-errorLabel").css('display', 'block').text("Please Enter your Mobile Number");
                    $("#contactNum").val();
                    return false;
                }
                else{
                    return true;
                }
            } else {
                $("#contactNum-errorLabel").css('display', 'block').text("Please Enter a Valid Mobile Number");
                $("#contactNum").val();
                return false;
            }
        } else {
            $("#contactNum-errorLabel").css('display', 'none').text("");
            return true;
        }
    }

    $("#contactNum").on('blur', function () {
        MobileNum();
    });

    $("#contactNum").on('input', function () {
        $('#contactNum-errorLabel').css('display', 'none').text("");
        this.value = this.value.replace(/^\s+/, '');
    });

    function emailValid() {
        var email = $('#contactMail').val();
        if (email != "") {
            // Regular expression for basic email validation
            var regex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

            if (email.toLowerCase() === "info@skyfinch.com") {
                $("#contactMail").attr("class", "form-control error");
                $("#contactMail-errorLabel").text('Please Enter your Email ID');
                $("#contactMail-errorLabel").attr("style", "display: block;");
                $("#contactMail").val();
                return false;
            }
            if (regex.test(email)) {
                $("#contactMail").attr("class", "form-control");
                $("#contactMail-errorLabel").text('');
                $("#contactMail-errorLabel").attr("style", "display: none;");
                return true;
            }
            else {
                $("#contactMail").attr("class", "form-control error");
                $("#contactMail-errorLabel").text('Please Enter Valid Email ID');
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
        var value = $(this).val();
        value = value.replace(/\s+/g, '');
        $(this).val(value.toLowerCase());
    });

    function validateName() {
        var cusName = $("#contactName").val();
        var cusNameTrim = $.trim(cusName); // Trim whitespace from both ends
        var regex = /^[A-Za-z]+(?: [A-Za-z]+)*(?:\.[A-Za-z]+)?$/; // Regex pattern to allow one dot

        if (cusNameTrim === "") {
            // If the trimmed name is empty
            $("#contactName").removeClass("error"); // Add error class
            $('#contactName-errorLabel').css('display', 'block').text(''); // Show error message
            return false;
        } else {
            // If the trimmed name is not empty
            if (regex.test(cusNameTrim)) {
                // If the name matches the regex
                $('#contactName').val(cusNameTrim); // Set trimmed value
                $("#contactName").removeClass("error").addClass("form-control"); // Remove error class, add form-control class
                $('#contactName-errorLabel').css('display', 'none').text(""); // Hide error message
                return true;
            } else {
                // If the name does not match the regex
                $("#contactName").addClass("error"); // Add error class
                $('#contactName-errorLabel').css('display', 'block').text('Please Enter a Valid Name'); // Show error message
                return false;
            }
        }
    }

    // Validate on blur event (when the input loses focus)
    $('#contactName').on('blur', function () {
        validateName();
        trimSpacesOnBlur('contactName');
    });

    // Clear error message on input event (when typing)
    $("#contactName").on('input', function () {
        $('#contactName-errorLabel').css('display', 'none').text(""); // Hide error message
        $("#contactName").removeClass("error"); // Remove error class
        var regexName = /^[a-zA-Z .]*$/;
        var value = $(this).val();
        if (!regexName.test(value)) {
            $(this).val(value.replace(/[^a-zA-Z .]/g, ''));
        }
    });

    function validateSubject() {
        var cusSubject = $("#contactSubject").val();
        var length = cusSubject.length;
        var regex = /^[A-Za-z0-9]+(?: [A-Za-z0-9]+)*(?:\.[A-Za-z0-9]+)?$/;
        if (length != 0) {
            if (regex.test(cusSubject) && cusSubject != "") {
                $("#contactSubject").attr("class", "form-control error");
                $('#contactSubject-errorLabel').css('display', 'none').text("");
                $('#contactSubject').val(cusSubject);
                return true;
            }
            else {
                $("#contactSubject").attr("class", "form-control error");
                $('#contactSubject-errorLabel').css('display', 'block').text('Please Enter Valid subject');
                return false;
            }
        }
        else {
            $("#contactSubject").attr("class", "form-control error");
            $('#contactSubject-errorLabel').css('display', 'block').text('');
            return false;
        }
    }

    function trimSpacesOnBlur(id) {
        var $input = $('#' + id);
        const value = $input.val();
        // Trim leading and trailing spaces
        $input.val($.trim(value));
    }

    $('#contactSubject').on('blur', function () {
        validateSubject();
        trimSpacesOnBlur('contactSubject');
    });

    $("#contactSubject").on('input', function () {
        $('#contactSubject-errorLabel').css('display', 'none').text("");
        this.value = this.value.replace(/^\s+/, '');
    });

    let popup = document.querySelector("#pop");

    $("#closePopup2").on('click', function () {
        popup.classList.remove("open-popup");
        document.contactus.reset();
    });
    function contactSub() {
        let contact_Name = document.querySelector("#contactName").value;
        let contact_Mail = document.querySelector("#contactMail").value;
        let contact_Num = document.querySelector("#contactNum").value;
        let contact_Sub = document.querySelector("#contactSubject").value;
        let contact_Msg = document.querySelector("#contactMsg").value;
        document.querySelector(".sub-popup h2").innerHTML = "Congrats!";
        document.querySelector(".sub-popup p").innerHTML = "Successfully submitted.<br>We will response SOON.<br>Thank you so much!";
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
                <th style="text-align: left; padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">Field</th>
                <th style="text-align: left; padding: 10px; border-bottom: 1px solid #ddd;">Details</th>
                </tr>
                <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${contact_Name}</td>
                </tr>
                <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">Mail-ID:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${contact_Num}</td>
                </tr>
				<tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">Mobile Number:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${contact_Mail}</td>
                </tr>
                <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">Subject:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${contact_Sub}</td>
                </tr>
                <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">Project Details:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${contact_Msg}</td>
                </tr>
                </table>
            </center>`;
        Email.send({
            SecureToken: "43b9e9f4-c4ca-4b5e-a846-c43c61f9f360",
            To: 'sjkumarsri@gmail.com',
            From: "sjkumarsri@gmail.com",
            Subject: contact_Name,
            Body: body
        })
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
        if (($("#contactus").valid()) && (emailValid()) && (MobileNum()) && (validateName() === true) && (validateSubject() === true)) {
            contactSub();
        }
        else {
            focusNextEmptyField();
        }
    });

})(jQuery);