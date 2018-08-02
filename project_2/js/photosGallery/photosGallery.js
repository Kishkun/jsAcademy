let photosGallery = new PhotosGallery();
photosGallery.render();
photosGallery.bindEnterListener();
photosGallery.restorePhotos();






// let imagesUrls = [];
// let photoInputEl = findInputEl();
// let photosContainerEl = findPhotosContainer();
// bindEnterListener(photoInputEl, photosContainerEl, imagesUrls);
// restorePhotos(photosContainerEl, imagesUrls);
//
// // find input and photos container element
// function findInputEl() {
//     return document.querySelector('[data-role="new-photo"]');
// }
//
// function findPhotosContainer() {
//     return document.querySelector('[data-role="photos"]');
// }
//
// // bind click listener
// function bindEnterListener(photoInputEl, photosContainerEl, imagesUrls) {
//     photoInputEl.addEventListener('keyup', onEnterListenerClick.bind(this));
// }
//
// function onEnterListenerClick(e) {
//     if (e.code === 'Enter') {
//         // get url
//         let src = photoInputEl.value;
//         if (src !== '') {
//
//             // push url to array
//             imagesUrls.push(src);
//             photoInputEl.value = '';
//
//             // create img with this url as src
//             // create li with this photo inside
//             let li = document.createElement('li');
//             li.innerHTML = `<img class='image' src='${src}' />`;
//
//             // append this li to ul
//             photosContainerEl.append(li);
//
//             // save to localStorage
//             localStorage.setItem('images', JSON.stringify(imagesUrls));
//
//         } else {
//             alert('enter url to the photo');
//         }
//     }
// }
//
// // restore photos
// function restorePhotos(photosContainerEl, imagesUrls) {
//     let photosStr = localStorage.getItem('images');
//     if (!!photosStr) {
//         let photos = JSON.parse(photosStr);
//         photos.forEach((src) => {
//
//             // push url to array
//             imagesUrls.push(src);
//
//             // create img with this url as src
//             // create li with this photo inside
//             let li = document.createElement('li');
//             li.innerHTML = `<img class='image' src='${src}' />`;
//
//             // append this li to ul
//             photosContainerEl.append(li);
//         })
//     }
// }
