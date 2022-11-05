import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

  #handleFormSubmit;
  #inputList;
  #popup;
  #form;
  #isLoading;
  #customButtonText;
  #buttonSubmit;
  #inputValues

  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);

    this.#popup = document.querySelector(popupSelector);
    this.#form = this.#popup.querySelector('.popup__form');
    this.#inputList = [...this.#form.querySelectorAll('.popup__input')];
    this.#buttonSubmit = this.#popup.querySelector('.popup__button');

    this.#handleFormSubmit = handleFormSubmit;

    this.#isLoading = false
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
    super.setEventListeners();

    this.#form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this.#inputValues = this.#getInputValues();

      if (!this.#isLoading) {
        this.#customButtonText = this.#buttonSubmit.textContent;
        this.#buttonSubmit.textContent = "Сохранение...";
        this.#isLoading = true;
      }

      this.#handleFormSubmit(this.#inputValues)
        .then(() => {
          this.closePopup()
        })
        .catch(err => console.log(err.message))
        .finally(() => {
          if (this.#isLoading) {
            this.#buttonSubmit.textContent = this.#customButtonText;
            this.#isLoading = false;
          }
        });
    });
  }

  closePopup() {
    this.#form.reset();

    super.closePopup();
  }
}

