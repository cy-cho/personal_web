// clickToTop
const clickToTopBtn = document.querySelector("#clickToTopBtn")

window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if (window.scrollY < 500) {
        clickToTopBtn.style.display = "none"
    } else {
        clickToTopBtn.style.display = 'block'
    }
})

clickToTopBtn.addEventListener('click', () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
})

//portfolio slides
const slideToPrevious1 = document.querySelector('#slideToPrevious1')
const slideToNext1 = document.querySelector('#slideToNext1')
const webRWD = document.querySelector('#webRWD')
const slideToPrevious2 = document.querySelector('#slideToPrevious2')
const slideToNext2 = document.querySelector('#slideToNext2')
const article1 = document.querySelector('#article1')

slideToNext1.addEventListener('click',()=>{
    webRWD.previousElementSibling.style.display = 'none'
    webRWD.style.display = 'block'
    slideToNext1.style.display = 'none'
    slideToPrevious1.style.display = 'block'
})
slideToPrevious1.addEventListener('click',()=>{
    webRWD.style.display = 'none'
    webRWD.previousElementSibling.style.display ='block'
    slideToPrevious1.style.display = 'none'
    slideToNext1.style.display = 'block'
})

slideToNext2.addEventListener('click',()=>{
    article1.style.display = 'none'
    article1.nextElementSibling.style.display = 'block'
    slideToNext2.style.display = 'none'
    slideToPrevious2.style.display = 'block'
})
slideToPrevious2.addEventListener('click',()=>{
    article1.nextElementSibling.style.display = 'none'
    article1.style.display ='block'
    slideToPrevious2.style.display = 'none'
    slideToNext2.style.display = 'block'
})

// click to open menu
const menu = document.querySelector("#menu");
const menuOpenStatus = document.querySelector('.main-nav ul');

menu.addEventListener('click', () => {
    if (!menuOpenStatus.style.height || menuOpenStatus.style.height === '0px') {
        menuOpenStatus.style.height = '200px'; 
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-xmark');
        menuOpenStatus.style.visibility = 'visible'; 
    } else {
        menu.classList.remove('fa-xmark');
        menu.classList.add('fa-bars');
        menuOpenStatus.style.visibility = 'hidden'; 
        menuOpenStatus.style.height = '0px';
    }
});
