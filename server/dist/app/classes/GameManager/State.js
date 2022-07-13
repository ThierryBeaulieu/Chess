"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var State;
(function (State) {
    State[State["FirstMove"] = 0] = "FirstMove";
    State[State["Stalemate"] = 1] = "Stalemate";
    State[State["Checkmate"] = 2] = "Checkmate";
    State[State["Check"] = 3] = "Check";
    State[State["None"] = 4] = "None";
})(State || (State = {}));
exports.default = State;
