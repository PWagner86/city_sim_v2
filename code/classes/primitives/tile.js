export default class Tile {

    constructor(id, x, y, width, height) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.center = {
            x: this.x + (this.width / 2),
            y: this.y + (this.height / 2)
        };
    }

    draw(ctx, {color = 'black', stroke = true, fill = false} = {}) {
        ctx.rect(this.x, this.y, this.width, this.height);
        if(stroke) {
            ctx.strokeStyle = color;
            ctx.stroke();
        };

        if(fill) {
            ctx.fillStyle = color;
            ctx.fill();
        }
    }
}