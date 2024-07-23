import Matrix from "./primitives/matrix.js";

export default class City {

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.matrix = new Matrix(this.width, this.height);
    }

    init() {
        this.matrix.setMatrix((this.width / 50), (this.height / 30));
    }

    drawStreets(ctx) {
        const halfCityHeight = this.height / 2;
        const halfCityWidth = this.width / 2;
        const quarterCityWidth = this.width / 4;
        const threeQuarterCityWidth = halfCityWidth + quarterCityWidth;
        const streetWidth = 40;
        const halfStreetWidth = streetWidth / 2;

        ctx.fillStyle = "#cacaca";
        ctx.strokeStyle = "#ffee00";
        ctx.lineWidth = 2
        ctx.setLineDash([7, 7]);

        // Middlestreet (Vertical)
        ctx.fillRect(halfCityWidth - halfStreetWidth, 0, streetWidth, this.height);
        ctx.beginPath();
        ctx.moveTo(halfCityWidth, 0);
        ctx.lineTo(halfCityWidth, this.height);
        ctx.stroke();

        // Left Street (Vertical)
        ctx.fillRect(quarterCityWidth - halfStreetWidth, 0, streetWidth, this.height);
        ctx.beginPath();
        ctx.moveTo(quarterCityWidth, 0);
        ctx.lineTo(quarterCityWidth, this.height);
        ctx.stroke();

        // Right Street (Vertical)
        ctx.fillRect(threeQuarterCityWidth - halfStreetWidth, 0, streetWidth, this.height);
        ctx.beginPath();
        ctx.moveTo(threeQuarterCityWidth, 0);
        ctx.lineTo(threeQuarterCityWidth, this.height);
        ctx.stroke();

        // Mainstreet (Horizontal)
        ctx.fillRect(0, halfCityHeight - halfStreetWidth, this.width, streetWidth);
        ctx.beginPath();
        ctx.moveTo(0, halfCityHeight);
        ctx.lineTo(this.width, halfCityHeight);
        ctx.stroke();
    }
}
