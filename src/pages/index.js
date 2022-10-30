import './index.css'

import Api from "../components/Api.js";

import { Card } from "../components/Card.js";
import Section from "../components/Section.js";

import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
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

const createCard = function (inputValues) {

  return new Card({
    name: inputValues.name,
    link: inputValues.link,
  }, '#cardtemplate', (name, link) => {
    popupImage.openPopup(name, link);
  })
    .generateCard();
}


// .then(data => console.log(data))
// .catch(err => console.error(err.message))

// const renderUserData = function () {
//   const userData = api.getUserData();

//   return userData.name;
// }

const api = new Api({
  url: 'https://nomoreparties.co/v1/cohort-52/',
  headers: {
    authorization: '79dfd97e-4c73-4c37-a7d5-b5e09710f5c9',
    'Content-Type': 'application/json'
  },
});




// api.getUser()
// // .then(data => console.log(data))
// // .catch(err => console.error(err.message))
// // api.getCards()
// api.getUser().then(data => {
//   { console.log(data, data.name, data.about, data._id) };
// }).catch(err => console.error(err.message))

// api.getCards().then(data => {
//   {
//     createCard(data);

//   };
// }).catch(err => console.error(err.message))

api.getUser()
  .then(userData => {
    userInfo.setUserInfo(userData.name, userData.about)

  });

api.getCards()
  .then(cardsData => {

    const cardList = new Section({
      items: cardsData,
      renderer: (item) => cardList.addItem(createCard(item))
    }, cardsContainer);
    cardList.renderItems();
  });



//  cardList = new Section({
//   items: initialCards,
//   renderer: (item) => cardList.addItem(createCard(item))
// }, cardsContainer);



const createValidator = function (form) {
  const formValidator = new FormValidator(config, form);
  return formValidator;
};

const popupImage = new PopupWithImage('.popup_type_image', '.popup__image');

const userInfo = new UserInfo(userSelectorsData);




const popupAdd = new PopupWithForm('.popup_type_add', (inputValues => {
  cardList.addItem(createCard(inputValues));
}));

const popupEdit = new PopupWithForm('.popup_type_edit', (inputValues) => {
  api.createUser(inputValues)
    .then(userData => userInfo.setUserInfo(userData.name, userData.about))
});

const validatorFormAdd = createValidator(popupAdd.getForm());
const validatorFormEdit = createValidator(popupEdit.getForm());

validatorFormAdd.enableValidation();
validatorFormEdit.enableValidation();

// cardList.renderItems();

popupImage.setEventListeners();
popupAdd.setEventListeners();
popupEdit.setEventListeners();

document.querySelector('.profile__add-button').addEventListener('click', handleAddButton);
document.querySelector('.profile__edit-button').addEventListener('click', handleEditButton);

