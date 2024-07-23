import City from "./city.js";

export default class Manager {

    constructor(mainCanvas, mainCtx) {
        this.mainCanvas = mainCanvas;
        this.mainCtx = mainCtx;
        this.city = new City(this.mainCanvas.width, this.mainCanvas.height);
    }

    init() {
        console.log('Starting Simulation...');
        this.city.init();
        this.#animate();
    }

    #animate() {
        requestAnimationFrame(() => {
            this.mainCtx.clearRect(0, 0, this.mainCanvas.width, this.mainCanvas.height);
            this.city.drawStreets(this.mainCtx);
            this.#animate();
        })
    }
}