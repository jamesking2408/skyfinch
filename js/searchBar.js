// JavaScript code
// Auto focus will locate main.js page
// focus input field
function jumpToMain(sectionId) {
    const url = new URL('/index.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToService(sectionId) {
    const url = new URL('/service.html', window.location.origin);
    url.hash = '#' + sectionId;
    window.location.href = url.href;
}
function jumpToAbout(sectionId) {
    const url = new URL('/about.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToContact(sectionId) {
    const url = new URL('/contact.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToSales(sectionId) {
    const url = new URL('/sales.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToHms(sectionId) {
    const url = new URL('/hms.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToRms(sectionId) {
    const url = new URL('/rms.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToSsfinch(sectionId) {
    const url = new URL('/ssfinch.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToVms(sectionId) {
    const url = new URL('/vms.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToCrm(sectionId) {
    const url = new URL('/crm.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToCtm(sectionId) {
    const url = new URL('/ctm.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToEms(sectionId) {
    const url = new URL('/ems.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToFms(sectionId) {
    const url = new URL('/fms.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToPms(sectionId) {
    const url = new URL('/payroll.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToSs(sectionId) {
    const url = new URL('/sands.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToProfile(sectionId) {
    const url = new URL('/profile.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToPp(sectionId) {
    const url = new URL('/privacy_policy.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToAp(sectionId) {
    const url = new URL('/confidentality_policy.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToCp(sectionId) {
    const url = new URL('/anti_spam.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function jumpToTerm(sectionId) {
    const url = new URL('/term_use.html', window.location.origin);
    const link = `${url}#${sectionId}`;
    window.location.href = link;
}
function searchContent() {
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('content');

    for (let i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "list-item";
        }
    }
}

let currentResult = 0;

function highlightResult(resultIndex) {
    let x = document.getElementsByClassName('content');
    for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("highlighted");
    }
    x[resultIndex].classList.add("highlighted");
}

let timeout;
function debounce(func, wait) {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
}

document.getElementById('searchbar').addEventListener('input', function () {
    currentResult = 0;
    debounce(searchContent, 300);
});

document.getElementById('searchbar').addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchContent();
    } else if (event.key === "ArrowDown") {
        event.preventDefault();
        navigateResults(1);
    } else if (event.key === "ArrowUp") {
        event.preventDefault();
        navigateResults(-1);
    }
});

function navigateResults(direction) {
    let x = document.getElementsByClassName('content');

    if (x.length > 0) {
        x[currentResult].classList.remove("highlighted");

        currentResult += direction;

        if (currentResult < 0) {
            currentResult = x.length - 1;
        } else if (currentResult >= x.length) {
            currentResult = 0;
        }

        x[currentResult].classList.add("highlighted");
    }
}









