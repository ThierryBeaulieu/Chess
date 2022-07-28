import HTTP_SERVER from './http.service';

class GameService {
  playerInfo;
  sessionId;
  latestMove;
  adversaryMove;

  constructor() {
    this.playerInfo = undefined;
    this.sessionId = undefined;
    this.latestMove = undefined;
    this.adversaryMove = undefined;

    if (GameService.instance === null) {
      GameService.instance = this;
    }
    return GameService.instance;
  }

  async fetchSessionId() {
    this.sessionId = await HTTP_SERVER.GET('api-cookie/sessionId');
  }
  async getSessionId() {
    if (this.sessionId === undefined) {
      await this.fetchSessionId();
    }
    return this.sessionId;
  }
  async setUserInfo(fname, lname, id) {
    this.playerInfo = {
      fname: fname,
      lname: lname,
      id: id,
    };
    const response = await HTTP_SERVER.POST(
      'api-player/names',
      this.playerInfo,
    );
  }

  async sendLatestMove(latestMove) {
    this.latestMove = await HTTP_SERVER.POST(
      'api-game/lastPersonnalMove',
      latestMove,
    );
  }
}

const gameService = new GameService();
export default gameService;
