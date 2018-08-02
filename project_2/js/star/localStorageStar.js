class LocalStorage {
    constructor() {

    }

    setItem(clickedImageIndex) {
        localStorage.setItem('rating-value', clickedImageIndex);
    }

    getItem() {
        return localStorage.getItem('rating-value');
    }
}