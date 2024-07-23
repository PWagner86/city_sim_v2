import Matrix from "./primitives/matrix.js";

export default class City {

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.matrix = new Matrix(this.width, this.height);
    }

    init(ctx) {
        this.matrix.setMatrix((this.width / 50), (this.height / 30));
        this.matrix.draw(ctx);
        console.log(this.matrix.tiles.find(t=>t.id === 14));
        this.#drawStreets(ctx);
    }

    #drawStreets(ctx) {
        ctx.fillStyle = "red";
        for(const tile of this.matrix.tiles) {
            if(tile.y === 260 && (tile.x >= 0 || tile.x <= 980)) ctx.fillRect(tile.x, tile.y, tile.width, tile.height);
            if(tile.y === 280 && (tile.x >= 0 || tile.x <= 980)) ctx.fillRect(tile.x, tile.y, tile.width, tile.height);
            
        }
    }
}