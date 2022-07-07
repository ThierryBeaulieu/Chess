import assert from 'assert';
import { add } from './app.js';
import Board from './Board/Board.js';

describe('add', () => {
  it('should 1 + 2 = 3 ', () => {
    assert.strictEqual(add(1, 2), 3);
  });
});

describe('test constructor of Board', () => {
  it('should contain a board size', () => {
    const board = new Board(8, 8);
    assert.strictEqual(board.tile[0][0], null);
    assert.strictEqual(board.tile[7][7], null);
  });
});
