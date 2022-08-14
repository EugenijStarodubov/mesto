const page = document.querySelector('.page');
const container = document.querySelector('.popup');
const cardsContainer = document.querySelector('.places__items');
const cardTemplate = document.querySelector('#cardtemplate').content;
const editButton = document.querySelector('.profile__edit-button');
const closeButton = container.querySelector('.popup__close-button');
const addButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const popupForm = document.querySelector('.popup__form');
const editForm = document.querySelector('.popup__form_type_edit');
const addForm = document.querySelector('.popup__form_type_add');
const nameInput = document.querySelector('.popup__input_field_name');
const jobInput = document.querySelector('.popup__input_field_job');
const nameCardInput = document.querySelector('.popup__input_field_card-name');
const linkImageCardInput = document.querySelector(
  '.popup__input_field_card-image-link'
);

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
  for (let i = 1; i <= cardsData.length; ++i) {
    const cardItem = cardTemplate
      .querySelector('.places__item')
      .cloneNode(true);
    cardsContainer.append(cardItem);
    cardItem.querySelector('.places__title').textContent =
      cardsData[i - 1].name;
    cardItem.querySelector('.places__image').src = cardsData[i - 1].link;
    cardItem.querySelector('.places__image').alt = cardsData[i - 1].name;
  }
};

addCards(initialCards);

function showEditForm() {
  container.classList.add('popup_opened');
  editForm.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

const showCardForm = () => {
  container.classList.add('popup_opened');
  addForm.classList.add('popup_opened');
};

const closePopup = () => {
  addForm.classList.remove('popup_opened');
  editForm.classList.remove('popup_opened');
  container.classList.remove('popup_opened');
};

container.addEventListener('click', (evt) => {
  if (evt.target.classList === closeButton.classList) {
    closePopup();
  }
});

let formSubmitHandler = (evt) => {
  evt.preventDefault();
  if (evt.target.classList.contains('popup__form_type_edit')) {
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
  }
  if (evt.target.classList.contains('popup__form_type_add')) {
    let inputCardData = [
      {
        name: nameCardInput.value,
        link: linkImageCardInput.value,
      },
    ];
    console.log(nameCardInput.value);
    inputCardData.name = nameCardInput.value;
    inputCardData.link = linkImageCardInput.value;
    addCards(inputCardData);
    nameCardInput.value = '';
    linkImageCardInput.value = '';
  }
  closePopup();
};

document.querySelector('.page').addEventListener('click', (evt) => {
  if (evt.target.classList.contains('profile__edit-button')) {
    console.log('111111');
    showEditForm();
  }
  if (evt.target.classList.contains('profile__add-button')) {
    console.log('2222222');
    showCardForm();
  }
});

container.addEventListener('submit', formSubmitHandler);
