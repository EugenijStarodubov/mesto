export class Card {

  #cardsTemplate;
  #cardItem;
  #name;
  #link;
  #cardImage;
  #handleCardClick;
  #handleDeleteClick;
  #likesSet;
  #ownerId;
  #deleteButton;
  #handleLikeClick;
  #isLiked;
  #likeButton;
  #id

  constructor(cardsData, cardsIdSelector, userId, handleCardClick, handleDeleteClick, handleLikeClick) {

    this.#cardsTemplate = document.querySelector(cardsIdSelector);
    this.#name = cardsData.name;
    this.#link = cardsData.link;

    this.#ownerId = cardsData.ownerId;
    this.userId = userId;

    this.#handleCardClick = handleCardClick;
    this.#handleDeleteClick = handleDeleteClick;
    this.#handleLikeClick = handleLikeClick;

    this.#likesSet = new Set(cardsData.likes);
    this.#isLiked = this.#likesSet.has(this.userId);
  }

  #getTemplate() {
    return this.#cardsTemplate
      .content.querySelector('.places__item').cloneNode(true);
  }


  #handleLike() {
    this.#handleLikeClick(this.#isLiked)
  }

  #setLikeCounter() {
    this.#cardItem.querySelector('.places__likes-counter').textContent = this.#likesSet.size;
  }

  setLike(id) {
    this.#likeButton.classList.add('places__like-button_active');

    this.#likesSet.add(id);
    this.#setLikeCounter();

    this.#isLiked = true;
  }

  removeLike(id) {
    this.#likeButton.classList.remove('places__like-button_active');

    this.#likesSet.delete(id);
    this.#setLikeCounter();

    this.#isLiked = false;
  }


  #deleteHandler() {
    this.#handleDeleteClick();
  }

  #setEventListeners() {

    this.#likeButton
      .addEventListener('click', this.#handleLike.bind(this));

    this.#deleteButton
      .addEventListener('click', this.#deleteHandler.bind(this));

    this.#cardImage
      .addEventListener('click', () => {
        this.#handleCardClick(this.#name, this.#link);
      });
  }

  generateCard() {
    this.#cardItem = this.#getTemplate();

    this.#cardImage = this.#cardItem.querySelector('.places__image');
    this.#deleteButton = this.#cardItem.querySelector('.places__delete-button');
    this.#likeButton = this.#cardItem.querySelector('.places__like-button');

    this.#cardItem.querySelector('.places__title').textContent = this.#name;

    this.#cardImage.src = this.#link;
    this.#cardImage.alt = this.#name;

    this.#setLikeCounter();
    this.#setEventListeners();

    (this.userId !== this.#ownerId) && this.#deleteButton.remove();

    return this.#cardItem;
  }

  deleteCard() {
    this.#cardItem.remove();
    this.#cardItem = null;
  }
}





