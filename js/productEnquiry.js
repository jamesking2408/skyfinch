(function ($) {
    "use strict";
    $("#cus_Form").validate({
        rules: {
            customerName: {
                required: true
            },
            customerNum: {
                required: true,
                maxlength: 15
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
                required: "Phone Number must be entered"
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
        var email = $('#customerMail').val();
        if (email != "" && email != null) {
            if (/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i.test(email)) {
                $("#customerMail").attr("class", "form-control");
                $("#customerMail-errorLabel").text('');
                $("#customerMail-errorLabel").attr("style", "display: none;");
                return true;
            }
            else {
                $("#customerMail").attr("class", "form-control error");
                $("#customerMail-errorLabel").text('Please enter valid Email ID');
                $("#customerMail-errorLabel").attr("style", "display: block;");
                $("#customerMail").val();
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
    });
    function MobileNum() {
        var mobNo = $("#customerNum").val().trim();
        var length = mobNo.length;
        var regex = /^(?:\+?\d{1,3})?(\s*[\-]\s*)?[1-9]\d{9,14}$/;
        if (length !== 0) {
            if (regex.test(mobNo)) {
                $("#customerNum-errorLabel").css('display', 'none').text("");
                $("#customerNum").val(mobNo);
                return true;
            } else {
                $("#customerNum-errorLabel").css('display', 'block').text("Please enter a valid Phone Number.");
                $("#customerNum").val();
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
    });
    let popup = document.querySelector("#pop");
    function prodEnquiry() {
        let cus_name = document.querySelector("#customerName").value;
        let num = document.querySelector("#customerNum").value;
        let mail = document.querySelector("#customerMail").value;
        let compy = document.querySelector("#customerCompy").value;
        let job = document.querySelector("#customerJob").value;
        let cont = document.querySelector("#customerCountry").value;
        let sales = document.querySelector("#customerProduct").value;
        let price = document.querySelector("#customerPlan").value;
        let txt = document.querySelector("#customerText").value;
        document.querySelector(".sub-popup h2").innerHTML = "Congrats!";
        document.querySelector(".sub-popup p").innerHTML = "Your details submitted successfully. ";
        popup.classList.add("open-popup");
        console.log(cus_name);
        var body = "<center><h1 style='color:#355EFC; font-family: 'Times New Roman', serif;'>SKYFINCH WEBSITE</h1></center>" +
            "<br><center><h3>CUSTOMER DETAILS</h3></center>" +
            "<center><table>" +
            "  <tr><td>Name:</td><td>" + cus_name + "</td></tr>" +
            "  <tr><td>Phone Number:</td><td>" + num + "</td></tr>" +
            "  <tr><td>Mail ID:</td><td>" + mail + "</td></tr>" +
            "  <tr><td>Company:</td><td>" + compy + "</td></tr>" +
            "  <tr><td>Job:</td><td>" + job + "</td></tr>" +
            "  <tr><td>Country:</td><td>" + cont + "</td></tr>" +
            "  <tr><td>Sales:</td><td>" + sales + "</td></tr>" +
            "  <tr><td>Price:</td><td>" + price + "</td></tr>" +
            "  <tr><td>Project Details:</td><td>" + txt + "</td></tr>" +
            "</table></center>";
        // Email.send({
        //     SecureToken: "43b9e9f4-c4ca-4b5e-a846-c43c61f9f360",
        //     To: 'mktg@skyfinch.com',
        //     From: "sjkumarsri@gmail.com",
        //     Subject: mail,
        //     Body: body
        // })
    }
    $("#customerName").on('input', function () {
        var regexName = /^[a-zA-Z .]*$/i;
        if (!regexName.test($(this).val())) {
            $(this).val(function (_, value) {
                return value.slice(0, -1);
            });
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
    $("#customerCompy").on('input', function () {
        var regexCompany = /^[a-zA-Z 0-9 & ()-.]*$/i;
        if (!regexCompany.test($(this).val())) {
            $(this).val(function (_, value) {
                return value.slice(0, -1);
            });
        }
    });
    $("#prodEnquiry").on('click', function () {
        var fields = ["#customerName", "#customerNum", "#customerMail", "#customerCompy", "#customerJob", "#customerCountry", "#customerProduct", "#customerPlan"];
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
        if (($("#cus_Form").valid() && (emailValid()) && (MobileNum()))) {
            prodEnquiry();
        }
        else {
            emailValid();
            MobileNum();
            focusNextEmptyField();
        }
    });
    function resetFormProduct() {
        document.cus_Form.reset();
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