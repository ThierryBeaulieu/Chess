import HTTP_SERVER from './http.service';

export default class GameService {
  sessionId;
  latestMove;
  adversaryMove;

  async fetchSessionId() {
    this.sessionId = await HTTP_SERVER.GET('api-cookie/sessionId');
  }
  async getSessionId() {
    await this.fetchSessionId();
    return this.sessionId;
  }

  async sendLatestMove(latestMove) {
    this.latestMove = await HTTP_SERVER.POST(
      'api-game/lastPersonnalMove',
      latestMove,
    );
  }
}
