class GalleryService {
    constructor() {
        this._imagesUrls = [];
    }

    setItem(imagesUrls) {
        localStorage.setItem('images', imagesUrls);
    }

    getItem() {
        return localStorage.getItem('images');
    }
}