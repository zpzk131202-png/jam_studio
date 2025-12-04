// 1. 게임 데이터 정의 (실제로는 API/DB에서 로드)
const gamesData = [
    { 
        id: 1, 
        title: "깍두기 방어", 
        genre: "디펜스", 
        platform: "모바일", 
        thumbnail: "https://via.placeholder.com/300x200?text=Game+1" 
    },
];

// 2. 게임 카드 동적 생성 및 렌더링 함수
function renderGameCards() {
    const gameListContainer = document.getElementById('game-list');
    
    gamesData.forEach(game => {
        const card = document.createElement('div');
        card.classList.add('game-card');
        card.setAttribute('data-game-id', game.id);

        card.innerHTML = `
            <img src="${game.thumbnail}" alt="${game.title} 썸네일">
            <div class="card-content">
                <h4>${game.title}</h4>
                <p>장르: ${game.genre}</p>
                <p>플랫폼: ${game.platform}</p>
            </div>
        `;
        gameListContainer.appendChild(card);
        
        // 클릭 이벤트 리스너 수정: alert() 삭제
        card.addEventListener('click', () => {
             // 여기에 실제 상세 페이지로 이동하는 코드 (예: window.location.href = `/game/${game.id}`;) 를 추가할 수 있습니다.
             console.log(`[${game.title}] 클릭됨. 상세 페이지로 이동 준비.`);
        });
    });
}

// 3. 스크롤 시 페이드인 애니메이션 (CSS와 연동)
function setupScrollAnimation() {
    const sections = document.querySelectorAll('.content-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); 
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// 페이지 로드 완료 시 모든 함수 실행
document.addEventListener('DOMContentLoaded', () => {
    renderGameCards();
    setupScrollAnimation();
});