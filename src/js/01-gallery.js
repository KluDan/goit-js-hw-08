// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const createListItem = ({ preview, original, description }) => {
  return `
  <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
   </a>
</li>
  `;
};

const listItem = galleryItems.map(createListItem).join("");
galleryEl.insertAdjacentHTML("beforeend", listItem);

galleryEl.addEventListener('click', onImageClick);

function onImageClick(e) {
    e.preventDefault();
    if(e.target.nodeName !== 'IMG'){
      return;
    }
    new SimpleLightbox('.gallery a',
    {
      captionDelay:250,
      captionsData:'alt'
    });
}