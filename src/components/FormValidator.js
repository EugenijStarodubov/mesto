export class FormValidator {

  #inactiveButtonClass;
  #inputErrorClass;
  #errorClass;
  #submitButton;
  #inputsList;
  #errorElement;
  #formElement;

  constructor(config, formElement) {

    this.#inactiveButtonClass = config.inactiveButtonClass;
    this.#inputErrorClass = config.inputErrorClass;
    this.#errorClass = config.errorClass;
    this.#formElement = formElement;
    this.#inputsList = Array.from(
      this.#formElement.querySelectorAll(config.inputSelector)
    );
    this.#submitButton = this.#formElement.querySelector(config.submitButtonSelector);

  }

  #setButtonInactive() {
    this.#submitButton.classList.add(this.#inactiveButtonClass);
    this.#submitButton.setAttribute('disabled', true);

  };

  #setButtonActive() {
    this.#submitButton.classList.remove(this.#inactiveButtonClass);
    this.#submitButton.removeAttribute('disabled', false);

  };

  #hasInputsErrors() {
    return this.#inputsList.some(function (input) {
      return !input.validity.valid;
    });
  };

  #toggleButtonState() {
    if (this.#hasInputsErrors()) {
      this.#setButtonInactive();
    } else {
      this.#setButtonActive();
    }
  };

  #showInputError(input, errorMessage) {

    this.#errorElement = this.#formElement.querySelector(`#${input.id}-error`);
    input.classList.add(this.#inputErrorClass);

    this.#errorElement.textContent = errorMessage;
    this.#errorElement.classList.add(this.#errorClass);
  };

  #hideInputError(input) {
    this.#errorElement = this.#formElement.querySelector(`#${input.id}-error`);
    input.classList.remove(this.#inputErrorClass);
    this.#errorElement.textContent = '';
    this.#errorElement.classList.remove(this.#errorClass);
  };

  #checkValidity(input) {

    if (!input.validity.valid) {
      this.#showInputError(input, input.validationMessage);
    } else {
      this.#hideInputError(input);
    }
  };

  #setEventListeners() {

    this.#toggleButtonState(this.#inputsList);
    this.#inputsList.forEach((input) => {
      input.addEventListener('input', () => {
        this.#checkValidity(input);
        this.#toggleButtonState(this.#inputsList);
      });
    });
  };

  resetValidation() {
    this.#setButtonInactive()
    this.#inputsList.forEach((input) => {
      this.#hideInputError(input);
    });
  };

  enableValidation() {
    this.#setEventListeners();
  };
}
