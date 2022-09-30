export class Card {

	#cardsTemplate;
	#cardItem;
	#name;
	#link;
	#container;
	#imagePopupItem;
	#showPopup;
	#imagePopup;


	constructor(cardsData, cardsTemplate, showPopup) {
		this.#cardsTemplate = cardsTemplate;
		this.#name = cardsData.name;
		this.#link = cardsData.link;
		this.#container = document.querySelector('.places__items');
		this.#imagePopup = document.querySelector('.popup_type_image');
		this.#imagePopupItem = document.querySelector('.popup__image')
		this.#showPopup = showPopup;
	}

	#getTemplate() {
		return this.#cardsTemplate.cloneNode(true).content;
	}

	#showImage = (evt) => {

		this.#imagePopupItem.src = evt.target.src;
		this.#imagePopupItem.alt = evt.target.alt;
		this.#imagePopup.querySelector('.popup__image-caption').textContent = evt.target.alt;
	};

	#handleLikeButton(evt) {
		evt.target.classList.toggle('places__like-button_active');
	}

	#handleDeleteButton(evt) {
		evt.target.closest('.places__item').remove();
	}

	#handleImagePopup(evt) {
		this.#showImage(evt);
		this.#showPopup(this.#imagePopup)
	}

	#handleCardButtons() {

		this.#cardItem
			.querySelector('.places__like-button')
			.addEventListener('click', this.#handleLikeButton.bind(this));

		this.#cardItem
			.querySelector('.places__delete-button')
			.addEventListener('click', this.#handleDeleteButton.bind(this));

		this.#cardItem
			.querySelector('.places__image')
			.addEventListener('click', this.#handleImagePopup.bind(this));
	}

	createCardItem() {
		this.#cardItem = this.#getTemplate();

		this.#cardItem.querySelector('.places__title').textContent = this.#name;
		this.#cardItem.querySelector('.places__image').src = this.#link;
		this.#cardItem.querySelector('.places__image').alt = this.#name;

		this.#handleCardButtons();

		return this.#cardItem;
	}
}





