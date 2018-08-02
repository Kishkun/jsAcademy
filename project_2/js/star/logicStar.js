// star logic
class Star {
    constructor() {
        this.starsWidget = document.querySelector('[data-role="starsWidget"]');
        this.stars = null;
        this.activeStars = null;
        this._localStorage = new LocalStorage();
    }

    render() {
        this.starsWidget.innerHTML = `
            <div>
                Set your mark:
                <div class='starsImages' data-role='starsImages'>
                    <img src='images/star.png' alt='star'/>
                    <img src='images/star.png' alt='star'/>
                    <img src='images/star.png' alt='star'/>
                    <img src='images/star.png' alt='star'/>
                    <img src='images/star.png' alt='star'/>
            </div>
                </div>
        `
    }


    _findAllStars() {
        return document.querySelectorAll('[data-role="starsImages"] img');
    }

    // bind click listener to stars
    bindClickListener() {
        this.stars = this._findAllStars();
        this.stars.forEach(star => {
            star.addEventListener('click', this.onStarsListenerClick.bind(this));
        })
    }

    onStarsListenerClick(e) {
        // remove all active classes
        this.activeStars = document.querySelectorAll('[data-role="starsImages"] img.active');
        this.activeStars.forEach(star => {
            star.classList.remove('active');
        });

        // add active class to clicked image and to previous image
        let clickedStar = e.currentTarget;
        let clickedImageIndex = 0;
        for (let i = 0; i < this.stars.length; i++) {
            star = this.stars[i];
            star.classList.add('active');
            if (star === clickedStar) {
                clickedImageIndex = i;
                break;
            }
        }

        // saved clicked image order number
        this._localStorage.setItem(clickedImageIndex);
    }

     restorePreviousValue() {
         this.stars = this._findAllStars();
         let savedValue = this._localStorage.getItem();
        if (savedValue != null) {
            savedValue = +savedValue;
            for (let i = 0; i < this.stars.length; i++) {
                let star = this.stars[i];
                star.classList.add('active');
                if (i === savedValue) {
                    break;
                }
            }
        }
    }
}

