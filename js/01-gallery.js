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

  basicLightbox
    .create(
      `<img width="1400" height="900" src="${event.target.dataset.source}">`
    )
    .show();

  window.addEventListener("keydown", onEscKeyDown);
}

function onEscKeyDown(event) {
  const modalEl = document.querySelector(".basicLightbox");
  window.removeEventListener("keydown", onEscKeyDown);
  modalEl.classList.remove("basicLightbox");
}
