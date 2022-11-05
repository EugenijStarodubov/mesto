export default class Api {

  #url;
  #configApi;

  constructor({ url, ...configApi }) {

    this.#url = url;
    this.#configApi = configApi;
  }

  async #renderRequest(path, method = "GET", body) {

    const options = { ...this.#configApi, method };

    if (body) {

      (typeof body === "string") ? options.body = body
        : options.body = JSON.stringify(body);
    }
    const response = await fetch(this.#url + path, options);
    const json = await response.json();

    if (response.ok) {
      return json;
    }

    throw new Error(json.message);
  }

  getUser() {
    return this.#renderRequest("users/me");
  }

  getCards() {
    return this.#renderRequest("cards");
  }

  updateUser(inputValues) {

    return this.#renderRequest('users/me', 'PATCH', inputValues);
  }

  addCard(inputValues) {
    return this.#renderRequest("cards", 'POST', inputValues);
  }

  setLike(id) {
    return this.#renderRequest(`cards/${id}/likes`, 'PUT');
  }

  removeLike(id) {
    return this.#renderRequest(`cards/${id}/likes`, 'PUT');
  }

  deleteCard(id) {
    return this.#renderRequest(`cards/${id}`, "DELETE");
  }

  setAvatar(data) {
    console.log(data)
    return this.#renderRequest('users/me/avatar', 'PATCH', data);
  }
}
