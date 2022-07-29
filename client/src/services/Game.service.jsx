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
      console.log('ERROR GET @ api-cookie/sessionId');
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
      if (request !== undefined && request !== null) {
        return request;
      }
    } catch (e) {
      console.log('ERROR SENDING POST @ api-player/names');
    }
  }

  async getPlayerData(playerId) {
    try {
      const playerData = await HTTP_SERVER.GET(`api-player/${playerId}`);
      if (playerData !== null && playerData !== undefined) {
        return playerData;
      }
    } catch (e) {
      console.log('ERROR SENDING POST @ api-player/playerid');
    }
  }

  async sendLatestMove(latestMove) {
    try {
      const request = await HTTP_SERVER.POST(
        'api-game/lastPersonnalMove',
        latestMove,
      );
      if (request !== null && request !== undefined) {
        return request;
      }
    } catch (e) {
      console.log('ERROR SENDING POST @ api-player/lastPersonnalMove');
    }
  }
}

const gameService = GameService.getInstance();
Object.freeze(gameService);
export default gameService;
