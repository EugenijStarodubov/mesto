const container = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = container.querySelector('.popup__close-button');

const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_field_name');
const jobInput = document.querySelector('.popup__input_field_job');
const popupForm = document.querySelector('.popup__form');

function showPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function popupToggle() {
  container.classList.toggle('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupToggle();
}

editButton.addEventListener('click', popupToggle);
closeButton.addEventListener('click', popupToggle);

popupForm.addEventListener('submit', formSubmitHandler);

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

const cardsContainer = document.querySelector('.places__items');
const cardTemplate = document.querySelector('#cardtemplate').content;

const addCards = (cardsData) => {
  for (let i = 1; i <= initialCards.length; ++i) {
    const cardItem = cardTemplate
      .querySelector('.places__item')
      .cloneNode(true);
    cardsContainer.append(cardItem);
    cardItem.querySelector('.places__title').textContent =
      initialCards[i - 1].name;
    cardItem.querySelector('.places__image').src = initialCards[i - 1].link;
    cardItem.querySelector('.places__image').alt = initialCards[i - 1].name;
  }
};

addCards(initialCards);
