export class Card {

  #cardsTemplate;
  #cardItem;
  #name;
  #link;
  #cardImage;
  #handleCardClick;
  #handleDeleteClick
  #likesSet;
  #ownerId
  #id
  #deleteButton

  constructor(cardsData, cardsIdSelector, handleCardClick, handleDeleteClick) {

    this.#cardsTemplate = document.querySelector(cardsIdSelector);
    this.#name = cardsData.name;
    this.#link = cardsData.link;
    this.#id = cardsData.id;
    this.#ownerId = cardsData.ownerId;
    this.#handleCardClick = handleCardClick;
    this.#handleDeleteClick = handleDeleteClick;
    this.#likesSet = new Set(cardsData.likes);

  }

  #getTemplate() {
    return this.#cardsTemplate
      .content.querySelector('.places__item').cloneNode(true);
  }

  #handleLikeClick(evt) {
    evt.target.classList.toggle('places__like-button_active');
  }

  #setLikeCounter() {
    this.#cardItem.querySelector('.places__likes-counter').textContent = this.#likesSet.size;

  }

  checkLikes() {
    return (this.#likesSet.has(this.#ownerId)) ? true : false;
  }

  #deleteHandler() {
    this.#handleDeleteClick();
  }

  #setEventListeners() {

    this.#cardItem
      .querySelector('.places__like-button')
      .addEventListener('click', this.#handleLikeClick.bind(this));

    this.#deleteButton
      .addEventListener('click', this.#deleteHandler.bind(this));

    this.#cardItem
      .querySelector('.places__image')
      .addEventListener('click', () => {
        this.#handleCardClick(this.#name, this.#link);
      });
  }

  generateCard() {
    this.#cardItem = this.#getTemplate();

    this.#cardImage = this.#cardItem.querySelector('.places__image');
    this.#deleteButton = this.#cardItem.querySelector('.places__delete-button');

    this.#cardItem.querySelector('.places__title').textContent = this.#name;
    this.#cardImage.src = this.#link;
    this.#cardImage.alt = this.#name;
    this.#setLikeCounter();
    this.#setEventListeners();

    return this.#cardItem;
  }

  deleteCard() {
    console.log(this.#cardItem)
    this.#cardItem.remove();
    this.#cardItem = null;

  }
}





