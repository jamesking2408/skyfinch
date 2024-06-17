// JavaScript code
// Auto focus will locate main.js page
// focus input field
function jumpToMain(sectionId) {
    const url = new URL('./index.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToService(sectionId) {
    const url = new URL('./service.html', window.location.origin);
    url.hash = '#' + sectionId;
    window.location.href = url.href;
}
function jumpToAbout(sectionId) {
    const url = new URL('./about.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToContact(sectionId) {
    const url = new URL('./contact.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToSales(sectionId) {
    const url = new URL('./sales.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToHms(sectionId) {
    const url = new URL('./hms.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToRms(sectionId) {
    const url = new URL('./rms.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToSsfinch(sectionId) {
    const url = new URL('./ssfinch.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToVms(sectionId) {
    const url = new URL('./vms.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToCrm(sectionId) {
    const url = new URL('./crm.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToCtm(sectionId) {
    const url = new URL('./ctm.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToEms(sectionId) {
    const url = new URL('./ems.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToFms(sectionId) {
    const url = new URL('./fms.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToPms(sectionId) {
    const url = new URL('./payroll.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToSs(sectionId) {
    const url = new URL('./sands.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToProfile(sectionId) {
    const url = new URL('./profile.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToPp(sectionId) {
    const url = new URL('./privacy.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToAp(sectionId) {
    const url = new URL('./confidentality.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToCp(sectionId) {
    const url = new URL('./antiSpam.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToTerm(sectionId) {
    const url = new URL('./termsUse.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToPq(sectionId) {
    const url = new URL('./planandPrice.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToProduct(sectionId) {
    const url = new URL('./products.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToContactUs(sectionId) {
    const url = new URL('./contactUs.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
let searchInput = document.getElementById("searchbar");
let inputMessage = document.getElementById("input-message");
searchInput.addEventListener("keyup", function () {
    document.querySelector('#content-3').scrollTo(0, 0); // Scroll to the top of the page
    searchContent();
    searchURL();
    currentListUrl();
});
function searchContent() {
    const userInput = (searchInput.value || '').toLowerCase();
    const contentElements = document.getElementsByClassName('content');
    let count = 0;
    for (let i = 0; i < contentElements.length; i++) {
        const contentText = contentElements[i].innerHTML.toLowerCase();
        const contentDisplay = contentText.includes(userInput) ? "list-item" : "none";
        const modalBody = document.querySelector('#content-3');
        contentElements[i].style.display = contentDisplay;
        count += contentDisplay === "none" ? 0 : 1;
        if (/^\s*$/.test(userInput)) {
            modalBody.style.display = "none";
        }
        else {
            modalBody.style.display = "block";
        }
    }
    highlight(userInput);
    setInputMessage(userInput === "" ? "" : count);
}
function setInputMessage(n) {
    let message = '';
    let userInput = (searchInput.value || '').toLowerCase();
    let emptySpaces = /^\s*$/.test(userInput);
    if (typeof n === "number") {
        if (!n || emptySpaces === true) {
            message = "No results found.";
        } else {
            message = `${n} result${n === 1 ? "" : "s"} found`;
        }
    }
    inputMessage.innerHTML = message;
}
function currentListUrl() {
    var currentPageUrl = document.querySelector(".nav-item.nav-link.active");
    var currentSubPageUrl = document.querySelector(".submenu a.active");
    var anchorElements = document.querySelectorAll("ul.list-unstyled li > a");
    if (currentPageUrl) {
        anchorElements.forEach(function (element) {
            if (element.getAttribute('href') === currentPageUrl.getAttribute('href')) {
                element.parentElement.remove();
            }
        });
    } else if (currentSubPageUrl) {
        anchorElements.forEach(function (element) {
            if (element.getAttribute('href') === currentSubPageUrl.getAttribute('href')) {
                element.parentElement.remove();
            }
        });
    }
    else {
        var currentPageUrl = window.location.pathname.split("/").pop();
        anchorElements.forEach(function (element) {
            if (element.getAttribute('href') === currentPageUrl) {
                element.parentElement.remove();
            }
        });
    }
}
// Showing URL in Search list
function searchURL() {
    const elementsWithClass = document.querySelectorAll(".urlHash");
    elementsWithClass.forEach(element => {
        const urlHash = new URL(element.href);
        const domain = urlHash.origin;
        const pageName = urlHash.pathname.split("/").pop();
        const fullURL = domain + "/" + pageName;
        element.innerHTML = fullURL;
    });
}
let opars = document.querySelectorAll(".paragraph"); // Select all elements with the class .paragraph
// Create an array to store the original HTML content of each .paragraph element
let originalParagraphs = [];
opars.forEach(paragraph => {
    originalParagraphs.push(paragraph.innerHTML);
});
function highlight(search) {
    opars.forEach((paragraph, index) => {
        var re = new RegExp(search, 'gi'); // 'g' flag for global and case-insensitive search
        search = search.replace(/[.*+?^${}()|[\]\\]/gi, '\\$&');

        if (search.length > 0) {
            paragraph.innerHTML = originalParagraphs[index].replace(re, `<strong style="font-style: italic;">$&</strong>`);
        }
        else {
            paragraph.innerHTML = originalParagraphs[index];
        }
    });
}
// Search box start
$(document).ready(function () {
    var exampleModal = $("#exampleModal"),
        exampleModalClose = $(".modal-header input");

    exampleModal.on("shown.bs.modal", function () {
        document.activeElement.blur();
        exampleModalClose.focus();
    });
    $(".searchButton_cls").click(function () {
        $.scrollify.disable();
        var showing = $('.modal-backdrop');
        var showing1 = $('.modal');
        var modal_body = $('.modal-body .content');
        showing.show();
        showing1.show();
        modal_body.hide();
        document.searchForm.reset();// Erase the field
        setInputMessage(null); // Erase the no result found Element
        $('#exampleModal').on('hidden.bs.modal', function (e) {
            $.scrollify.enable();
        });
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                $.scrollify.enable();
            }
        });
        $('.searchForm .btn-close').on('click', function () {
            $.scrollify.enable();
        });
    });
    $(".searchLink").click(function () {
        var fade = $('.modal-backdrop');
        var fade1 = $('.modal');
        fade.hide();
        fade1.hide();
        $.scrollify.enable();
    });
    $(".search-deco-underline").click(function () {
        var fade = $('.modal-backdrop');
        var fade1 = $('.modal');
        fade.hide();
        fade1.hide();
        $.scrollify.enable();
    });
});