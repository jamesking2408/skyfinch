(function ($) {
    "use strict";
    $("#cus_Form").validate({
        rules: {
            customerName: {
                required: true
            },
            customerNum: {
                required: true
            },
            customerMail: {
                required: true
            },
            customerCompy: {
                required: true
            },
            customerJob: {
                required: true
            },
            customerCountry: {
                required: true
            },
            customerProduct: {
                required: true
            },
            customerPlan: {
                required: true
            },
            customerText: {
                maxlength: 250
            }
        },
        messages: {
            customerName: {
                required: "Name must be entered"
            },
            customerNum: {
                required: "Mobile Number must be entered"
            },
            customerMail: {
                required: "Email ID must be entered"
            },
            customerCompy: {
                required: "Company must be entered"
            },
            customerJob: {
                required: "Job title must be entered"
            },
            customerCountry: {
                required: "Country must be entered"
            },
            customerProduct: {
                required: "Products must be entered"
            },
            customerPlan: {
                required: "Plan & Price must be entered"
            }
        },
        errorElement: 'em',
        highlight: function (element, errorClass) {
            $(element).parent().addClass('has-danger')
            $(element).addClass('form-control-danger')
        }, errorPlacement: function (label, element) {
            if (element.parent('.input-data').length) {
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
    $('#msg').keyup(function () {
        var caps = $('#msg').val();
        caps = caps.charAt(0).toUpperCase() + caps.slice(1);
        $('#msg').val(caps);
    });
    function emailValid() {
        SubmitFlag = true;
        var email = $('#customerMail').val();
        if (email != "") {
            // Regular expression for basic email validation
            var regex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

            if (email.toLowerCase() === "info@skyfinch.com") {
                $("#customerMail").attr("class", "form-control error");
                $("#customerMail-errorLabel").text('Please Enter your Email ID');
                $("#customerMail-errorLabel").attr("style", "display: block;");
                $("#customerMail").val();
                $('#customerMail').attr('aria-invalid', 'true');
                return false;
            }
            if (regex.test(email)) {
                $("#customerMail").attr("class", "form-control");
                $("#customerMail-errorLabel").text('');
                $("#customerMail-errorLabel").attr("style", "display: none;");
                $('#customerMail').attr('aria-invalid', 'false');
                return true;
            }
            else {
                $("#customerMail").attr("class", "form-control error");
                $("#customerMail-errorLabel").text('Please Enter Valid Email ID');
                $("#customerMail-errorLabel").attr("style", "display: block;");
                $("#customerMail").val();
                $('#customerMail').attr('aria-invalid', 'true');
                return false;
            }
        }
        else {
            $("#customerMail").attr("class", "form-control");
            $("#customerMail-errorLabel").text('');
            $("#customerMail-errorLabel").attr("style", "display: none;");
            return true;
        }
    }
    $('#customerMail').on('blur', function () {
        emailValid();
    });
    $("#customerMail").on('input', function () {
        $('#customerMail-errorLabel').css('display', 'none').text("");
        this.value = this.value.replace(/^\s+/, '');
    });
    function MobileNum() {
        SubmitFlag = true;
        var mobNo = $("#customerNum").val().trim();
        var length = mobNo.length;
        var regex = /^(?:\+?91|00|0)?[-. ]??[6789]\d{9}$/;
        if (length !== 0) {
            if (regex.test(mobNo)) {
                $("#customerNum-errorLabel").css('display', 'none').text("");
                $("#customerNum").val(mobNo);
                const ourMobNo = mobNo.slice(-10);
                if (ourMobNo == 9443487210 || ourMobNo == 8220017918) {
                    $("#customerNum-errorLabel").css('display', 'block').text("Please Enter your Mobile Number.");
                    $("#customerNum").val();
                    $('#customerNum').attr('aria-invalid', 'true');
                    return false;
                }
                else {
                    $('#customerNum').attr('aria-invalid', 'false');
                    return true;
                }
            } else {
                $("#customerNum-errorLabel").css('display', 'block').text("Please Enter a Valid Mobile Number.");
                $("#customerNum").val();
                $('#customerNum').attr('aria-invalid', 'true');
                return false;
            }
        } else {
            $("#customerNum-errorLabel").css('display', 'none').text("");
            return true;
        }
    }
    $("#customerNum").on('blur', function () {
        MobileNum();
    });
    $("#customerNum").on('input', function () {
        $('#customerNum-errorLabel').css('display', 'none').text("");
        var value = $(this).val();
        value = value.replace(/\s+/g, '');
        $(this).val(value.toLowerCase());
    });

    function validateName() {
        SubmitFlag = true;
        var cusName = $("#customerName").val();
        var cusNameTrim = $.trim(cusName); // Trim whitespace from both ends
        var regex = /^[A-Za-z]+(?: [A-Za-z]+)*(?:\.[A-Za-z]+)?$/; // Regex pattern to allow one dot

        if (cusNameTrim === "") {
            // If the trimmed name is empty
            $("#customerName").removeClass("error"); // Add error class
            $('#customerName-errorLabel').css('display', 'block').text(''); // Show error message
            $('#customerName').attr('aria-invalid', 'true');
            return false;
        } else {
            // If the trimmed name is not empty
            if (regex.test(cusNameTrim)) {
                // If the name matches the regex
                $('#customerName').val(cusNameTrim); // Set trimmed value
                $("#customerName").removeClass("error").addClass("form-control"); // Remove error class, add form-control class
                $('#customerName-errorLabel').css('display', 'none').text(""); // Hide error message
                $('#customerName').attr('aria-invalid', 'false');
                return true;
            } else {
                // If the name does not match the regex
                $("#customerName").addClass("error"); // Add error class
                $('#customerName-errorLabel').css('display', 'block').text('Please Enter a Valid Name'); // Show error message
                $('#customerName').attr('aria-invalid', 'true');
                return false;
            }
        }
    }

    // Validate on blur event (when the input loses focus)
    $('#customerName').on('blur', function () {
        validateName();
        trimSpacesOnBlur('customerName');
    });

    // Clear error message on input event (when typing)
    $("#customerName").on('input', function () {
        $('#customerName-errorLabel').css('display', 'none').text(""); // Hide error message
        $("#customerName").removeClass("error"); // Remove error class
        var regexName = /^[a-zA-Z .]*$/;
        var value = $(this).val();
        if (!regexName.test(value)) {
            $(this).val(value.replace(/[^a-zA-Z .]/g, ''));
        }
    });

    $("#customerNum").on('input', function () {
        var regexNumber = /^[-+0-9 ]*$/i;
        if (!regexNumber.test($(this).val())) {
            $(this).val(function (_, value) {
                return value.slice(0, -1);
            });
        }
    });

    function trimSpacesOnBlur(id) {
        var $input = $('#' + id);
        const value = $input.val();
        // Trim leading and trailing spaces
        $input.val($.trim(value));
    }

    function validateCompanyInput() {
        var $input = $('#customerCompy');
        const value = $input.val();
        // Define regex to allow letters, numbers, spaces, and specific symbols
        var regexCompany = /^[a-zA-Z0-9 &().-]*$/;
        if (!regexCompany.test(value)) {
            // Replace invalid characters
            $input.val(value.replace(/[^a-zA-Z0-9 &().-]/g, ''));
        }
    }

    $('#customerCompy').on('input', function () {
        validateCompanyInput();
    }).on('blur', function () {
        trimSpacesOnBlur('customerCompy');
    });

    function validateJobInput() {
        var $input = $('#customerJob');
        const value = $input.val();
        var regexJob = /^[a-zA-Z\s,.-]*$/;
        if (!regexJob.test(value)) {
            $input.val(value.replace(/[^a-zA-Z\s,.-]/g, ''));
        }
    }

    $('#customerJob').on('input', function () {
        validateJobInput();
    }).on('blur', function () {
        trimSpacesOnBlur('customerJob');
    });

    function validateCountryInput() {
        SubmitFlag = true;
        var cusName = $("#customerCountry").val();
        var cusNameTrim = $.trim(cusName);
        var regex = /^[A-Za-z]+(?:\s[A-Za-z]+)*(?:\.[A-Za-z]+)*$/;

        if (cusNameTrim === "") {
            // If the trimmed name is empty
            $("#customerCountry").removeClass("error"); // Add error class
            $('#customerCountry-errorLabel').css('display', 'block').text(''); // Show error message
            $('#customerCountry').attr('aria-invalid', 'true');
            return false;
        } else {
            // If the trimmed name is not empty
            if (regex.test(cusNameTrim)) {
                // If the name matches the regex
                $('#customerCountry').val(cusNameTrim); // Set trimmed value
                $("#customerCountry").removeClass("error").addClass("form-control"); // Remove error class, add form-control class
                $('#customerCountry-errorLabel').css('display', 'none').text(""); // Hide error message
                $('#customerCountry').attr('aria-invalid', 'false');
                return true;
            } else {
                // If the name does not match the regex
                $("#customerCountry").addClass("error"); // Add error class
                $('#customerCountry-errorLabel').css('display', 'block').text('Please Enter a Valid Name'); // Show error message
                $('#customerCountry').attr('aria-invalid', 'true');
                return false;
            }
        }
    }

    // Validate on blur event (when the input loses focus)
    $('#customerCountry').on('blur', function () {
        validateCountryInput();
        trimSpacesOnBlur('customerCountry');
    });

    // Clear error message on input event (when typing)
    $("#customerCountry").on('input', function () {
        $('#customerCountry-errorLabel').css('display', 'none').text(""); // Hide error message
        $("#customerCountry").removeClass("error"); // Remove error class
        var regexName = /^[a-zA-Z .]*$/;
        var value = $(this).val();
        if (!regexName.test(value)) {
            $(this).val(value.replace(/[^a-zA-Z .]/g, ''));
        }
    });

    function validateProductInput() {
        var $input = $('#customerProduct');
        const value = $input.val();
        var regexProducts = /^[a-zA-Z\s,.]*$/;
        if (!regexProducts.test(value)) {
            $input.val(value.replace(/[^a-zA-Z\s,.]/g, ''));
        }
    }
    $('#customerProduct').on('input', function () {
        validateProductInput();
    }).on('blur', function () {
        trimSpacesOnBlur('customerProduct');
    });

    function validatePlanInput() {
        var $input = $('#customerPlan');
        const value = $input.val();
        var regexPlan = /^[a-zA-Z0-9\s\-.,/()&]*$/;
        if (!regexPlan.test(value)) {
            $input.val(value.replace(/[^a-zA-Z0-9\s\-.,/()&]/g, ''));
        }
    }
    $('#customerPlan').on('input', function () {
        validatePlanInput();
    }).on('blur', function () {
        trimSpacesOnBlur('customerPlan');
    });

    let popup = document.querySelector("#pop");
    function prodEnquiry() {
        let cus_Name = document.querySelector("#customerName").value;
        let cus_Num = document.querySelector("#customerNum").value;
        let cus_Mail = document.querySelector("#customerMail").value;
        let cus_Compy = document.querySelector("#customerCompy").value;
        let cus_Job = document.querySelector("#customerJob").value;
        let cus_Cont = document.querySelector("#customerCountry").value;
        let cus_Sales = document.querySelector("#customerProduct").value;
        let cus_Price = document.querySelector("#customerPlan").value;
        let cus_Txt = document.querySelector("#customerText").value;
        document.querySelector(".sub-popup h2").innerHTML = "Congrats!";
        document.querySelector(".sub-popup p").innerHTML = "Your details submitted successfully. ";
        popup.classList.add("open-popup");
        if (popup.classList.contains("open-popup")) {
            $('#prodEnquiry').prop('disabled', true);
            setTimeout(function () {
                $('.exit').focus();
            }, 100);
        }
        var body = `
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
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${cus_Name}</td>
                </tr>
                <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">Mobile Number:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${cus_Num}</td>
                </tr>
				<tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">Mail-ID:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${cus_Mail}</td>
                </tr>
                <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">Company:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${cus_Compy}</td>
                </tr>
                <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">Job Title:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${cus_Job}</td>
                </tr>
                <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">Country:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${cus_Cont}</td>
                </tr>
                <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">Products:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${cus_Sales}</td>
                </tr>
                <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">Plan&Price:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${cus_Price}</td>
                </tr>
                <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; border-right: 1px solid #ddd;">Comments:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${cus_Txt}</td>
                </tr>
                </table>
            </center>`;
        Email.send({
            SecureToken: "43b9e9f4-c4ca-4b5e-a846-c43c61f9f360",
            To: 'sjkumarsri@gmail.com',
            From: "sjkumarsri@gmail.com",
            Subject: cus_Name,
            Body: body
        })
    }

    var SubmitFlag = true;
    $("#prodEnquiry").on('click', function () {
        var fields = ["#customerName", "#customerNum", "#customerMail", "#customerCompy", "#customerJob", "#customerCountry", "#customerProduct", "#customerPlan"];
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
        if (($("#cus_Form").valid() && (emailValid()) && (MobileNum()) && (validateName() === true) && (validateCountryInput() === true))) {
            if (SubmitFlag === true) {
                prodEnquiry();
                SubmitFlag = false;
            }
        }
        else {
            emailValid();
            MobileNum();
            focusNextEmptyField();
            SubmitFlag = true;
        }
    });
    function resetFormProduct() {
        document.cus_Form.reset();
        $("label.error").css('display', 'none').text("");
    }
    $("#resetFormProduct").on('click', function () {
        // $(".error").remove();
        var validator = $("#cus_Form").validate();
        validator.resetForm();
        resetFormProduct();
    });
})(jQuery);
document.querySelector(".exit").addEventListener("click", closePopupPq);
function closePopupPq() {
    let popup = document.querySelector(".open-popup");
    if (popup) {
        popup.classList.remove("open-popup");
    }
    document.cus_Form.reset();
    $("#prodEnquiry").prop('disabled', false);
}
document.addEventListener('DOMContentLoaded', function () {
    var selectedPlanName = localStorage.getItem('selectedPlanName');
    var selectedPlanPrice = localStorage.getItem('selectedPlanPrice');
    if ((selectedPlanPrice === ' ') && (selectedPlanName === ' ')) {
        document.querySelector('#customerPlan').value = "";
        document.querySelector('#customerProduct').value = "";
    } else if (selectedPlanPrice === ' ') {
        document.querySelector('#customerProduct').value = selectedPlanName;
        document.querySelector('#customerPlan').value = "";
    } else if (selectedPlanName === ' ') {
        document.querySelector('#customerProduct').value = "";
        document.querySelector('#customerPlan').value = selectedPlanPrice;
    } else {
        document.querySelector('#customerPlan').value = selectedPlanPrice;
        document.querySelector('#customerProduct').value = selectedPlanName;
    }
});