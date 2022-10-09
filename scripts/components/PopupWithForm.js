import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

	#handleFormSubmit;
	#inputList
	popup
	#form

	handleInputs
	#setPlaceholders

	constructor(popupSelector, handleFormSubmit) {
		super(popupSelector);

		this.#handleFormSubmit = handleFormSubmit;
		this.popup = document.querySelector(popupSelector);
		this.#form = this.popup.querySelector('.popup__form')
		this.#inputList = [...this.#form.querySelectorAll('.popup__input')];
	}

	#getInputValues() {
		return this.#inputList.reduce((inputValues, input) => {
			inputValues[input.name] = input.value;
			return inputValues
		}, {});
	}


	setEventListeners() {

		this.#form.addEventListener('submit', (evt) => {
			evt.preventDefault();
			this.#handleFormSubmit(this.#getInputValues());
			this.closePopup();
		})
		super.setEventListeners();
	}

	closePopup() {
		this.#form.reset();
		super.closePopup();
	}
}

