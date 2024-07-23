import Tile from "./tile.js";

export default class Matrix {

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.tiles = [];
    }

    setMatrix(tileWidth, tileHeight) {
        let id = 0;
        for(let x = 0; x < this.width; x += tileWidth) {
            for(let y = 0; y < this.height; y += tileHeight) {
                this.tiles.push(new Tile(id, x, y, tileWidth, tileHeight))
                id++;
            }
        }
    }

    draw(ctx) {
        for(const tile of this.tiles) {
            tile.draw(ctx);
        }
    }
}