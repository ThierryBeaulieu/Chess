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
    }
    async createGame(playerAId, playerBId) {
        try {
            const request = `INSERT INTO chess.game (playerAId, playerBId)
      VALUES (${playerAId}, ${playerBId});`;
            await this.PgService.query(request);
            return true;
        }
        catch (e) {
            return false;
        }
    }
};
GameService = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [postgreSQL_service_1.default])
], GameService);
exports.default = GameService;
