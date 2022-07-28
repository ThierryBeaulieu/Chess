import HTTP_SERVER from './http.service';

export default class GameService {
  playerInfo;
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
  async setUserInfo(fname, lname) {
    this.playerInfo = {
      fname: fname,
      lname: lname,
    };
    const response = await HTTP_SERVER.POST(
      'api-player/names',
      this.playerInfo,
    );
    return response;
  }

  async sendLatestMove(latestMove) {
    this.latestMove = await HTTP_SERVER.POST(
      'api-game/lastPersonnalMove',
      latestMove,
    );
  }
}
