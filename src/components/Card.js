export class Card {

  #cardsTemplate;
  #cardItem;
  #name;
  #link;
  #cardImage;
  #handleCardClick;
  #handleDeleteClick;
  #likesCounter;
  #ownerId;
  #deleteButton;
  #handleLikeClick;
  #isLiked;
  #likeButton;
  #likesAmount;
  #userId;

  constructor(cardsData, cardsIdSelector, userId, handleCardClick, handleDeleteClick, handleLikeClick) {

    this.#cardsTemplate = document.querySelector(cardsIdSelector);

    this.#name = cardsData.name;
    this.#link = cardsData.link;

    this.#ownerId = cardsData.owner._id;
    this.#userId = userId;
    this.#likesAmount = cardsData.likes.length;

    this.#handleCardClick = handleCardClick;
    this.#handleDeleteClick = handleDeleteClick;
    this.#handleLikeClick = handleLikeClick;

    this.#isLiked = !!cardsData.likes.find(user => user._id === this.#userId);
  }

  #getTemplate() {
    return this.#cardsTemplate
      .content.querySelector('.places__item').cloneNode(true);
  }

  #handleLike() {
    this.#handleLikeClick(this.#isLiked)
  }

  #setLikesAmount(likes) {

    this.#likesCounter.textContent = likes;
  }

  setLike(likes) {

    this.#likeButton.classList.add('places__like-button_active');
    this.#isLiked = true;
    this.#setLikesAmount(likes);
  }

  removeLike(likes) {

    this.#likeButton.classList.remove('places__like-button_active');
    this.#isLiked = false;
    this.#setLikesAmount(likes);
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
    this.#likesCounter = this.#cardItem.querySelector('.places__likes-counter');

    this.#cardItem.querySelector('.places__title').textContent = this.#name;

    this.#cardImage.src = this.#link;
    this.#cardImage.alt = this.#name;

    this.#setEventListeners();

    if (this.#userId !== this.#ownerId) {
      this.#deleteButton.remove();
    }

    if (this.#isLiked) {
      this.setLike(this.#likesAmount);
    }

    this.#setLikesAmount(this.#likesAmount);

    return this.#cardItem;
  }

  deleteCard() {
    this.#cardItem.remove();
    this.#cardItem = null;
  }
}





