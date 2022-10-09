import './index.css'

import { Card } from "../components/Card.js";
import Section from "../components/Section.js";

import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { FormValidator } from "../components/FormValidator.js";

import { initialCards } from "../utils/data.js";

import {
  config,
  cardsTemplate,
  cardsContainer,
  userSelectorsData
} from "../utils/constants.js";

const handleAddButton = function () {
  popupAdd.openPopup();
  validatorFormAdd.resetValidation();
}

const handleEditButton = function () {
  popupEdit.openPopup();
  popupEdit.setInputValues(userInfo.getUserInfo());
  validatorFormEdit.resetValidation();
}

const createCard = function (inputValues) {
  return new Card({
    name: inputValues.name,
    link: inputValues.link,
  }, '#cardtemplate', (name, link) => {
    popupImage.openPopup(name, link);
  })
    .generateCard();
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => cardList.addItem(createCard(item))
}, cardsContainer);

const createValidator = function (form) {
  const formValidator = new FormValidator(config, form);
  return formValidator;
};

const popupImage = new PopupWithImage('.popup_type_image', '.popup__image');

const userInfo = new UserInfo(userSelectorsData);

const popupAdd = new PopupWithForm('.popup_type_add', (inputValues => {
  cardList.addItem(createCard(inputValues));
}));

const popupEdit = new PopupWithForm('.popup_type_edit', (inputValues => {
  userInfo.setUserInfo(inputValues.name, inputValues.job);
}));

const validatorFormAdd = createValidator(popupAdd.getForm());
const validatorFormEdit = createValidator(popupEdit.getForm());

validatorFormAdd.enableValidation();
validatorFormEdit.enableValidation();

cardList.renderItems();

popupImage.setEventListeners();
popupAdd.setEventListeners();
popupEdit.setEventListeners();

document.querySelector('.profile__add-button').addEventListener('click', handleAddButton);
document.querySelector('.profile__edit-button').addEventListener('click', handleEditButton);

