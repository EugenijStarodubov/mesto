let container = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = container.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__input_field_name');
let jobInput = document.querySelector('.popup__input_field_job');
let popupForm = document.querySelector('.popup__form');
let currentName = 'Жак-Ив Кусто';
let currentJob = 'Исследователь океана';

function showPopup() {
  container.classList.add('popup_opened');
  nameInput.value = currentName;
  jobInput.value = currentJob;
}

function hidePopup() {
  container.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  currentName = profileName.textContent;
  currentJob = profileJob.textContent;
  hidePopup();
}

editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', hidePopup);

popupForm.addEventListener('submit', formSubmitHandler);
