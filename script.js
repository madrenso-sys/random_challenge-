const btn = document.getElementById('roll-button');
const cards = [
    document.getElementById('card1'),
    document.getElementById('card2'),
    document.getElementById('card3')
];

btn.addEventListener('click', function() {
    btn.disabled = true;

    cards.forEach((card, index) => {
        // 경로에서 images/ 제거
        card.src = 'BACK.png';
        card.classList.remove('flipping');
        card.classList.add('shaking');

        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * 45) + 1;
            // 경로에서 images/ 제거
            card.src = `카드_${randomNum}.png`;
            
            card.classList.remove('shaking');
            card.classList.add('flipping');

            if (index === 2) {
                setTimeout(() => { btn.disabled = false; }, 500);
            }
        }, 600 + (index * 400));
    });
});
