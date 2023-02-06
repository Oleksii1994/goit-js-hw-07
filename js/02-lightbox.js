import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const imageMarkup = createGalleryItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", imageMarkup);
galleryEl.addEventListener("click", onGalleryItemClick);

function createGalleryItemsMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
     <li><a class="gallery__item" href="${original}">
      <img src="${preview}" alt="${description}" class="gallery__image">
     </a></li>
   `;
    })
    .join("");
}

function onGalleryItemClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  new SimpleLightbox(".gallery a", {
    /* options */
  });
}
