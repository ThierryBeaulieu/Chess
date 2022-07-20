import HTTP_SERVER from './http.service';

export default class GameManager {
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
  async fetchAdversaryMove() {
    this.adversaryMove = await HTTP_SERVER.GET('api-game/lastAdversaryMove');
  }
  async sendLatestMove(latestMove) {
    this.latestMove = await HTTP_SERVER.POST(
      'api-game/lastPersonnalMove',
      latestMove,
    );
  }
}
