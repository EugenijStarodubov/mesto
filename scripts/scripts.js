const page = document.querySelector('.page');
const container = document.querySelector('.popup');
const popupContainer = document.querySelector('.page__popup-wrapper');
const cardsContainer = document.querySelector('.places__items');
const cardTemplate = document.querySelector('#cardtemplate').content;
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const editPopup = document.querySelector('.popup_type_edit');
const addPopup = document.querySelector('.popup_type_add');
const imagePopup = document.querySelector('.popup_type_image');
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

//Практическая работа 5

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

let addCards = (cardsData) => {
  const cardItem = cardTemplate.querySelector('.places__item').cloneNode(true);
  cardItem.querySelector('.places__title').textContent = cardsData.name;
  cardItem.querySelector('.places__image').src = cardsData.link;
  cardItem.querySelector('.places__image').alt = cardsData.name;
  if (cardsData.name && cardsData.link) {
    cardsContainer.prepend(cardItem);
  }
};

let initCards = (cardsData) => {
  cardsData.forEach((elem) => {
    addCards(elem);
  });
};

initCards(initialCards);

function showEditForm() {
  editPopup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

const showCardForm = () => {
  addPopup.classList.add('popup_opened');
  nameCardInput.value = '';
  linkImageCardInput.value = '';
};

const showImage = (evt) => {
  // const imageItem = cardTemplate.querySelector('.places__item').cloneNode(true);
  imagePopup.querySelector('.popup__image').src = evt.target.src;
  imagePopup.querySelector('.popup__image').alt = evt.target.alt;
  imagePopup.querySelector('.popup__image-caption').textContent =
    evt.target.alt;
  imagePopup.classList.add('popup_opened');
};

const closePopup = () => {
  addPopup.classList.remove('popup_opened');
  editPopup.classList.remove('popup_opened');
  imagePopup.classList.remove('popup_opened');
};

const removeCard = (evt) => {
  const cardRemoveItem = cardsContainer.querySelector('.places__item');
  cardRemoveItem.parentNode.removeChild(cardRemoveItem);
};

addCards(initialCards);

page.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup__close-button')) {
    closePopup();
  }
});

const likeCard = (evt) => {
  evt.target.classList.toggle('places__like-button_active');
};

page.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('profile__edit-button')) {
    showEditForm();
  }
  if (evt.target.classList.contains('profile__add-button')) {
    showCardForm();
  }
});

cardsContainer.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('places__like-button')) {
    likeCard(evt);
  }
  if (evt.target.classList.contains('places__delete-button')) {
    removeCard(evt);
  }
  if (evt.target.classList.contains('places__image')) {
    showImage(evt);
  }
});

popupContainer.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (
    evt.target.classList.contains('popup__form_type_edit') &&
    nameInput.value &&
    jobInput.value
  ) {
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
  } else if (evt.target.classList.contains('popup__form_type_add')) {
    inputCardData.name = nameCardInput.value;
    inputCardData.link = linkImageCardInput.value;
    addCards(inputCardData);
  }
  closePopup();
});
