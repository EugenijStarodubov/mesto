

export default class UserInfo {

	#name
	#info
	data
	#inputs
	#placeholders;


	constructor(data, inputs) {
		this.data = data
		// this.#inputs = inputs
		this.nameSelector = document.querySelector(this.data.userName);
		this.infoSelector = document.querySelector(this.data.userInfo);
		// this.#placeholders = this.getUserInfo();


	}

	getUserInfo() {
		return {
			name: this.nameSelector.textContent,
			info: this.infoSelector.textContent,
		}
	}

	// setPlaceholders() {
	// 	this.#inputs()[0].value = this.getUserInfo().name;
	// 	this.#inputs()[1].value = this.getUserInfo().info;
	// }

	setUserInfo(name, job) {
		// if (this.#inputs()[0].value && this.#inputs()[1].value) {
		this.nameSelector.textContent = name;
		this.infoSelector.textContent = job;
		// }

	}
}