export class FormValidator {

	#inputSelector;
	#submitButtonSelector;
	#inactiveButtonClass;
	#inputErrorClass;
	#errorClass;
	#inputItems;
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
	}

	#setButtonInactive(buttonElement) {
		buttonElement.classList.add(this.#inactiveButtonClass);
		buttonElement.setAttribute('disabled', true);
	};

	#setButtonActive(buttonElement) {
		buttonElement.classList.remove(this.#inactiveButtonClass);
		buttonElement.removeAttribute('disabled', false);
	};

	resetValidation(form) {
		this.#inputItems = Array.from(
			form.querySelectorAll(this.#inputSelector)
		);
		this.#submitButton = form.querySelector(this.#submitButtonSelector);
		this.#inputItems.forEach((input) => {
			this.#hideInputError(form, input);
		});
		this.#setButtonInactive(this.#submitButton);
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
		this.#inputsList = Array.from(form.querySelectorAll(this.#inputSelector));
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
		this.#setEventListeners(this.#formElement);
	};
}