export default class Section {

  #renderedItems;
  #renderer;
  #container;

  constructor({ renderer, cardsContainer }) {


    this.#renderer = renderer;
    this.#container = cardsContainer;

  }

  #clear() {
    this.#container.innerHTML = '';
  }

  renderItems(items) {
    this.#clear();
    items.forEach(item => this.#renderer(item));
  }

  addItem(item) {
    this.#container.prepend(item);
  }

  addItems(items) {
    items.forEach(item => this.addItem(item))
  }
}
