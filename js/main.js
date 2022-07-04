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
new Swiper('.promotion .swiper', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: { // 자동 재생 여부
      delay: 5000 // 5초마다 슬라이드 바뀜
    },
    loop: true, // 반복 재생 여부
    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    pagination: { // 페이지 번호 사용
      el: '.promotion .swiper-pagination', // 페이지 번호 요소
      clickable: true // 사용자의 페이지 번호 제어 여부
    },
    navigation: { // 슬라이드 이전/다음 버튼 사용
        prevEl: '.promotion .swiper-button-prev', // 이전 버튼 요소
        nextEl: '.promotion .swiper-button-next' // 다음 버튼 요소
      }
});
new Swiper('.awards .swiper', {
    autoplay: true, // 자동 재생 여부
    loop: true, // 반복 재생 여부
    spaceBetween: 30, // 슬라이드 사이 여백
    slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
    navigation: { // 슬라이드 이전/다음 버튼 사용
      prevEl: '.awards .swiper-button-prev', // 이전 버튼 요소
      nextEl: '.awards .swiper-button-next' // 다음 버튼 요소
    }
  });
gsap.to('.floating1', 1.5, {
    delay: 1,
    y: 15,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut
});
gsap.to('.floating2', 2, {
    delay: 1,
    y: 15,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut
});
gsap.to('.floating3', 2.5, {
    delay: 1,
    y: 15,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut
});
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
