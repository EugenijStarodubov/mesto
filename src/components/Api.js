export default class Api {

  #url;
  #header;
  #configApi;
  #path
  #body

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



    console.log(options.body)

    const response = await fetch(this.#url + path, options);
    console.log(response)
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

  createUser(inputValues) {

    return this.#renderRequest('users/me', 'PATCH', inputValues);
  }

  deleteCard(id) {
    return this.#renderRequest(`user/me/${id}`, "DELETE");
  }
}
