import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

  #handleFormSubmit;
  #inputList;
  #popup;
  #form;

  data;
  handleInputs;

  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);

    this.#handleFormSubmit = handleFormSubmit;
    this.#popup = document.querySelector(popupSelector);
    this.#form = this.#popup.querySelector('.popup__form');
    this.#inputList = [...this.#form.querySelectorAll('.popup__input')];

  }

  #getInputValues() {
    return this.#inputList.reduce((inputValue, input) => {
      inputValue[input.name] = input.value;
      return inputValue;
    }, {});
  }

  setInputValues(data) {
    this.#inputList.forEach(input => {
      if (data[input.name]) {
        input.value = data[input.name];

      }
    });

  }

  getForm() {
    return this.#form;
  }

  setEventListeners() {

    this.#form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.#handleFormSubmit(this.#getInputValues());
      this.closePopup();
    });
    super.setEventListeners();
  }

  closePopup() {
    this.#form.reset();
    super.closePopup();
  }
}

