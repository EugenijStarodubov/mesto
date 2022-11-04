import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {

  #popup;
  #handleConfirm;
  #buttonConfirm;
  #id;
  #data;
  #handleDelete

  constructor(popupSelector, handleConfirm) {
    super(popupSelector);
    this.#popup = document.querySelector(popupSelector);
    this.#handleConfirm = handleConfirm;
    this.#buttonConfirm = this.#popup.querySelector('.popup__button_type_confirm')
    this.isLoading = false;
  }

  openPopup(data) {
    super.openPopup();
    this.#data = data;

    console.log(this.#data)
  }

  closePopup() {
    super.closePopup();
  }

  setEventListeners() {
    super.setEventListeners();

    this.#buttonConfirm.addEventListener('click', () => {
      console.log('загрузка')

      this.#handleConfirm(this.#data)
        .then(() => {
          console.log('ok')
          this.closePopup()
        })
        .catch(err => console.log(err.message))
    })


  }

}
