export default class Popup {

  #popup;

  constructor(popupSelector) {
    this.#popup = document.querySelector(popupSelector);
  }

  openPopup() {
    this.#popup.classList.add('popup_opened');
    document.addEventListener('keydown', this.#handleEscClosePopup);
  }

  closePopup() {
    if (this.#popup) {
      this.#popup.classList.remove('popup_opened');
      document.removeEventListener('keydown', this.handleEscClosePopup);
    }
  }

  #handleEscClosePopup = (evt) => {
    if (evt.key === 'Escape') {
      this.closePopup(this.#popup.querySelector('.popup_opened'));
    }
  }

  setEventListeners() {
    this.#popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup__modal-window') || evt.target.classList.contains('popup_opened')) {
        this.closePopup(this.#popup);
      }
      if (evt.target.classList.contains('popup__close-button')) {
        this.closePopup(this.#popup);
      }
    })
  }
}
