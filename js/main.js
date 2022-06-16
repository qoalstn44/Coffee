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