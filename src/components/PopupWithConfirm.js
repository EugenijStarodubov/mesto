import Popup from "./Popup.js";
export default class PopupWithConfirm extends Popup {

  #popup;
  #handleConfirm;
  #buttonConfirm;
  #data;
  #customButtonText;
  #isLoading;

  constructor(popupSelector, handleConfirm) {

    super(popupSelector);

    this.#popup = document.querySelector(popupSelector);
    this.#buttonConfirm = this.#popup.querySelector('.popup__button_type_confirm');

    this.#handleConfirm = handleConfirm;

    this.#isLoading = false;
  }

  openPopup(data) {

    super.openPopup();

    this.#data = data;
  }

  closePopup() {

    super.closePopup();
  }


  setEventListeners() {

    super.setEventListeners();

    this.#buttonConfirm.addEventListener('click', () => {

      if (!this.#isLoading) {
        this.#customButtonText = this.#buttonConfirm.textContent;
        this.#buttonConfirm.textContent = "Сохранение...";

        this.#isLoading = true;
      }

      this.#handleConfirm(this.#data)
        .then(() => {
          this.closePopup()
        })
        .catch(err => console.log(err.message))
        .finally(() => {
          if (this.#isLoading) {
            this.#buttonConfirm.textContent = this.#customButtonText;
            this.#isLoading = false;
          }
        });
    });
  }
}
