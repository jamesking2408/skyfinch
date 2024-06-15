// <!-- shuffle button start -->
//  JavaScript to handle button clicks / Button click move to right or left
document.addEventListener('DOMContentLoaded', function () {
    // Get the radio buttons and buttons
    const radioButtons = document.querySelectorAll('input[name="slider"]');
    const leftButton = document.getElementById('left-button');
    const rightButton = document.getElementById('right-button');

    // Function to go to the next slide
    function nextSlide() {
        const checkedIndex = Array.from(radioButtons).findIndex(input => input.checked);
        const nextIndex = (checkedIndex + 1) % radioButtons.length;
        radioButtons[nextIndex].checked = true;
    }

    // Function to go to the previous slide
    function previousSlide() {
        const checkedIndex = Array.from(radioButtons).findIndex(input => input.checked);
        const previousIndex = (checkedIndex - 1 + radioButtons.length) % radioButtons.length;
        radioButtons[previousIndex].checked = true;
    }

    function changeBg() {
        document.querySelector(".bg-00").classList.toggle('blue');
    }

    // Function to handle keyboard arrow keypress
    function handleKeyPress(event) {
        switch (event.key) {
            case 'ArrowLeft':
                previousSlide();
                changeBg();
                break;
            case 'ArrowRight':
                nextSlide();
                changeBg();
                break;
            default:
                // Do nothing for other keys
                break;
        }
    }

    // Add event listeners to the buttons
    leftButton.addEventListener('click', function () {
        previousSlide();
        changeBg();
    });
    rightButton.addEventListener('click', function () {
        nextSlide();
        changeBg();
    });

    // Add event listener for keyboard arrow keypress
    document.addEventListener('keydown', handleKeyPress);
});