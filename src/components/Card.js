export class Card {

  #cardsTemplate;
  #cardItem;
  #name;
  #link;
  #cardImage;
  #handleCardClick;
  #likesSet;
  #ownerId
  #api


  constructor(cardsData, cardsIdSelector, handleCardClick, api) {
    console.log(cardsData)
    this.#cardsTemplate = document.querySelector(cardsIdSelector);
    this.#name = cardsData.name;
    this.#link = cardsData.link;
    this.#api = api;
    this.#ownerId = cardsData.ownerId;
    this.#handleCardClick = handleCardClick;
    this.#likesSet = new Set(cardsData.likes);

  }

  #getTemplate() {
    return this.#cardsTemplate.cloneNode(true).content;
  }

  #handleLikeClick(evt) {
    evt.target.classList.toggle('places__like-button_active');
  }

  // setLike(evt) {
  //   evt.target.classList.add('places__like-button_active');
  //   this.#likesSet.delete(this.#ownerId)

  // }

  // removeLike(evt) {
  //   evt.target.classList.remove('places__like-button_active');
  //   this.#likesSet.add(this.#ownerId);

  // }

  #handleDeleteButton(evt) {
    evt.target.closest('.places__item').remove();
  }

  #setLikeCounter() {
    this.#cardItem.querySelector('.places__likes-counter').textContent = this.#likesSet.size;
    console.log(this.#ownerId)
    this.#api.setLikes(this.ownerId)
  }

  checkLikes() {
    return (this.#likesSet.has(this.#ownerId)) ? true : false;
  }
  // #checkLikes() {

  //   (this.#likesSet.has(this.#ownerId)) ? this.#likesSet.delete(this.#ownerId)
  //     : this.#likesSet.add(this.#ownerId);
  // }

  #setEventListeners() {

    this.#cardItem
      .querySelector('.places__like-button')
      .addEventListener('click', this.#handleLikeClick.bind(this));

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
    this.#setLikeCounter();
    this.#setEventListeners();

    return this.#cardItem;
  }
}





