const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

const setButtonInactive = function (buttonElement) {
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
};

const setButtonActive = function (buttonElement) {
  buttonElement.classList.remove(config.inactiveButtonClass);
  buttonElement.removeAttribute('disabled', false);
};

const resetValidation = function (popup) {
  const formItem = popup.querySelector(config.formSelector);
  const inputItem = popup.querySelector(config.inputSelector);
  const submitButton = popup.querySelector(config.submitButtonSelector);
  hideInputError(formItem, inputItem);
  setButtonInactive(submitButton);
};

const hasInputsErrors = function (inputsList) {
  return inputsList.some(function (input) {
    return !input.validity.valid;
  });
};

const toggleButtonState = function (inputsList, buttonElement) {
  if (hasInputsErrors(inputsList)) {
    setButtonInactive(buttonElement);
  } else {
    setButtonActive(buttonElement);
  }
};

const showInputError = function (form, input, errorMessage) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

const hideInputError = function (form, input) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(config.errorClass);
};

const checkValidity = function (form, input) {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage);
  } else {
    hideInputError(form, input);
  }
};

const setEventListeners = function (form) {
  const inputsList = Array.from(form.querySelectorAll(config.inputSelector));
  const buttonElement = form.querySelector(config.submitButtonSelector);
  toggleButtonState(inputsList, buttonElement);
  inputsList.forEach(function (input) {
    input.addEventListener('input', function () {
      checkValidity(form, input);
      toggleButtonState(inputsList, buttonElement);
    });
  });
};

const enableValidation = function (config) {
  const formsList = Array.from(document.querySelectorAll(config.formSelector));
  /*Но ведь в данном случае form - переменная для метода forEach, который перебирает массив из 77 строки*/
  formsList.forEach(function (form) {
    setEventListeners(form);
  });
};

enableValidation(config);
