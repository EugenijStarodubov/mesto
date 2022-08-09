let container = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = container.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__input_field_name');
let jobInput = document.querySelector('.popup__input_field_job');
let popupForm = document.querySelector('.popup__form');
let currentName;
let currentJob;

function showPopup() {
  container.classList.add('popup_opened');
  currentName = nameInput.value;
  currentJob = jobInput.value;
}

function hidePopup() {
  container.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  hidePopup();
}

editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', hidePopup);

popupForm.addEventListener('submit', formSubmitHandler);
