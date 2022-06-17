// 검색창 요서(.search) 찾기.
const searchEl = document.querySelector('.search');
const searchElnputEl = searchEl.querySelector('input');
//const searchMainMenu = document.querySelector('main-menu');
//검색할 요소를 클릭하면 실행.
searchEl.addEventListener('click', function () {
    searchElnputEl.focus();
});
//검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchElnputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchElnputEl.setAttribute('placeholder', '통합검색');
});
//검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchElnputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchElnputEl.setAttribute('placeholder', '');
});
//페이지 스크롤에 따른 요소 제어//
const badgeEl= document.querySelector('header .badges');

window.addEventListener('scroll', function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        //Badge 요소 숨기기!
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    } else {
        // Bagde 요소 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
});

//나타날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
//요소들을 하나씩 반복해서 처리! 
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1 
    });
});


new Swiper('.notice .swiper', {
    direction: 'vertical', //수직 슬라이드 
    autoplay: true, //자동 재생 여부 
    loop: true //반복 재생 여부
});
new Swiper('.promotion .swiper',{
    // disrection: 'horizontal', // 수평 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true, // 반복 재생 여부
    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수 
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true // 1번 슬라이닥 가운데 보이기
});