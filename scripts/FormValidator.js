export class FormValidator {

	#inputSelector;
	#submitButtonSelector;
	#inactiveButtonClass;
	#inputErrorClass;
	#errorClass;

	#submitButton;
	#inputsList;
	#errorElement;
	#buttonElement;
	#formElement;

	constructor(config, formElement) {

		this.#inputSelector = config.inputSelector;
		this.#submitButtonSelector = config.submitButtonSelector;
		this.#inactiveButtonClass = config.inactiveButtonClass;
		this.#inputErrorClass = config.inputErrorClass;
		this.#errorClass = config.errorClass;
		this.#formElement = formElement;
		this.#inputsList = Array.from(
			this.#formElement.querySelectorAll(this.#inputSelector)
		);
		this.#submitButton = this.#formElement.querySelector(this.#submitButtonSelector);
	}

	#setButtonInactive() {
		this.#submitButton.classList.add(this.#inactiveButtonClass);
		this.#submitButton.setAttribute('disabled', true);
	};

	#setButtonActive(buttonElement) {
		buttonElement.classList.remove(this.#inactiveButtonClass);
		buttonElement.removeAttribute('disabled', false);
	};

	#resetValidation() {
		this.#setButtonInactive()
		this.#inputsList.forEach((input) => {
			this.#hideInputError(this.#formElement, input);
		});

	};

	#hasInputsErrors(inputsList) {
		return inputsList.some(function (input) {
			return !input.validity.valid;
		});
	};

	#toggleButtonState(inputsList, buttonElement) {
		if (this.#hasInputsErrors(inputsList)) {
			this.#setButtonInactive(buttonElement);
		} else {
			this.#setButtonActive(buttonElement);
		}
	};

	#showInputError(form, input, errorMessage) {
		this.#errorElement = form.querySelector(`#${input.id}-error`);
		input.classList.add(this.#inputErrorClass);
		this.#errorElement.textContent = errorMessage;
		this.#errorElement.classList.add(this.#errorClass);
	};

	#hideInputError(form, input) {
		this.#errorElement = form.querySelector(`#${input.id}-error`);
		input.classList.remove(this.#inputErrorClass);
		this.#errorElement.textContent = '';
		this.#errorElement.classList.remove(this.#errorClass);
	};

	#checkValidity(form, input) {
		if (!input.validity.valid) {
			this.#showInputError(form, input, input.validationMessage);
		} else {
			this.#hideInputError(form, input);
		}
	};

	#setEventListeners(form) {

		this.#buttonElement = form.querySelector(this.#submitButtonSelector);
		this.#toggleButtonState(this.#inputsList, this.#buttonElement);
		this.#inputsList.forEach((input) => {
			input.addEventListener('input', () => {
				this.#checkValidity(form, input);
				this.#toggleButtonState(this.#inputsList, this.#buttonElement);
			});
		});
	};

	enableValidation() {
		this.#resetValidation()
		this.#setEventListeners(this.#formElement);

	};
}