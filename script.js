const btn = document.getElementById('roll-button');
const cards = [
    document.getElementById('card1'),
    document.getElementById('card2'),
    document.getElementById('card3')
];

btn.addEventListener('click', function() {
    // 버튼 비활성화 (연타 방지)
    btn.disabled = true;

    cards.forEach((card, index) => {
        // 1. 초기화: 뒷면으로 돌리고 흔들기
        card.src = 'BACK.png';
        card.classList.remove('flipping');
        card.classList.add('shaking');

        // 2. 시간차를 두고 결과 공개
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * 45) + 1;
            
            // 파일명이 '카드_1.png'일 경우를 대비한 안전한 주소 변환
            const fileName = `카드_${randomNum}.png`;
            card.src = encodeURI(fileName);
            
            card.classList.remove('shaking');
            card.classList.add('flipping');

            // 마지막 카드까지 나오면 버튼 재활성화
            if (index === 2) {
                setTimeout(() => { 
                    btn.disabled = false; 
                }, 500);
            }
        }, 500 + (index * 400)); 
    });
});
