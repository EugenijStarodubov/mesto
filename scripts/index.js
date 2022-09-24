import { Card } from "./Card.js";
import { config } from "./data/validationConfig.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards } from "./data/cardsData.js";

const cardsTemplate = document.querySelector('#cardtemplate');
const profileItem = document.querySelector('.profile__card');
const popupContainer = document.querySelector('.page__popup-wrapper');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const nameInput = document.querySelector('.popup__input_field_name');
const jobInput = document.querySelector('.popup__input_field_job');
const nameCardInput = document.querySelector('.popup__input_field_card-name');
const linkImageCardInput = document.querySelector(
	'.popup__input_field_card-image-link'
);
const inputCardData = [
	{
		name: '',
		link: '',
	},
];

const showPopup = function (popup) {
	popup.classList.add('popup_opened');
	document.addEventListener('keydown', handleEscClosePopup);
};

const handleEscClosePopup = function (evt) {
	if (evt.key === 'Escape') {
		closePopup(popupContainer.querySelector('.popup_opened'));
	}
};

const closePopup = (popup) => {
	popup.classList.remove('popup_opened');
	document.removeEventListener('keydown', handleEscClosePopup);
};

const createCardItem = function (item) {

	const card = new Card(item, cardsTemplate, showPopup);
	card.addCard()
}

const initCard = function (cardsData) {
	cardsData.forEach(item => {
		const card = new Card(item, cardsTemplate, showPopup, closePopup);
		card.addCard();
	});
}

const handleClosePopup = function (evt) {
	if (
		evt.target.classList.contains('popup__close-button') ||
		evt.target.classList.contains('popup') ||
		evt.target.classList.contains('popup__modal-window')
	) {
		closePopup(popupContainer.querySelector('.popup_opened'));
	}
}

const formValidator = new FormValidator(config)
formValidator.enableValidation(config);

initCard(initialCards);

popupContainer.addEventListener('click', handleClosePopup);

profileItem.addEventListener('click', (evt) => {
	if (evt.target.classList.contains('profile__edit-button')) {
		nameInput.value = profileName.textContent;
		jobInput.value = profileJob.textContent;
		showPopup(popupEdit);
		formValidator.resetValidation(popupEdit);
	}
	if (evt.target.classList.contains('profile__add-button')) {
		document.querySelector('.popup__form_type_add').reset();
		showPopup(popupAdd);
		formValidator.resetValidation(popupAdd);
	}
});

popupContainer
	.querySelector('.popup__form_type_edit')
	.addEventListener('submit', (evt) => {
		evt.preventDefault();
		if (
			evt.target.classList.contains('popup__form_type_edit') &&
			nameInput.value &&
			jobInput.value
		) {
			profileName.textContent = nameInput.value;
			profileJob.textContent = jobInput.value;
		}
		closePopup(popupEdit);
	});

popupContainer
	.querySelector('.popup__form_type_add')
	.addEventListener('submit', (evt) => {
		evt.preventDefault();
		inputCardData.name = nameCardInput.value;
		inputCardData.link = linkImageCardInput.value;
		createCardItem(inputCardData);
		closePopup(popupAdd);
	});
