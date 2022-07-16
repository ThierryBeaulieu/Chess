"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cookie {
    static generateSessionId(size) {
        let sessionId = '';
        for (let i = 0; i < size; i++) {
            sessionId += this.CHARACTERS.charAt(Math.floor(Math.random() * this.CHARACTERS.length));
        }
        return sessionId;
    }
}
exports.default = Cookie;
Cookie.CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
