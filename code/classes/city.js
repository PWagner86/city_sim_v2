import Matrix from "./primitives/matrix.js";

export default class City {

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.matrix = new Matrix(this.width, this.height);
    }

    init(ctx) {
        this.matrix.setMatrix((this.width / 50), (this.height / 30));
        // this.matrix.draw(ctx);
        this.#drawStreets(ctx);
    }

    #drawStreets(ctx) {
        const streetWidth = 40;
        ctx.fillStyle = "#cacaca";
        ctx.strokeStyle = "#ffee00";
        ctx.lineWidth = 2

        // Middlestreet (Vertical)
        ctx.fillRect((this.width / 2) - (streetWidth / 2), 0, streetWidth, this.height);
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        ctx.moveTo(this.width / 2, 0);
        ctx.lineTo(this.width / 2, this.height);
        ctx.stroke();

        // Left Street (Vertical)
        ctx.fillRect((this.width / 4) - (streetWidth / 2), 0, streetWidth, this.height);
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        ctx.moveTo(this.width / 4, 0);
        ctx.lineTo(this.width / 4, this.height);
        ctx.stroke();

        // Right Street (Vertical)
        ctx.fillRect((this.width / 2) + (this.width / 4) - (streetWidth / 2), 0, streetWidth, this.height);
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        ctx.moveTo((this.width / 2) + (this.width / 4), 0);
        ctx.lineTo((this.width / 2) + (this.width / 4), this.height);
        ctx.stroke();

        // Mainstreet (Horizontal)
        ctx.fillRect(0, (this.height / 2) - (streetWidth / 2), this.width, streetWidth);
        ctx.beginPath();
        ctx.setLineDash([7, 7]);
        ctx.moveTo(0, this.height / 2);
        ctx.lineTo(this.width, this.height / 2);
        ctx.stroke();
    }
}
