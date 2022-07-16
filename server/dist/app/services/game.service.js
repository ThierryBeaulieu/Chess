"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const postgreSQL_service_1 = __importDefault(require("./postgreSQL.service"));
let GameService = class GameService {
    constructor(PgService) {
        this.PgService = PgService;
        this.DEFAULT_SCORE = 1200;
    }
    // Users
    async addUser(sessionId) {
        try {
            const request = `INSERT INTO chess.user (sessionId)
      VALUES ('${sessionId}');`;
            await this.PgService.query(request);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    async getUser(sessionId) {
        try {
            const request = `INSERT INTO chess.user (sessionId)
      VALUES ('${sessionId}');`;
            const userData = await this.PgService.query(request);
            return userData;
        }
        catch (e) {
            return null;
        }
    }
    // Games
    async createGame(gameId, playerAId, playerBId) {
        try {
            const request = `INSERT INTO chess.game (gameId, playerAId, playerBId)
      VALUES ('${gameId}', '${playerAId}', '${playerBId}');`;
            await this.PgService.query(request);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    async getGame(gameId) {
        try {
            const request = `SELECT * FROM chess.game WHERE gameId='${gameId}';`;
            const gameData = await this.PgService.query(request);
            return gameData;
        }
        catch (e) {
            return null;
        }
    }
    async setWinner(winnerId, gameId) {
        try {
            const request = `
      UPDATE chess.game
      SET isOver = true,
        winnerId = '${winnerId}'
      WHERE gameId = '${gameId}';`;
            await this.PgService.query(request);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    // Players
    async addPlayer(playerId, firstName, lastName, score) {
        try {
            const request = `INSERT INTO chess.player (playerId, fname, lname, score)
      VALUES ('${playerId}', '${firstName}', '${lastName}', ${score});`;
            await this.PgService.query(request);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    async getPlayer(playerId) {
        try {
            const request = `SELECT * FROM chess.player WHERE playerId=${playerId};`;
            const playersInfo = await this.PgService.query(request);
            return playersInfo;
        }
        catch (e) {
            return null;
        }
    }
    // Moves
    async makeMove(gameId, playerId, userMove) {
        try {
            const request = `INSERT INTO chess.move(gameId, playerId, userMove)
      VALUES ('${gameId}', '${playerId}', '${userMove}');`;
            await this.PgService.query(request);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    async getMove(gameId) {
        try {
            const request = `SELECT * FROM chess.move WHERE gameId='${gameId}';`;
            const usermove = await this.PgService.query(request);
            return usermove;
        }
        catch (e) {
            return null;
        }
    }
};
GameService = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [postgreSQL_service_1.default])
], GameService);
exports.default = GameService;
