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
const userSelectorsData = {
	userName: '.profile__title',
	userInfo: '.profile__subtitle'
}

const handleAddButton = function (evt) {
	popupAdd.openPopup();
	addFormValidator.resetValidation();
}

const handleEditButton = function (evt) {
	popupEdit.openPopup();
	popupEdit.setInputValues(userInfo.getUserInfo())
	editFormValidator.resetValidation();
}

const createCard = function (inputValues) {

	return new Card({
		name: inputValues.name,
		link: inputValues.link
	}, cardsTemplate, (name, link) => {
		popupImage.openPopup(name, link);
	})
		.generateCard();
}

// const handleFormSubmit = function (inputValues) {
// 	cardList.addItem(createCard(inputValues));

// }
const cardList = new Section({
	items: initialCards,
	renderer: (item) => cardList.addItem(createCard(item))
}, cardsContainer);

const createValidator = function (form) {
	const formValidator = new FormValidator(config, form);
	return formValidator;
};

const popupImage = new PopupWithImage('.popup_type_image', '.popup__image');

const userInfo = new UserInfo(userSelectorsData)

const popupAdd = new PopupWithForm('.popup_type_add', (inputValues => {
	cardList.addItem(createCard(inputValues));
}));

const popupEdit = new PopupWithForm('.popup_type_edit', (inputValues => {
	userInfo.setUserInfo(inputValues.name, inputValues.job)
}))

const addFormValidator = createValidator(popupAdd.getForm());
const editFormValidator = createValidator(popupEdit.getForm());

addFormValidator.enableValidation();
editFormValidator.enableValidation();

cardList.renderItems();

popupImage.setEventListeners();
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





// const setFormsValidaton = function (formsList) {
// 	formsList.forEach(form => {
// 		forms.set(form, createValidator(form));
// 		forms.get(form).enableValidation();
// 	});
// };

// setFormsValidaton(formsList);

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
