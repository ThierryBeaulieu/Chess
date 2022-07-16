import HTTP_SERVER from './http.service';

export default class GameManager {
  sessionId;

  constructor() {
    this.sessionId = HTTP_SERVER.GET('api-cookie/sessionId');
    console.log(this.sessionId);
  }

  getSessionId() {
    return this.sessionId;
  }
}
