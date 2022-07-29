import HTTP_SERVER from './http.service';

class GameService {
  static myInstance = null;

  static getInstance() {
    if (GameService.myInstance == null) {
      GameService.myInstance = new GameService();
    }
    return this.myInstance;
  }

  async fetchSessionId() {
    return await HTTP_SERVER.GET('api-cookie/sessionId');
  }

  async setUserInfo(fname, lname, playerId) {
    const playerInfo = {
      fname: fname,
      lname: lname,
      id: playerId,
      score: null,
    };
    try {
      await HTTP_SERVER.POST('api-player/names', playerInfo);
    } catch (e) {
      console.log('ERROR SENDING POST @ api-player/names');
    }
  }

  async sendLatestMove(latestMove) {
    this.latestMove = await HTTP_SERVER.POST(
      'api-game/lastPersonnalMove',
      latestMove,
    );
  }
}

const gameService = GameService.getInstance();
Object.freeze(gameService);
export default gameService;
