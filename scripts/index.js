import { Card } from "./components/Card.js";
import Section from "./components/Section.js";

import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import { config } from "./data/validationConfig.js";
import { FormValidator } from "./components/FormValidator.js";
import { initialCards } from "./data/cardsData.js";


const cardsTemplate = document.querySelector('#cardtemplate');
const cardsContainer = document.querySelector('.places__items')
const profileItem = document.querySelector('.profile__card');
const popupContainer = document.querySelector('.page__popup-wrapper');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const popups = document.querySelectorAll('.popup');
// const popupEdit = document.querySelector('.popup_type_edit');
//const popupAdd = document.querySelector('.popup_type_add');
const popupImageSelector = document.querySelector('.popup_type_image');
const imageSelector = popupImageSelector.querySelector('.popup__image');
const nameInput = document.querySelector('.popup__input_field_name');
const jobInput = document.querySelector('.popup__input_field_job');
const nameCardInput = document.querySelector('.popup__input_field_card-name');
const formAdd = document.querySelector('.popup__form_type_add');
const formEdit = document.querySelector('.popup__form_type_edit');
const formsList = Array.from(document.querySelectorAll('.popup__form'));
const forms = new Map();
const userSelectorsData = {
	userName: '.profile__title',
	userInfo: '.profile__subtitle'
}

const handleCardClick = function (name, link) {
	popupImage.openPopup(name, link);
}

const handleAddButton = function (evt) {
	popupAdd.openPopup();
	// formAddValidator.resetValidation();
}

const handleEditButton = function (evt) {
	popupEdit.openPopup();
	// formAddValidator.resetValidation();
}

const createCard = function (inputValues) {
	console.log(inputValues)
	return new Card({
		name: inputValues.name,
		link: inputValues.link
	}, cardsTemplate, handleCardClick)
		.generateCard();
}

const handleFormSubmit = function (inputValues) {
	cardList.addItem(createCard(inputValues));

}
const cardList = new Section({
	items: initialCards,
	renderer: (item) => cardList.addItem(createCard(item))
}, cardsContainer);


const popupImage = new PopupWithImage('.popup_type_image', '.popup__image');


cardList.renderItems();

const userInfo = new UserInfo(userSelectorsData)

const popupAdd = new PopupWithForm('.popup_type_add', (inputValues => {
	cardList.addItem(createCard(inputValues));
}));
const popupEdit = new PopupWithForm('.popup_type_edit', (inputValues => {
	userInfo.setUserInfo(inputValues.name, inputValues.job)
}))



const createValidator = function (form) {
	const formValidator = new FormValidator(config, form);
	return formValidator;
};

popupAdd.setEventListeners();
popupEdit.setEventListeners();

document.querySelector('.profile__add-button').addEventListener('click', handleAddButton);
document.querySelector('.profile__edit-button').addEventListener('click', handleEditButton);


// const linkImageCardInput = document.querySelector(
// 	'.popup__input_field_card-image-link'
// );
// const inputCardData = [
// 	{
// 		name: '',
// 		link: '',
// 	},
// ];

// const hadleCardClick = function (name, link) {
// 	popupImage.openPopup(name, link);
// };

// const handleButtonClick = function (popup) {
// 	userInfo.setPlaceholders()
// 	popup.openPopup();
// }

// const createCard = function (item) {

// 	return new Card(item, cardsTemplate, hadleCardClick).generateCard();
// 	// const card = new Card(item, cardsTemplate, hadleCardClick);
// 	// const cardElement = card.generateCard();
// 	// return cardElement;
// };

// const cardList = new Section({
// 	data: initialCards,
// 	renderer: (item) => {
// 		cardList.addItem(createCard(item));
// 	}
// },
// 	cardsContainer,
// )

// const handleSubmitAdd = function (inputList) {

// inputCardData.name = popupAdd.extractInputList()[0].value;
// inputCardData.link = popupAdd.extractInputList()[1].value;
// 	cardList.addItem(createCard({
// 		name: popupAdd.extractInputList()[0].value,
// 		link: popupAdd.extractInputList()[1].value
// 	}));
// 	popupAdd.closePopup();
// }

// const handleSubmit = function (popup, inputList, evt) {
// 	evt.preventDefault();
// 	if (popup.classList.contains('popup_type_edit')) {

// 		handleSubmitEdit(inputList);
// 	}
// 	if (popup.classList.contains('popup_type_add')) {
// 		handleSubmitAdd(inputList);
// 	}
// }

// const setFormInputs = function () {
// 	return popupEdit.extractInputList();
// }

// const handleSubmitEdit = function (inputList) {
// 	userInfo.setUserInfo()
// 	popupEdit.closePopup();
// };



// const popupImage = new PopupWithImage('.popup_type_image', '.popup__image');

// const userInfo = new UserInfo(userSelectorsData, setFormInputs)

// cardList.renderItems();





// // const setFormsValidaton = function (formsList) {
// // 	formsList.forEach(form => {
// // 		forms.set(form, createValidator(form));
// // 		forms.get(form).enableValidation();
// // 	});
// // };

// // setFormsValidaton(formsList);

// profileItem.addEventListener('click', (evt) => {
// 	if (evt.target.classList.contains('profile__edit-button')) {
// 		handleButtonClick(popupEdit);
// 	}
// 	if (evt.target.classList.contains('profile__add-button')) {
// 		// forms.get(formEdit).resetValidation();
// 		handleButtonClick(popupAdd);
// 	}
// })






// formEdit
// 	.addEventListener('submit', (evt) => {
// 		evt.preventDefault();
// 		if (
// 			evt.target.classList.contains('popup__form_type_edit') &&
// 			nameInput.value &&
// 			jobInput.value
// 		) {
// 			profileName.textContent = nameInput.value;
// 			profileJob.textContent = jobInput.value;
// 		}
// 		popupEdit.closePopup();
// 	});

// formAdd
// 	.addEventListener('submit', (evt) => {
// 		evt.preventDefault();
// 		inputCardData.name = nameCardInput.value;
// 		inputCardData.link = linkImageCardInput.value;
// 		cardList.addItem(createCard(inputCardData))
// 		popupAdd.closePopup();
// 	});
