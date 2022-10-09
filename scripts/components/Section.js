export default class Section {

	#renderedItems;
	#renderer;
	#container;

	constructor({ items, renderer }, containerSelector) {

		this.#renderedItems = items;
		this.#renderer = renderer;
		this.#container = containerSelector;

	}

	#clear() {
		this.#container.innerHTML = '';
	}

	renderItems() {
		this.#clear();
		this.#renderedItems.forEach(item => this.#renderer(item));
	}

	addItem(item) {
		this.#container.prepend(item)
	}

	// renderItems() {
	// 	this.#clear();
	// 	this.#renderedItems.forEach(item => this.#renderer(item));
	// }

	// addItem() {
	// 	this.#container.prepend(item.item)
	// }
}