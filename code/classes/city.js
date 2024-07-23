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
    }
}