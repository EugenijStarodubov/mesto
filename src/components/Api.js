export default class Api {

  #url;
  #configApi;
  #headers;


  constructor({ url, ...configApi }) {

    this.#url = url.url;
    this.#configApi = configApi;


  }

  async renderRequest() {

    const response = await fetch(this.#url, this.#configApi, method = 'GET');
    const json = await response.json();

    if (response.ok) {
      return json;
    }
    throw new Error(response.status);
  }

  #renderError(promise, err) {
    promise.reject(err);
  }

}
