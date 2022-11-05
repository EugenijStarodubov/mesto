export default class UserInfo {

  #data;

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
      userId: this.userId,

    }
  }

  setUserInfo(name, about, id) {

    this.nameSelector.textContent = name;
    this.infoSelector.textContent = about;
    this.userId = id

  }



  setAvatar(url) {

    this.avatarSelector.src = url;

  }
}
