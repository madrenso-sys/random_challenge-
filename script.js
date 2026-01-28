const btn = document.getElementById('roll-button');
const cards = [
    document.getElementById('card1'),
    document.getElementById('card2'),
    document.getElementById('card3')
];

btn.addEventListener('click', function() {
    // 버튼 중복 클릭 방지
    btn.disabled = true;

    cards.forEach((card, index) => {
        // 1. 애니메이션 초기화 및 뒷면 이미지 설정
        card.src = 'BACK.png'; 
        card.classList.remove('flipping');
        card.classList.add('shaking');

        // 2. 카드별로 순차적으로 결과 공개 (딜레이 부여)
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * 45) + 1;
            
            // 한글 파일명을 안전하게 인코딩합니다.
            // 파일명이 정확히 '카드_1.png' 형식이어야 합니다.
            const fileName = `카드_${randomNum}.png`;
            
            // encodeURI를 사용해 '카드'라는 한글을 브라우저용 주소로 변환합니다.
            card.src = encodeURI(fileName);
            
            // 흔들기 멈추고 뒤집기 효과 적용
            card.classList.remove('shaking');
            card.classList.add('flipping');

            // 마지막 세 번째 카드까지 완료되면 버튼 다시 활성화
            if (index === 2) {
                setTimeout(() => {
                    btn.disabled = false;
                }, 500);
            }
        }, 600 + (index * 400)); // 0.6초, 1.0초, 1.4초 간격
    });
});
