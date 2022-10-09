import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  #image;

  constructor(popupSelector, imageSelector) {
    super(popupSelector);
    this.#image = document.querySelector(imageSelector);
  }

  openPopup(name, link) {
    super.openPopup();
    this.#image.src = link;
    this.#image.alt = name;
    document.querySelector('.popup__image-caption').textContent = name;
  }
}
