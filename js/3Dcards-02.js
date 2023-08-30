
const cards = document.querySelectorAll('.cards');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

const setClasses = () => {
    const classes = ['left', 'active', 'right'];
    cards.forEach((card, index) => card.classList.add(classes[index]));
};


// Button click move to right or left

const changePositions = (direction) => {
    const activeCard = document.querySelector('.cards.active');
    const activeIndex = Array.from(cards).indexOf(activeCard);

    if (direction === 'left') {
        const targetIndex = (activeIndex + cards.length - 1) % cards.length;
        setTransform(activeCard, cards[targetIndex]);
        swapClasses(activeCard, cards[targetIndex]);
    } else if (direction === 'right') {
        const targetIndex = (activeIndex + 1) % cards.length;
        setTransform(activeCard, cards[targetIndex]);
        swapClasses(activeCard, cards[targetIndex]);
    }
};

const setTransform = (fromCard, toCard) => {
    const tempTransform = fromCard.style.transform;
    fromCard.style.transform = toCard.style.transform;
    toCard.style.transform = tempTransform;
};


const swapClasses = (card1, card2) => {
    const tempClass = card1.className;
    card1.className = card2.className;
    card2.className = tempClass;

        // Update active card's styles
        card1.classList.remove('active');
        card2.classList.add('active');
};

leftButton.addEventListener('click', () => {
    changePositions('left');
});

rightButton.addEventListener('click', () => {
    changePositions('right');
});

// hover on the cards they will mover

const changePositions1 = (e) => {
    const clickedCard = e.currentTarget
    const activeCard = document.querySelector('.cards.active')
    if(clickedCard.classList.contains('active')) return;
    const classesFrom = e.currentTarget.className
    const classesTo = activeCard.className
    clickedCard.className = classesTo
    activeCard.className = classesFrom
}

cards.forEach((card) => {
    card.addEventListener('click', changePositions1)
})

setClasses();
