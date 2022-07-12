import HTTP_SERVER from './http.service';

export default class GameManager {
  cookie;

  constructor() {
    this.getPersonnalCookie();
  }

  getPersonnalCookie() {
    HTTP_SERVER.GET('api-cookie/user/');
  }
}
