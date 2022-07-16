"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cookie_1 = __importDefault(require("../classes/Tools/Cookie"));
const game_service_1 = __importDefault(require("../services/game.service"));
const typedi_1 = __importDefault(require("typedi"));
const cookieRouter = require('express').Router();
const DEFAULT_SESSION_ID_SIZE = 24;
class CookieController {
    constructor() {
        this.gameService = typedi_1.default.get(game_service_1.default);
        this.router = cookieRouter;
        this.setRoutersPaths();
    }
    setRoutersPaths() {
        const gameService = this.gameService;
        this.router.get('/sessionId', function (req, res) {
            try {
                const sessionId = Cookie_1.default.generateSessionId(DEFAULT_SESSION_ID_SIZE);
                gameService.addUser(sessionId);
                console.log(`[USER SESSIONID SENT: ${sessionId}]`);
                res.status(200).send(sessionId);
            }
            catch (e) {
                res.status(500).send();
            }
        });
    }
    getRouter() {
        return this.router;
    }
}
exports.default = CookieController;
