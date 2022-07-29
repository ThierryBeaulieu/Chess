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
    try {
      const request = await HTTP_SERVER.GET('api-cookie/sessionId');
      return request;
    } catch (e) {
      return undefined;
    }
  }

  async setUserInfo(fname, lname, playerId) {
    const playerInfo = {
      fname: fname,
      lname: lname,
      id: playerId,
      score: null,
    };
    try {
      const request = await HTTP_SERVER.POST('api-player/names', playerInfo);
      console.log(request);
      if (request === undefined || request === null) {
        return undefined;
      } else {
        return request;
      }
    } catch (e) {
      console.log('ERROR SENDING POST @ api-player/names');
      return undefined;
    }
  }

  async getPlayerData(playerId) {
    try {
      const playerData = await HTTP_SERVER.GET(`api-player/${playerId}`);
      if (playerData !== null && playerData !== undefined) {
        return playerData;
      } else {
        return undefined;
      }
    } catch (e) {
      console.log('ERROR SENDING POST @ api-player/playerid');
      return undefined;
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
