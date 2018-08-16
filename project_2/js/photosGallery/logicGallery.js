class PhotosGallery {
    constructor() {
        this.photosGalleryWidgetEl = document.querySelector('[data-role="photosGalleryWidget"]')
        this.imagesUrls = [];
        this.photoInputEl = null;
        this.photosContainerEl = null;
    }

    render() {
        this.photosGalleryWidgetEl.innerHTML = `
            <div>My photos by URL:</div>
            <div>
                <ul class='photos' data-role='photos'></ul>
            </div>
            <div>
                <label>
                    <input type='text' class='new-photo' data-role='new-photo'/>
                </label>
            </div>
                    `

        photosGallery.bindEnterListener();
        photosGallery.restorePhotos();
    }

    _findInputEl() {
        return document.querySelector('[data-role="new-photo"]');
    }

    _findPhotosContainer() {
        return document.querySelector('[data-role="photos"]');
    }

    bindEnterListener() {
        this.photoInputEl = this._findInputEl();
        this.photoInputEl.addEventListener('keyup', this.onEnterListenerClick.bind(this));
    }

    onEnterListenerClick(e) {
        if (e.code === 'Enter') {
            // get url
            let src = this.photoInputEl.value;
            if (src !== '') {

                // push url to array
                this.imagesUrls.push(src);
                this.photoInputEl.value = '';

                // create img with this url as src
                // create li with this photo inside
                let li = document.createElement('li');
                li.innerHTML = `<img class='image' src='${src}' />`;

                // append this li to ul
                this.photosContainerEl = this._findPhotosContainer();
                this.photosContainerEl.append(li);

                // save to localStorage
                this._localStorage = new GalleryService();
                this._localStorage.setItem(JSON.stringify(this.imagesUrls));

            } else {
                alert('enter url to the photo');
            }
        }
    }


    // restore photos
    restorePhotos() {
        this._localStorage = new GalleryService();
        let photosStr = this._localStorage.getItem();
        this.photosContainerEl = this._findPhotosContainer();
        if (!!photosStr) {
            let photos = JSON.parse(photosStr);
            photos.forEach((src) => {

                // push url to array
                this.imagesUrls.push(src);

                // create img with this url as src
                // create li with this photo inside
                let li = document.createElement('li');
                li.innerHTML = `<img class='image' src='${src}' />`;

                // append this li to ul
                this.photosContainerEl.append(li);
            })
        }
    }

}


