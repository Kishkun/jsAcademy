class Slider {
    constructor() {
        this.slideIndex = 1;
        this.slides = document.querySelectorAll('.slider-item');
        this.next = document.querySelector('.next');
        this.prev = document.querySelector('.prev');
        this.dotsWrap = document.querySelector('.slider-dots');
        this.dots = document.querySelectorAll('.dot');
    }

    start() {
        this.showSlides();
        this.nextSlides();
        this.prevSlides();
        this.findDots();
    }

    // show slide
    showSlides(index) {
        if (index > this.slides.length) {
            this.slideIndex = 1;
        } else if (index < 1) {
            this.slideIndex = this.slides.length;
        }

        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = 'none';
        }

        for (let i = 0; i < this.dots.length; i++) {
            this.dots[i].classList.remove('dot-active');
        }

        this.slides[this.slideIndex - 1].style.display = 'block';
        this.dots[this.slideIndex - 1].classList.add('dot-active');
    }

    plusSlide(index) {
        this.showSlides(this.slideIndex += index);
    }

    // slide next
    nextSlides() {
        this.next.addEventListener('click', () => {
            this.plusSlide(1);
        });
    }

    // slide prev
    prevSlides() {
        this.prev.addEventListener('click', () => {
            this.plusSlide(-1);
        });
    }

    currentSlide(index) {
        this.showSlides(this.slideIndex = index);
    }

    // find points
    findDots() {
        this.dotsWrap.addEventListener('click', (e) => {
            for (let i = 0; i < this.dots.length + 1; i++) {
                if (e.target.classList.contains('dot') && e.target === this.dots[i - 1]) {
                    this.currentSlide(i);
                }
            }
        });
    }

}