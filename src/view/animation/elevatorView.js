export default class ElevatorView {
    constructor(scale, height, width, x, y, colour) {
        this.scale = scale || 1;
        this.height = height * scale || 30 * scale;
        this.width = width * scale || 10 * scale;
        this.x = x || 0;
        this.y = y || 0;
        this.colour = colour || '#F00';
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    render(ctx) {
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.colour;
        ctx.fill();
    }
}