export class Card {

  #cardsTemplate;
  #cardItem;
  #name;
  #link;
  #cardImage;
  #handleCardClick;

  constructor(cardsData, cardsIdSelector, handleCardClick) {
    this.#cardsTemplate = document.querySelector(cardsIdSelector);
    this.#name = cardsData.name;
    this.#link = cardsData.link;
    this.#handleCardClick = handleCardClick;
  }

  #getTemplate() {
    return this.#cardsTemplate.cloneNode(true).content;
  }

  #handleLikeButton(evt) {
    evt.target.classList.toggle('places__like-button_active');
  }

  #handleDeleteButton(evt) {
    evt.target.closest('.places__item').remove();
  }

  #setEventListeners() {

    this.#cardItem
      .querySelector('.places__like-button')
      .addEventListener('click', this.#handleLikeButton.bind(this));

    this.#cardItem
      .querySelector('.places__delete-button')
      .addEventListener('click', this.#handleDeleteButton.bind(this));

    this.#cardItem
      .querySelector('.places__image')
      .addEventListener('click', () => {
        this.#handleCardClick(this.#name, this.#link);
      });
  }

  generateCard() {
    this.#cardItem = this.#getTemplate();

    this.#cardImage = this.#cardItem.querySelector('.places__image');
    this.#cardItem.querySelector('.places__title').textContent = this.#name;
    this.#cardImage.src = this.#link;
    this.#cardImage.alt = this.#name;

    this.#setEventListeners();

    return this.#cardItem;
  }
}





