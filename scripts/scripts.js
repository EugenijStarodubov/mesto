let container = document.querySelector(`.popup`);
let editButton = document.querySelector(`.profile__edit-button`);
let closeButton = container.querySelector(`.popup__close-button`);
let checkPopupOpened = container.classList.contains(`.popup_opened`);

editButton.addEventListener(`click`, () =>
	container.classList.add(`popup_opened`)
);

closeButton.addEventListener(`click`, () =>
	container.classList.remove(`popup_opened`)
); /*

closeButton.addEventListener(`click`, closePopup);

function showPopup() {
	checkWindow = container.classList.add(`popup_opened`);
}

function closePopup() {
	checkWindow = container.classList.remove(`popup_opened`);
}

checkWindow();
*/
