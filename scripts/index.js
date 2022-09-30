import { Card } from "./Card.js";
import { config } from "./data/validationConfig.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards } from "./data/cardsData.js";

const cardsTemplate = document.querySelector('#cardtemplate');
const cardsContainer = document.querySelector('.places__items')
const profileItem = document.querySelector('.profile__card');
const popupContainer = document.querySelector('.page__popup-wrapper');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImage = document.querySelector('.popup_type_image');
const imageWindow = popupImage.querySelector('.popup__image');
const nameInput = document.querySelector('.popup__input_field_name');
const jobInput = document.querySelector('.popup__input_field_job');
const nameCardInput = document.querySelector('.popup__input_field_card-name');
const formAdd = document.querySelector('.popup__form_type_add');
const formEdit = document.querySelector('.popup__form_type_edit');
const formsList = Array.from(document.querySelectorAll('.popup__form'));
const forms = new Map();
const linkImageCardInput = document.querySelector(
	'.popup__input_field_card-image-link'
);
const inputCardData = [
	{
		name: '',
		link: '',
	},
];


const createValidator = function (form) {
	const formValidator = new FormValidator(config, form);
	return formValidator;
};

const showPopup = function (popup) {
	popup.classList.add('popup_opened');
	document.addEventListener('keydown', handleEscClosePopup);
};

const handleEscClosePopup = function (evt) {
	if (evt.key === 'Escape') {
		closePopup(popupContainer.querySelector('.popup_opened'));
	}
};

const hadleCardClick = function (name, link) {
	imageWindow.src = link;
	imageWindow.alt = name;
	popupImage.querySelector('.popup__image-caption').textContent = name;
	showPopup(popupImage);
};

const closePopup = (popup) => {
	if (popup) {
		popup.classList.remove('popup_opened');
		document.removeEventListener('keydown', handleEscClosePopup);
	}
};

const createCard = function (item) {
	const card = new Card(item, cardsTemplate, hadleCardClick);
	const cardElement = card.createCardItem();
	return cardElement;
};

const addCard = function (cardElement) {
	cardsContainer.prepend(cardElement);
};

const initCard = function (cardsData) {
	cardsData.forEach(item => {
		addCard(createCard(item));
	});
};

const setPopupsListeners = function (popupList) {
	popupList.forEach((popup) => {
		popup.addEventListener('mousedown', (evt) => {
			if (evt.target.classList.contains('popup__modal-window') || evt.target.classList.contains('popup_opened')) {
				closePopup(popup);
			}
			if (evt.target.classList.contains('popup__close-button')) {
				closePopup(popup);
			}
		})
	})
};

const setFormsValidaton = function (formsList) {
	formsList.forEach(form => {
		forms.set(form, createValidator(form));
	});
};



initCard(initialCards);
setPopupsListeners(popups);
setFormsValidaton(formsList);

profileItem.addEventListener('click', (evt) => {
	if (evt.target.classList.contains('profile__edit-button')) {
		nameInput.value = profileName.textContent;
		jobInput.value = profileJob.textContent;
		showPopup(popupEdit);
		forms.get(formEdit).resetValidation();
		forms.get(formEdit).enableValidation();
	}

	if (evt.target.classList.contains('profile__add-button')) {
		formAdd.reset();
		forms.get(formAdd).resetValidation();
		forms.get(formAdd).enableValidation();
		showPopup(popupAdd);
	}
});

formEdit
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

formAdd
	.addEventListener('submit', (evt) => {
		evt.preventDefault();
		inputCardData.name = nameCardInput.value;
		inputCardData.link = linkImageCardInput.value;
		addCard(createCard(inputCardData));
		closePopup(popupAdd);
	});
