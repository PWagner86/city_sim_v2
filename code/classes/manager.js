import Matrix from "./primitives/matrix.js";

export default class Manager {

    constructor(mainCanvas, mainCtx) {
        this.mainCanvas = mainCanvas;
        this.mainCtx = mainCtx;
        this.matrix = new Matrix(mainCanvas.width, mainCanvas.height);
    }

    init() {
        console.log('Starting Simulation...');
        this.matrix.setMatrix((this.mainCanvas.width / 50), (this.mainCanvas.height / 30));
        console.log(this.matrix.tiles);
        this.matrix.draw(this.mainCtx);
    }
}