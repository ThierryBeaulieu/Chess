import React from 'react';
import './Board.css';

const colorOptions = {
  white: 'white',
  black: 'black',
};

class Tile {
  x;
  y;
  WIDTH;
  HEIGHT;
  color;
  id;

  constructor(i, j, WIDTH, HEIGHT) {
    this.x = i * WIDTH;
    this.y = j * WIDTH;
    this.HEIGHT = HEIGHT;
    this.WIDTH = WIDTH;
    this.id = WIDTH * j + i;
    this.setColor(i, j);
  }

  setColor(i, j) {
    if ((i + j) % 2 === 0) {
      this.color = colorOptions.white;
    } else {
      this.color = colorOptions.black;
    }
  }
}

export default class Board extends React.Component {
  windowsWidth;
  tiles;
  NB_TILES;
  SVG_WIDTH;
  TILE_WIDTH;
  TILE_HEIGHT;

  constructor() {
    super();
    this.NB_TILES = 8;
    this.SVG_WIDTH = 100;
    this.TILE_WIDTH = this.SVG_WIDTH / this.NB_TILES;
    this.TILE_HEIGHT = this.TILE_WIDTH;
    this.tiles = [];
    this.initialize();
  }

  initialize() {
    for (let i = 0; i < this.NB_TILES; i++) {
      for (let j = 0; j < this.NB_TILES; j++) {
        this.tiles[this.NB_TILES * i + j] = new Tile(
          i,
          j,
          this.TILE_WIDTH,
          this.TILE_HEIGHT,
        );
      }
    }
  }

  render() {
    return (
      <>
        <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
          {this.tiles.map((tile) => {
            return (
              <rect
                className={tile.color}
                x={tile.x}
                y={tile.y}
                width={this.TILE_WIDTH}
                height={this.TILE_WIDTH}
                key={tile.id}
              />
            );
          })}
        </svg>
      </>
    );
  }
}
