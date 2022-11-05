export default class UserInfo {

  #data;
  #userId;

  constructor(data) {

    this.#data = data;

    this.nameSelector = document.querySelector(this.#data.userName);
    this.infoSelector = document.querySelector(this.#data.userInfo);
    this.avatarSelector = document.querySelector(this.#data.avatar);
    this.avatarSelector.textContent = this.avatarSelector.src;
  }

  getUserInfo() {

    return {
      name: this.nameSelector.textContent,
      about: this.infoSelector.textContent,
    }
  }

  setUserId(userId) {
    this.#userId = userId;
  }

  getUserId() {
    return this.#userId;
  }

  setUserInfo(data) {

    this.nameSelector.textContent = data.name;
    this.infoSelector.textContent = data.about;
    this.avatarSelector.src = data.avatar;
  }

  setAvatar(url) {

    this.avatarSelector.src = url;
  }
}
