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
                required: "Mobile Number must be entered"
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
        var regex = /^(?:\+?91|00|0)?[-. ]??[6789]\d{9}$/;

        if (length !== 0) {
            if (regex.test(mobNo)) {
                $("#serviceNum-errorLabel").css('display', 'none').text("");
                $("#serviceNum").val(mobNo);
                const ourMobNo = mobNo.slice(-10);
                if (ourMobNo == 9443487210 || ourMobNo == 8220017918) {
                    $("#serviceNum-errorLabel").css('display', 'block').text("Please Enter your Mobile Number.");
                    $("#serviceNum").val();
                    return false;
                }
                else {
                    return true;
                }
            } else {
                $("#serviceNum-errorLabel").css('display', 'block').text("Please Enter a Valid Mobile Number.");
                $("#serviceNum").val();
                return false;
            }
        } else {
            $("#serviceNum-errorLabel").css('display', 'block').text("");
            $("#serviceNum").val("");
            return false;
        }
    }

    $("#serviceNum").on('blur', function () {
        MobileNum();
    });

    $("#serviceNum").on('input', function () {
        $('#serviceNum-errorLabel').css('display', 'none').text("");
        this.value = this.value.replace(/^\s+/, '');
    });

    function emailValid() {
        var email = $('#serviceMail').val();
        if (email !== "") {
            // Regular expression for basic email validation
            var regex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

            if (email.toLowerCase() === "info@skyfinch.com") {
                $("#serviceMail").attr("class", "form-control error");
                $("#serviceMail-errorLabel").text('Please Enter your Email ID');
                $("#serviceMail-errorLabel").attr("style", "display: block;");
                $("#serviceMail").val();
                return false;
            }
            if (regex.test(email)) {
                $("#serviceMail").attr("class", "form-control");
                $("#serviceMail-errorLabel").text('');
                $("#serviceMail-errorLabel").attr("style", "display: none;");
                return true;
            } else {
                $("#serviceMail").attr("class", "form-control error");
                $("#serviceMail-errorLabel").text('Please Enter a Valid Email ID');
                $("#serviceMail-errorLabel").attr("style", "display: block;");
                // $("#serviceMail").val('');
                return false;
            }
        } else {
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
        var value = $(this).val();
        value = value.replace(/\s+/g, '');
        $(this).val(value.toLowerCase());
    });

    function validateName() {
        var cusName = $("#serviceName").val();
        var cusNameTrim = $.trim(cusName); // Trim whitespace from both ends
        var regex = /^[A-Za-z]+(?: [A-Za-z]+)*(?:\.[A-Za-z]+)?$/; // Regex pattern to allow one dot

        if (cusNameTrim === "") {
            // If the trimmed name is empty
            $("#serviceName").removeClass("error"); // Add error class
            $('#serviceName-errorLabel').css('display', 'block').text(''); // Show error message
            return false;
        } else {
            // If the trimmed name is not empty
            if (regex.test(cusNameTrim)) {
                // If the name matches the regex
                $('#serviceName').val(cusNameTrim); // Set trimmed value
                $("#serviceName").removeClass("error").addClass("form-control"); // Remove error class, add form-control class
                $('#serviceName-errorLabel').css('display', 'none').text(""); // Hide error message
                return true;
            } else {
                // If the name does not match the regex
                $("#serviceName").addClass("error"); // Add error class
                $('#serviceName-errorLabel').css('display', 'block').text('Please Enter a Valid Name'); // Show error message
                return false;
            }
        }
    }

    // Validate on blur event (when the input loses focus)
    $('#serviceName').on('blur', function () {
        validateName();
        trimSpacesOnBlur('serviceName');
    });

    // Clear error message on input event (when typing)
    $("#serviceName").on('input', function () {
        $('#serviceName-errorLabel').css('display', 'none').text(""); // Hide error message
        $("#serviceName").removeClass("error"); // Remove error class
        var regexName = /^[a-zA-Z .]*$/;
        var value = $(this).val();
        if (!regexName.test(value)) {
            $(this).val(value.replace(/[^a-zA-Z .]/g, ''));
        }
    });

    function validateSubject() {
        var cusSubject = $("#serviceSub").val();
        var length = cusSubject.length;
        var regex = /^[A-Za-z0-9]+(?: [A-Za-z0-9]+)*(?:\.[A-Za-z0-9]+)?$/;
        if (length != 0) {
            if (regex.test(cusSubject) && cusSubject != "") {
                $("#serviceSub").attr("class", "form-control error");
                $('#serviceSub-errorLabel').css('display', 'none').text("");
                $('#serviceSub').val(cusSubject);
                return true;
            }
            else {
                $("#serviceSub").attr("class", "form-control error");
                $('#serviceSub-errorLabel').css('display', 'block').text('Please Enter a Valid Subject');
                return false;
            }
        }
        else {
            $("#serviceSub").attr("class", "form-control error");
            $('#serviceSub-errorLabel').css('display', 'block').text('');
            return false;
        }
    }

    function trimSpacesOnBlur(id) {
        var $input = $('#' + id);
        const value = $input.val();
        // Trim leading and trailing spaces
        $input.val($.trim(value));
    }

    $('#serviceSub').on('blur', function () {
        validateSubject();
        trimSpacesOnBlur('serviceSub');
    });

    $("#serviceSub").on('input', function () {
        $('#serviceSub-errorLabel').css('display', 'none').text("");
        this.value = this.value.replace(/^\s+/, '');
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
        popup.classList.add("open-popup");
        if (popup.classList.contains("open-popup")) {
            document.querySelector("#closePopup0").focus();
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
                <td style="padding: 10px; border-bottom: 1px solid #ddd; text-transform:capitalize;">${name}</td>
                </tr>
                <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">Mail-ID:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${num}</td>
                </tr>
				<tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">Mobile Number:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${mail}</td>
                </tr>
                <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">Subject:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${subject}</td>
                </tr>
                <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">Project Details:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${msg}</td>
                </tr>
                </table>
            </center>`;
        Email.send({
            SecureToken: "43b9e9f4-c4ca-4b5e-a846-c43c61f9f360",
            To: 'sjkumarsri@gmail.com',
            From: "sjkumarsri@gmail.com",
            Subject: name,
            Body: body
        })
    }

    // $("#serviceName").on('input', function () {

    //     var originalValue = $("#serviceName").data('original-value');
    //     if (originalValue === undefined) {
    //         originalValue = $("#serviceName").val();
    //         $("#serviceName").data('original-value', originalValue);
    //     }

    //     var value = $("#serviceName").val();
    //     var regexName = /^[a-zA-Z.]+(?: [a-zA-Z.]+)*$/i; // Allow multiple words separated by a space

    //     if (!regexName.test(value)) {
    //         value = value.replace(/[^a-zA-Z. ]+/g, ''); // Remove special characters
    //         value = value.replace(/\s+/g, ' ').trim(); // Replace multiple spaces with a single space and trim extra spaces
    //         $("#serviceName").val(value);
    //     } else {
    //         $("#serviceName").data('original-value', value);
    //     }
    // });

    $("#serviceNum").on('input', function () {
        var value = $(this).val();
        var regexNumber = /^[-+0-9 ]*$/i;
        if (!regexNumber.test($(this).val())) {
            value = value.replace(/[^-+0-9]+/g, '');
            value = value.replace(/^[. ]+/g, '');
            $(this).val(value);
        }
    });

    var SubmitFlag = true;
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
        if (($("#callus").valid()) && (emailValid()) && (MobileNum()) && (validateName() === true) && (validateSubject() === true)) {
            if (SubmitFlag === true) {
                callBack();
            }
        }
        else {
            // emailValid();
            // MobileNum();
            focusNextEmptyField();
        }
        SubmitFlag = false;
    });
})(jQuery);