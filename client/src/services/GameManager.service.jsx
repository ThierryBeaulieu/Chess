import HTTP_SERVER from './http.service';

export default class GameManager {
  sessionId;

  async fetchSessionId() {
    this.sessionId = await HTTP_SERVER.GET('api-cookie/sessionId');
  }
  async getSessionId() {
    await this.fetchSessionId();
    return this.sessionId;
  }
}
