const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;
let slideNumber = 0;

let navbarItem = document.querySelectorAll('.item')
for (let i = 0; i < navbarItem.length; i++) {
    navbarItem[i].addEventListener('click', function () {
        for (let i = 0; i < navbarItem.length; i++) {
            navbarItem[i].classList.remove('active')
        }
        this.classList.add('active')
    })
}

// 下一张按钮逻辑
nextBtn.onclick = () => {
    slides.forEach((e) => {
        e.classList.remove('active')
    })

    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0
    }
    slides[slideNumber].classList.add('active')
}

// 上一张按钮逻辑
prevBtn.onclick = () => {
    slides.forEach((e) => {
        e.classList.remove('active')
    })

    slideNumber--;

    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1
    }
    slides[slideNumber].classList.add('active')
}