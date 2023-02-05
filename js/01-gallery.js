import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const imageMarkup = createGalleryItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", imageMarkup);

galleryEl.addEventListener("click", onGalleryItemClick);

function createGalleryItemsMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class=""gallery__item>
     <a class="gallery__link" href="${original}">
      <img src="${preview}" alt="${description}" class="gallery__image" data-source="${original}">
     </a>
    </div>
   `;
    })
    .join("");
}

function onGalleryItemClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const imageEl = event.target;
  // imageEl.addEventListener("click");

  imageEl.onclick = () => {
    basicLightbox
      .create(
        `
  	<img width="1400" height="900" src="${event.target.dataset.source}">
  `
      )
      .show();
  };
}

// document.querySelector(".gallery__image").onclick = () => {
//   basicLightbox
//     .create(
//       `
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`
//     )
//     .show();
// };
