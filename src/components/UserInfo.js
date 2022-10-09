export default class UserInfo {

  #data;

  constructor(data) {
    this.#data = data;
    this.nameSelector = document.querySelector(this.#data.userName);
    this.infoSelector = document.querySelector(this.#data.userInfo);
  }

  getUserInfo() {
    return {
      name: this.nameSelector.textContent,
      job: this.infoSelector.textContent,
    }
  }

  setUserInfo(name, job) {
    this.nameSelector.textContent = name;
    this.infoSelector.textContent = job;
  }
}
