import './index.css'

import Api from "../components/Api.js";

import { Card } from "../components/Card.js";
import Section from "../components/Section.js";

import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirm from '../components/PopupWithConfirm.js';

import UserInfo from "../components/UserInfo.js";
import { FormValidator } from "../components/FormValidator.js";

// import { initialCards } from "../utils/data.js";

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

const createCard = function (values) {

  const card = new Card(
    {
      name: values.name,
      link: values.link,
      likes: values.likes,
      ownerId: values.owner._id,
      id: values._id,
    },
    '#cardtemplate',
    popupImage.openPopup.bind(popupImage)
    , () => {
      popupConfirm.openPopup({
        id: values._id,
        handleDelete: card.deleteCard.bind(card),
      });
    }
  );

  return card.generateCard();
}




const api = new Api({
  url: 'https://nomoreparties.co/v1/cohort-52/',
  headers: {
    authorization: '79dfd97e-4c73-4c37-a7d5-b5e09710f5c9',
    'Content-Type': 'application/json'
  },
});


const cardList = new Section({
  renderer: (cardData) => {
    cardList.addItem(createCard(cardData))
  }, cardsContainer
});

Promise.all([api.getUser(), api.getCards()])
  .then(([userData, cardsData]) => {
    userInfo.setUserInfo(userData.name, userData.about);
    cardList.renderItems(cardsData);
  })
  .catch(err => console.log(err.message));

const createValidator = function (form) {
  const formValidator = new FormValidator(config, form);
  return formValidator;
};

const popupImage = new PopupWithImage('.popup_type_image', '.popup__image');

const userInfo = new UserInfo(userSelectorsData);

const popupAdd = new PopupWithForm('.popup_type_add', (inputValues => {
  api.addCard(inputValues)
    .then(cardData => cardList.addItem(createCard(cardData)))
    .catch(err => console.log(err.message));
}));

const popupEdit = new PopupWithForm('.popup_type_edit', (inputValues) => {
  api.updateUser(inputValues)
    .then(userData => userInfo.setUserInfo(userData.name, userData.about))
});

const popupConfirm = new PopupWithConfirm('.popup_type_confirm',
  ({ id, handleDelete }) => {
    api.deleteCard(id)
      .then(() => {
        handleDelete();
      })
  });

const validatorFormAdd = createValidator(popupAdd.getForm());
const validatorFormEdit = createValidator(popupEdit.getForm());

validatorFormAdd.enableValidation();
validatorFormEdit.enableValidation();

popupImage.setEventListeners();
popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupConfirm.setEventListeners();

document.querySelector('.profile__add-button').addEventListener('click', handleAddButton);
document.querySelector('.profile__edit-button').addEventListener('click', handleEditButton);

