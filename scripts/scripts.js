let container = document.querySelector(`.popup`);
let editButton = document.querySelector(`.profile__edit-button`);
let closeButton = container.querySelector(`.popup__close-button`);

editButton.addEventListener(`click`, showPopup);
closeButton.addEventListener(`click`, hidePopup);

function showPopup() {
	container.classList.add(`popup_opened`);
}

function hidePopup() {
	container.classList.remove(`popup_opened`);
}

let profileName = document.querySelector(`.profile__title`);
let profileJob = document.querySelector(`.profile__subtitle`);
let saveButton = document.querySelector(`.popup__button`);

//saveButton.addEventListener(`submit`, newUser);

let nameInput = document.querySelector(`.popup__input-name`);
let jobInput = document.querySelector(`.popup__input-job`);
let popupForm = document.querySelector(`.popup__container`);

function formSubmitHandler(evt) {
	evt.preventDefault();
	profileName.textContent = nameInput.value;
	profileJob.textContent = jobInput.value;
	hidePopup();
}

popupForm.addEventListener(`submit`, formSubmitHandler);
