document.addEventListener('DOMContentLoaded', function () {
    // Store the scroll position when a tab is clicked
    document.querySelectorAll('a[data-bs-toggle="pill"]').forEach(function (tab) {
        tab.addEventListener('shown.bs.tab', function (event) {
            var targetId = event.target.getAttribute('href').substring(1); // activated tab id
            var targetPane = document.getElementById(targetId);
            sessionStorage.setItem('scrollPosition', targetPane.scrollTop);
        });
    });

    // Restore the scroll position when a tab is shown
    document.querySelectorAll('a[data-bs-toggle="pill"]').forEach(function (tab) {
        tab.addEventListener('shown.bs.tab', function (event) {
            var targetId = event.target.getAttribute('href').substring(1); // activated tab id
            var targetPane = document.getElementById(targetId);
            targetPane.scrollTop = sessionStorage.getItem('scrollPosition') || 0;
        });
    });
});