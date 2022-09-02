const profileItem = document.querySelector('.profile__card');
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
const imagePopupItem = imagePopup.querySelector('.popup__image');
const imageCaption = imagePopup.querySelector('.popup__image-caption');
const linkImageCardInput = document.querySelector(
  '.popup__input_field_card-image-link'
);
const inputCardData = [
  {
    name: '',
    link: '',
  },
];

const cardListener = (evt) => {
  if (evt.target.classList.contains('places__like-button')) {
    likeCard(evt);
  }
  if (evt.target.classList.contains('places__delete-button')) {
    removeCard(evt);
  }
  if (evt.target.classList.contains('places__image')) {
    showImage(evt);
    showPopup(imagePopup);
  }
};

const addCard = (cardItem) => {
  cardsContainer.prepend(cardItem);
};

const createCard = (cardsData) => {
  const cardItem = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = cardItem.querySelector('.places__image');
  cardItem.querySelector('.places__title').textContent = cardsData.name;
  cardImage.src = cardsData.link;
  cardImage.alt = cardsData.name;
  if (cardsData.name && cardsData.link) {
    cardItem.addEventListener('click', cardListener);
    return cardItem;
  }
};

const initCards = (cardsData) => {
  cardsData.forEach((elem) => {
    addCard(createCard(elem));
  });
};

initCards(initialCards);

const showPopup = function (popup) {
  if (!popup.classList.contains('popup_type_image')) {
    resetValidation(popup);
  }
  popup.classList.add('popup_opened');
};

const showImage = (evt) => {
  imagePopupItem.src = evt.target.src;
  imagePopupItem.alt = evt.target.alt;
  imageCaption.textContent = evt.target.alt;
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

const removeCard = (evt) => {
  const cardRemoveItem = evt.target.closest('.places__item');
  cardRemoveItem.remove();
};

popupContainer.addEventListener('click', (evt) => {
  if (
    evt.target.classList.contains('popup__close-button') ||
    evt.target.classList.contains('popup') ||
    evt.target.classList.contains('popup__modal-window')
  ) {
    closePopup(popupContainer.querySelector('.popup_opened'));
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    closePopup(popupContainer.querySelector('.popup_opened'));
  }
});

const likeCard = (evt) => {
  evt.target.classList.toggle('places__like-button_active');
};

profileItem.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('profile__edit-button')) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    showPopup(editPopup);
  }
  if (evt.target.classList.contains('profile__add-button')) {
    document.querySelector('.popup__form_type_add').reset();
    showPopup(addPopup);
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
    closePopup(editPopup);
  });

popupContainer
  .querySelector('.popup__form_type_add')
  .addEventListener('submit', (evt) => {
    evt.preventDefault();
    inputCardData.name = nameCardInput.value;
    inputCardData.link = linkImageCardInput.value;
    addCard(createCard(inputCardData));
    closePopup(addPopup);
  });
