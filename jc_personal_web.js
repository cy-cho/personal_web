// clickToTop
const clickToTopBtn = document.querySelector("#clickToTopBtn");

clickToTopBtn.addEventListener('click', () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
})